// import { PayloadAction } from '@reduxjs/toolkit'

// User Type
export interface User {
  id: number
  firstName: string
  lastName: string
}

// State type for the user reducer
export interface UserState {
  users: User[]
  error: string | null
  page: number
}

// Define action type constants as both values and types
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS' as const
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR' as const
export const SET_PAGE = 'SET_PAGE' as const

// Action Creators' Payload Types
export type FetchUsersSuccess = {
  type: typeof FETCH_USERS_SUCCESS
  payload: User[]
}
export type FetchUsersError = {
  type: typeof FETCH_USERS_ERROR
  payload: string
}
export type SetPage = {
  type: typeof SET_PAGE
  payload: number
}

// Union type for all user-related actions
export type UserActionTypes = FetchUsersSuccess | FetchUsersError | SetPage
