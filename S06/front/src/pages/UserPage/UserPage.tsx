import { Outlet, useParams } from 'react-router'
import { useAppSelector } from '../../store/hooks'
import { selectUserById } from '../../features/users/usersSlice'
import { useLoadUsers } from '../../features/users/useLoadUsers'
import UsersLoadError from '../../features/users/UsersLoadError'

export default function UserPage() {
  const { userId = '' } = useParams()
  const { isLoading, errorMessage, canRetry, retryLoadingUsers } = useLoadUsers()
  const user = useAppSelector((state) => selectUserById(state, userId))

  if (errorMessage) {
    return <UsersLoadError errorMessage={errorMessage} canRetry={canRetry} onRetry={retryLoadingUsers} />
  }
  if (isLoading) return <p>Загрузка...</p>
  if (!user) return <p>Участник не найден</p>

  return (
    <div>
      <h1>{user.name}</h1>
      <Outlet />
    </div>
  )
}
