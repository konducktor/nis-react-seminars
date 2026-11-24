import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from '../features/users/usersSlice'
import { usersFetchMiddleware } from '../features/users/usersFetchMiddleware'
import { favoritesReducer } from '../features/favorites/favoritesSlice'
import { tasksApi } from '../features/tasks/tasksApi'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    favorites: favoritesReducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersFetchMiddleware, tasksApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
