import { useParams } from 'react-router'
import { skipToken } from '@reduxjs/toolkit/query'
import { useGetTaskByIdQuery } from '../../features/tasks/tasksApi'

export default function TaskPage() {
  const { taskId } = useParams()
  const { data: task, isLoading, isError } = useGetTaskByIdQuery(taskId ?? skipToken)

  if (isError) return <p>Задача не найдена</p>
  if (isLoading || !task) return <p>Загрузка...</p>

  return (
    <div>
      <h1>{task.title}</h1>
      <p>Статус: {task.status}</p>
    </div>
  )
}
