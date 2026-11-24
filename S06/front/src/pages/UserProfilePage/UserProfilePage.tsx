import { useParams, Link } from 'react-router'
import { useAppSelector } from '../../store/hooks'
import { selectUserById } from '../../features/users/usersSlice'

export default function UserProfilePage() {
  const { userId = '' } = useParams()
  // UserPage renders this only after the user is found, so it is already in the store
  const user = useAppSelector((state) => selectUserById(state, userId))

  if (!user) return null

  return (
    <div>
      <h2>Профиль</h2>
      <p>Email: {user.email}</p>
      <Link to={`/users/${userId}/tasks/`}>Задачи</Link>
    </div>
  )
}
