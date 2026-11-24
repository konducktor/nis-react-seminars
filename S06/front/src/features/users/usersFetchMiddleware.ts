import type { Dispatch, Middleware } from '@reduxjs/toolkit'
import { API_BASE_URL } from '../../shared/api'
import type { User } from './userTypes'
import {
  usersLoadFailed,
  usersLoadRequested,
  usersLoadStarted,
  usersLoadSucceeded,
  type UsersState,
} from './usersSlice'

class UsersRequestError extends Error {
  readonly isRetryable: boolean

  constructor(message: string, isRetryable: boolean) {
    super(message)
    this.isRetryable = isRetryable
  }
}

function isUsersList(value: unknown): value is User[] {
  return Array.isArray(value)
}

async function requestUsers(): Promise<User[]> {
  let response: Response
  try {
    response = await fetch(`${API_BASE_URL}/users`)
  } catch {
    throw new UsersRequestError('Нет связи с сервером', true)
  }

  if (!response.ok) {
    const isServerError = response.status >= 500
    throw new UsersRequestError(`Сервер ответил ошибкой ${response.status}`, isServerError)
  }

  const responseBody: unknown = await response.json()
  if (!isUsersList(responseBody)) {
    throw new UsersRequestError('Сервер вернул данные в неожиданном формате', false)
  }
  return responseBody
}

async function loadUsers(dispatch: Dispatch) {
  dispatch(usersLoadStarted())
  try {
    const users = await requestUsers()
    dispatch(usersLoadSucceeded(users))
  } catch (error) {
    const isRetryable = error instanceof UsersRequestError && error.isRetryable
    const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка'
    dispatch(usersLoadFailed({ errorMessage, isRetryable }))
  }
}

function shouldStartUsersLoading(usersState: UsersState) {
  if (usersState.loadingStatus === 'loading') return false
  if (usersState.loadingStatus === 'succeeded') return false
  if (usersState.loadingStatus === 'failed' && !usersState.isErrorRetryable) return false
  return true
}

export const usersFetchMiddleware: Middleware<object, { users: UsersState }> =
  (storeApi) => (next) => (action) => {
    const result = next(action)

    if (!usersLoadRequested.match(action)) return result
    if (!shouldStartUsersLoading(storeApi.getState().users)) return result

    void loadUsers(storeApi.dispatch)
    return result
  }
