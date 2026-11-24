import { Link } from 'react-router'
import { useAppSelector } from '../../store/hooks'
import { selectFavoriteUsers } from '../../features/favorites/favoritesSlice'
import { useLoadUsers } from '../../features/users/useLoadUsers'
import UsersLoadError from '../../features/users/UsersLoadError'

export default function FavoritesPage() {
  const { isLoading, errorMessage, canRetry, retryLoadingUsers } = useLoadUsers()
  const favoriteUsers = useAppSelector(selectFavoriteUsers)

  if (errorMessage) {
    return <UsersLoadError errorMessage={errorMessage} canRetry={canRetry} onRetry={retryLoadingUsers} />
  }
  if (isLoading) return <p>Загрузка...</p>

  return (
    <div>
      <h1>Избранные участники</h1>
      {favoriteUsers.length === 0 && <p>Пока никого нет</p>}
      <ul>
        {favoriteUsers.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
