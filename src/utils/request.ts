import { useMemberStore } from '@/stores/modules/member'
import type { CommoResponse } from '@/types/commo'
import HttpStatusCode from './httpStatusCode'

// 请求基本地址
const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 拦截器
const httpIntercetor = {
  invoke(options: UniApp.RequestOptions) {
    // 如果不为Http请求直接拼装地址
    if (!options.url.startsWith('http')) {
      options.url = baseUrl.concat(options.url)
    }
    // 超时时间
    options.timeout = 5000
    // 添加标识头
    options.header = {
      'source-client': 'miniapp',
      ...options.header,
    }
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

// 拦截Http请求
uni.addInterceptor('request', httpIntercetor)
// 拦截upLoadFile 上传文件请求
uni.addInterceptor('uploadFile', httpIntercetor)

/**
 * 封装好的请求函数
 * @param UniApp.RequestOptions 请求对象
 * @returns Promise 返回结果
 *
 */

export const request = <T>(options: UniApp.RequestOptions) => {
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
