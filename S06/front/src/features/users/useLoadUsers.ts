import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  selectIsUsersErrorRetryable,
  selectUsersErrorMessage,
  selectUsersLoadingStatus,
  usersLoadRequested,
} from './usersSlice'

export function useLoadUsers() {
  const dispatch = useAppDispatch()
  const loadingStatus = useAppSelector(selectUsersLoadingStatus)
  const errorMessage = useAppSelector(selectUsersErrorMessage)
  const canRetry = useAppSelector(selectIsUsersErrorRetryable)

  useEffect(() => {
    dispatch(usersLoadRequested())
  }, [dispatch])

  const retryLoadingUsers = useCallback(() => {
    dispatch(usersLoadRequested())
  }, [dispatch])

  return {
    isLoading: loadingStatus === 'idle' || loadingStatus === 'loading',
    errorMessage,
    canRetry,
    retryLoadingUsers,
  }
}
