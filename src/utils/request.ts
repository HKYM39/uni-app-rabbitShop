import { useMemberStore } from '@/stores/modules/member'

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
uni.addInterceptor('rqeust', httpIntercetor)
// 拦截upLoadFile 上传文件请求
uni.addInterceptor('uploadFile', httpIntercetor)
