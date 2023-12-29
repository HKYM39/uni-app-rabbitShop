import type { CommoResponse } from './types'
import HttpStatusCode from './httpStatusCode'
import { useMemberStore } from '@/stores'

/**
 * 封装好的请求函数
 * @param UniApp.RequestOptions 请求对象
 * @returns Promise 返回结果
 *
 */

export const $http = <T>(options: UniApp.RequestOptions) => {
  // 返回 Promise 对象
  return new Promise<CommoResponse<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(resp) {
        // 返回成功
        if (
          resp.statusCode >= HttpStatusCode.OK &&
          resp.statusCode <= HttpStatusCode.MULTIPLE_CHOICES
        ) {
          // 返回data数据
          resolve(resp.data as CommoResponse<T>)
        } else if (resp.statusCode === HttpStatusCode.UNAUTHORIZED) {
          // 如果返回代码401代表token过期或者访问需要登录的页面
          const memberStore = useMemberStore()
          // 清除用户数据
          memberStore.clearProfile()
          // 跳转到登录页面
          uni.navigateTo({ url: '/pages/login/login' })
          reject(resp)
        } else {
          uni.showToast({
            icon: 'none',
            title: (resp.data as CommoResponse<T>).msg || '请求错误',
          })
          reject(resp)
        }
      },
      fail(error) {
        uni.showToast({
          icon: 'none',
          title: '网络错误.',
        })
        reject(error)
      },
    })
  })
}
