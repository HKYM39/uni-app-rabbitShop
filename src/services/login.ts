import { request } from '@/utils/request'
import type { LoginResponse, EasyPhonetLoginForm, WechatLoginForm } from '@/types/login'

enum LoginApiUrls {
    WECHAT_LOGIN = '/login/wxMin',
    EASY_PHONE_LOGIN = '/login/wxMin/simple',
}

/**
 * 小程序登录
 * @param data 登录数据
 * @returns 请求结果
 */
export const WechatLoginApi = async (data: WechatLoginForm) => {
    return request<LoginResponse>({
        url: LoginApiUrls.WECHAT_LOGIN,
        method: 'POST',
        data,
    })
}

/**
 * 内测用电话号码登录
 * @param data 电话号码
 * @returns 登录结果
 */
export const EasyTestLoginApi = async (data: EasyPhonetLoginForm) => {
    return request<LoginResponse>({
        url: LoginApiUrls.EASY_PHONE_LOGIN,
        method: 'POST',
        data,
    })
}
