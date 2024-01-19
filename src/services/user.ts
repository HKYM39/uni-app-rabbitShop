import type { ProfileDetail, ProfileDetailForm } from '@/types/user'
import { request } from '@/utils/request'

enum UserApiUrls {
    LOGIN_USER_PROFILE_URL = '/member/profile',
}

/**
 * 获取当前登录用户的用户信息
 * @returns 请求结果
 */
export const GetLoginUserProfileApi = () => {
    return request<ProfileDetail>({
        url: UserApiUrls.LOGIN_USER_PROFILE_URL,
        method: 'GET',
    })
}

export const SubmitProfileChangeApi = (data: ProfileDetailForm) => {
    return request<ProfileDetail>({
        url: UserApiUrls.LOGIN_USER_PROFILE_URL,
        method: 'PUT',
        data,
    })
}
