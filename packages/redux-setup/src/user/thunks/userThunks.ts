import { AppDispatch } from '../../store'
import {
  fetchUsersSuccess,
  fetchUsersError,
  setPage,
} from '../reducers/userReducer'

import apiClient from '../../api/api'

export const fetchUsers =
  (page = 1) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await apiClient.get(`/users?page=${page}`)
      const { users } = response.data.users

      if (!users || users.length === 0) {
        throw new Error('No users found')
      }

      dispatch(fetchUsersSuccess(response.data.users))
      dispatch(setPage(page))
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(fetchUsersError(error.message))
      } else {
        dispatch(fetchUsersError('An unknown error occurred'))
      }
    }
  }
