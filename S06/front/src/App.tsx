import { Navigate, Route, Routes } from 'react-router'
import UsersPage from './pages/UsersPage/UsersPage'
import UserPage from './pages/UserPage/UserPage'
import UserProfilePage from './pages/UserProfilePage/UserProfilePage'
import UserTasksPage from './pages/UserTasksPage/UserTasksPage'
import TaskPage from './pages/TaskPage/TaskPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/users" replace />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="users/:userId" element={<UserPage />}>
        <Route index element={<UserProfilePage />} />
        <Route path="tasks" element={<UserTasksPage />} />
      </Route>
      <Route path="tasks/:taskId" element={<TaskPage />} />
      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
