/** 建议手机号登录表单类型 */
export interface EasyPhonetLoginForm {
    phoneNumber: string
}

/** 微信授权登录表单类型 */
export interface WechatLoginForm {
    code: string
    encryptedData: string
    iv: string
}

/** 小程序登录 用户信息类型 */
export interface LoginResponse {
    /** 唯一Id */
    id: string
    /** 头像 */
    avatar: string
    /** 账户名 */
    account: string
    /** 昵称 */
    nickname?: string
    /** 手机号 */
    mobile: string
    /** 登录凭证 */
    token: string
}
