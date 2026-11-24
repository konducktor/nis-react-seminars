import { createAction, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from './userTypes'

export type UsersLoadingStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface UsersState {
  list: User[]
  loadingStatus: UsersLoadingStatus
  errorMessage: string | null
  isErrorRetryable: boolean
}

interface UsersLoadFailedPayload {
  errorMessage: string
  isRetryable: boolean
}

interface StateWithUsers {
  users: UsersState
}

const initialState: UsersState = {
  list: [],
  loadingStatus: 'idle',
  errorMessage: null,
  isErrorRetryable: false,
}

// A command for usersFetchMiddleware: reducers ignore it, the middleware starts the request
export const usersLoadRequested = createAction('users/loadRequested')

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersLoadStarted: (state) => {
      state.loadingStatus = 'loading'
      state.errorMessage = null
      state.isErrorRetryable = false
    },
    usersLoadSucceeded: (state, action: PayloadAction<User[]>) => {
      state.loadingStatus = 'succeeded'
      state.list = action.payload
    },
    usersLoadFailed: (state, action: PayloadAction<UsersLoadFailedPayload>) => {
      state.loadingStatus = 'failed'
      state.errorMessage = action.payload.errorMessage
      state.isErrorRetryable = action.payload.isRetryable
    },
  },
})

export const { usersLoadStarted, usersLoadSucceeded, usersLoadFailed } = usersSlice.actions
export const usersReducer = usersSlice.reducer

export const selectAllUsers = (state: StateWithUsers) => state.users.list
export const selectUsersLoadingStatus = (state: StateWithUsers) => state.users.loadingStatus
export const selectUsersErrorMessage = (state: StateWithUsers) => state.users.errorMessage
export const selectIsUsersErrorRetryable = (state: StateWithUsers) => state.users.isErrorRetryable
export const selectUserById = (state: StateWithUsers, userId: string) =>
  state.users.list.find((user) => user.id === userId)
