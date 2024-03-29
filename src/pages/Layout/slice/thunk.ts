import { createAsyncThunk } from '@reduxjs/toolkit'
import { request } from 'utils/request'
import { errorHandle } from 'utils/utils'
import { LoginParams, User } from './types'
import { get } from 'lodash'
import { setLocal } from 'utils/storageManage'
// export declare function createAsyncThunk1<Returned, ThunkArg = void>(
//   typePrefix: string,
//   payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, {}>,
//   options?: AsyncThunkOptions<ThunkArg, {}>,
// ): AsyncThunk<Returned, ThunkArg, {}>

export const USERNAME = 'USERNAME'

export const login = createAsyncThunk<any, LoginParams>(
  'app/login',
  async data => {
    try {
      const { result } = await request<User>({
        url: '/login',
        method: 'POST',
        data,
      })
      const username = get(result, 'username', '')
      setLocal(USERNAME, username)
      return result
    } catch (error) {
      errorHandle(error)
      throw error
    }
  },
)
