import { Link, useParams, useSearchParams } from 'react-router'
import { useGetUserTasksQuery } from '../../features/tasks/tasksApi'

export default function UserTasksPage() {
  const { userId = '' } = useParams()
  const [searchParams] = useSearchParams()
  const statusFilter = searchParams.get('status') ?? undefined

  const { data: tasks, isLoading, isError } = useGetUserTasksQuery({ userId, status: statusFilter })

  if (isError) return <p>Не удалось загрузить задачи</p>
  if (isLoading || !tasks) return <p>Загрузка...</p>

  return (
    <div>
      <h2>Задачи ({statusFilter ?? 'все'})</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link> — {task.status}
          </li>
        ))}
      </ul>
    </div>
  )
}
