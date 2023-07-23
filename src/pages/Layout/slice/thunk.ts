import { createAsyncThunk } from '@reduxjs/toolkit'
import { request } from 'utils/request'
import { errorHandle } from 'utils/utils'
import { LoginParams, User } from './types'

// export declare function createAsyncThunk1<Returned, ThunkArg = void>(
//   typePrefix: string,
//   payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, {}>,
//   options?: AsyncThunkOptions<ThunkArg, {}>,
// ): AsyncThunk<Returned, ThunkArg, {}>

export const login = createAsyncThunk<User, LoginParams>(
  'app/login',
  async ({ params, resolve }) => {
    try {
      const { payload: result } = await request<User>({
        url: '/login',
        method: 'POST',
        data: params,
      })
      resolve()
      return result
    } catch (error) {
      errorHandle(error)
      throw error
    }
  },
)
