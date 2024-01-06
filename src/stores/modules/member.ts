import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { LoginResponse } from '@/types/login'

// 定义 Store
export const useMemberStore = defineStore(
    'member',
    () => {
        // 会员信息
        const profile = ref<LoginResponse>()

        // 保存会员信息，登录时使用
        const setProfile = (value: LoginResponse) => {
            profile.value = value
        }

        // 清理会员信息，退出时使用
        const clearProfile = () => {
            profile.value = undefined
        }

        // 记得 return
        return {
            profile,
            setProfile,
            clearProfile,
        }
    },
    {
        persist: {
            storage: {
                getItem(key) {
                    return uni.getStorageSync(key)
                },
                setItem(key, value) {
                    return uni.setStorageSync(key, value)
                },
            },
        },
    },
)
