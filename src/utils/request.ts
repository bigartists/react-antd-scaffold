import { message } from 'antd'
import axios, { AxiosRequestConfig } from 'axios'
import { APIResponse } from 'types'
const baseURL = '/api/v1'
const instance = axios.create({
  baseURL,
  validateStatus(status) {
    return status < 400 // 约束http status<400 的进入resolved
  },
})

instance.interceptors.request.use(
  function (config) {
    const { userInfo } = {
      userInfo: {
        authCode: 'test',
      },
    }
    if (userInfo.authCode) {
      config.headers = Object.assign({}, config.headers, {
        authcode: userInfo.authCode,
      })
    }
    return config
  },
  function (error) {
    console.log('request error =>', error)
    return Promise.reject(error)
  },
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    if (response.data?.status !== 1) {
      if (response.data?.message === '登录过期') {
        // 调用logout方法
        //  logout()
        Promise.reject(response.data)
      }
      const errMessage = response?.data?.message || '请求失败'
      message.error(errMessage)
      return Promise.reject(errMessage)
    }

    return Promise.resolve(response.data)
  },
  function (error) {
    console.log('response error =>', error)

    if (error.response?.status === 401) {
      // logout()
      return
    }

    message.error(error.message)

    return Promise.reject(error)
  },
)

export function request<T>(
  url: string | AxiosRequestConfig,
  config?: AxiosRequestConfig,
): Promise<APIResponse<T>> {
  const axiosPromise =
    typeof url === 'string' ? instance(url, config) : instance(url)
  return axiosPromise.then(response => response.data as APIResponse<T>)
}
