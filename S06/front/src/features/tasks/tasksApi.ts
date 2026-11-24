import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../../shared/api'
import type { Task } from './taskTypes'

interface UserTasksQueryArgs {
  userId: string
  status?: string
}

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Task'],
  endpoints: (builder) => ({
    getUserTasks: builder.query<Task[], UserTasksQueryArgs>({
      query: ({ userId, status }) => ({
        url: '/tasks',
        params: status ? { userId, status } : { userId },
      }),
      providesTags: ['Task'],
    }),
    getTaskById: builder.query<Task, string>({
      query: (taskId) => `/tasks/${taskId}`,
      providesTags: (_result, _error, taskId) => [{ type: 'Task', id: taskId }],
    }),
  }),
})

export const { useGetUserTasksQuery, useGetTaskByIdQuery } = tasksApi
