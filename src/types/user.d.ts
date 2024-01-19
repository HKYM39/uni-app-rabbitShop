/**
 * 个人信息 用户详情信息类型
 */
export interface ProfileDetail {
    /** 用户id */
    id: number
    /** 头像  */
    avatar: string
    /** 用户名  */
    account: string
    /** 昵称 */
    nickname?: string
    /** 性别 */
    gender?: Gender
    /** 生日 */
    birthday?: string
    /** 住址 */
    fullLocation?: string
    /** 职业 */
    profession?: string
}

/** 性别 */
export type Gender = '男' | '女'

export interface ProfileDetailForm {
    /** 昵称 */
    nickname: string
    /** 性别 */
    gender: Gender
    /** 生日 */
    birthday: string
    /** 省份编码 */
    provinceCode?: string
    /** 城市编码 */
    cityCode?: string
    /** 区/县编码 */
    countyCode?: string
    /** 职业 */
    profession: string
}
