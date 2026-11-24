import { Link } from 'react-router'
import { useAppSelector } from '../../store/hooks'
import { selectAllUsers } from '../../features/users/usersSlice'
import { useLoadUsers } from '../../features/users/useLoadUsers'
import UsersLoadError from '../../features/users/UsersLoadError'

export default function UsersPage() {
  const { isLoading, errorMessage, canRetry, retryLoadingUsers } = useLoadUsers()
  const users = useAppSelector(selectAllUsers)

  if (errorMessage) {
    return <UsersLoadError errorMessage={errorMessage} canRetry={canRetry} onRetry={retryLoadingUsers} />
  }
  if (isLoading) return <p>Загрузка...</p>

  return (
    <div>
      <h1>Команда</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
