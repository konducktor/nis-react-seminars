export type TaskStatus = 'todo' | 'doing' | 'done'

export interface Task {
  id: string
  userId: string
  title: string
  status: TaskStatus
}
