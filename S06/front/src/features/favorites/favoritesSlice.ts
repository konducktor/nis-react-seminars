import { createSelector, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import { selectAllUsers } from '../users/usersSlice'

interface FavoritesState {
  userIds: string[]
}

const initialState: FavoritesState = {
  userIds: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavoriteUser: (state, action: PayloadAction<string>) => {
      const userId = action.payload
      if (state.userIds.includes(userId)) {
        state.userIds = state.userIds.filter((favoriteId) => favoriteId !== userId)
        return
      }
      state.userIds.push(userId)
    },
  },
})

export const { toggleFavoriteUser } = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer

export const selectFavoriteUserIds = (state: RootState) => state.favorites.userIds

export const selectIsFavoriteUser = (state: RootState, userId: string) =>
  state.favorites.userIds.includes(userId)

export const selectFavoriteUsers = createSelector(
  [selectAllUsers, selectFavoriteUserIds],
  (users, favoriteUserIds) => users.filter((user) => favoriteUserIds.includes(user.id)),
)
