<template>
    <view class="viewport">
        <view class="logo">
            <image
                src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/logo_icon.png"
            />
        </view>
        <view class="login">
            <!-- 帐号密码登录 -->
            <view class="account" v-if="loginType === 'phone'">
                <!-- 简易微信登录 -->
                <form @submit="easyPhoneLogin" class="easyLoginForm">
                    <input
                        class="phone-input"
                        type="number"
                        name="phoneNumber"
                        v-model="easyLoginForm.phoneNumber"
                        placeholder="请输入手机号"
                        @blur="confirmPhone"
                    />
                    <button class="button" form-type="submit">提交</button>
                </form>
                <!-- H5端登录表单 -->
                <!-- #ifdef H5 -->
                <!-- <form @submit="accountLogin" v-if="false">
                    <button class="submit-btn" form-type="submit">提交</button>
                </form> -->
                <!-- #endif -->
            </view>
            <!-- 微信授权登录 -->
            <button
                class="button phone"
                open-type="getPhoneNumber"
                @getphonenumber="onGetphonenumber"
                v-if="loginType === 'wechat'"
            >
                <text class="icon icon-phone"></text>
                微信授权登录
            </button>
        </view>
        <view class="extra">
            <view class="caption">
                <text>其他方式登录</text>
            </view>
            <view class="options">
                <!-- 通用模拟登录 -->
                <button @tap="changeLoginType">
                    <text class="icon icon-phone"></text>
                </button>
                <text>{{ loginType === 'phone' ? '微信授权登录' : '手机号登录' }}</text>
            </view>
            <view class="tips">登录/注册即视为你同意《服务条款》和《小兔鲜儿隐私协议》</view>
        </view>
    </view>
</template>

<script setup lang="ts">
import type { EasyPhonetLoginForm } from '@/types/login'
import { WechatLoginApi, EasyTestLoginApi } from '@/services/login'
import { useMemberStore } from '@/stores'

// 登录方式：微信or手机号与密码
const loginType = ref<'wechat' | 'phone'>('wechat')

// 密码方式登录表单
const easyLoginForm = ref<EasyPhonetLoginForm>({
    phoneNumber: '13588888888',
})

// 登录方式修改
const changeLoginType = () => {
    if (loginType.value === 'wechat') {
        loginType.value = 'phone'
    } else {
        loginType.value = 'wechat'
    }
}

// 电话号码校验函数
const confirmPhone = (event: any) => {
    const value = event.target.value
    if (!/^1[3456789]\d{9}$/.test(value)) {
        return uni.showToast({ icon: 'error', title: '手机号格式错误' })
    }
}

// 用户仓库
const memberStore = useMemberStore()

// 内测手机号登录
const easyPhoneLogin = async () => {
    if (!/^1[3456789]\d{9}$/.test(easyLoginForm.value.phoneNumber)) {
        return uni.showToast({ icon: 'error', title: '手机号格式错误' })
    }
    const resp = await EasyTestLoginApi(easyLoginForm.value)
    if (resp.code === '1') {
        memberStore.setProfile(resp.result)
        uni.showToast({ icon: 'success', title: '登录成功' })
        setTimeout(() => {
            uni.switchTab({ url: '/pages/my/my' })
        }, 1000)
    }
}

// H5帐号密码登录
// const accountLogin = () => {}

// 微信登录授权码
let code = ''

// 页面加载完成后，向微信服务器发送请求获取登录授权码
// onLoad(async () => {
//     const resp = await wx.login()
//     code = resp.code
// })

// 获取用户手机号
const onGetphonenumber: UniHelper.ButtonOnGetphonenumber = async (ev) => {
    // 获取参数
    const encryptedData = ev.detail.encryptedData!
    const iv = ev.detail.iv!
    // 登录请求
    await WechatLoginApi({ code, encryptedData, iv })
    // 成功提示
    uni.showToast({ icon: 'none', title: '登录成功' })
}
</script>
<style lang="scss">
page {
    height: 100%;
}

.viewport {
    display: flex;
    flex-direction: column;
    height: 100%;

    .logo {
        flex: 1;
        text-align: center;
        image {
            margin-top: 15vh;
            height: 220rpx;
            width: 220rpx;
        }
    }

    .login {
        width: 100%;
        display: flex;
        flex-direction: column;
        min-height: 60rpx;
        max-height: 60vh;
        padding: 40rpx 20rpx 20rpx;

        .button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 80rpx;
            font-size: 28rpx;
            border-radius: 72rpx;
            color: #fff;

            .icon {
                font-size: 40rpx;
                margin-right: 6rpx;
            }
        }

        .account {
            width: 100%;
            height: 20vh;
            display: flex;
            align-items: center;
            vertical-align: middle;
            .easyLoginForm {
                width: 100%;
                padding: 0 10rpx;
                display: flex;
                flex-direction: column;
                input {
                    flex: 1;
                    height: 6vh;
                    padding: 0 50rpx;
                    position: relative;
                    border: 1rpx solid #28bb9c;
                    border-radius: 10rpx;
                    font-size: 36rpx;
                    vertical-align: middle;
                    &::before {
                        line-height: 1;
                        position: absolute;
                        top: 22.5%;
                        left: 1%;
                        font-size: 38rpx;
                        font-family: 'erabbit' !important;
                        font-style: normal;
                        content: '\e618';
                        vertical-align: middle;
                    }
                }
                button {
                    margin-top: 50rpx;
                    background-color: #06c05f;
                }
            }
        }
    }
    .phone {
        background-color: #28bb9c;
    }

    .wechat {
        background-color: #06c05f;
    }
    .extra {
        flex: 1;
        position: relative;
        padding: 26rpx 25%;
        .caption {
            line-height: 1;
            border-top: 1rpx solid #ddd;
            font-size: 26rpx;
            color: #999;
            position: relative;
            text {
                transform: translateY(-40%);
                background-color: #fff;
                position: absolute;
                top: -6rpx;
                left: 32%;
                text-align: center;
            }
        }

        .options {
            width: 300rpx;
            height: 50rpx;
            margin: 0 auto;
            margin-top: 50rpx;
            button {
                width: 100rpx;
                border: 1rpx solid black;
                border-radius: 50rpx;
                background-color: white;
            }
            text-align: center;
        }

        .tips {
            position: absolute;
            bottom: 24rpx;
            right: 0;
            text-align: center;
            width: 100%;
            font-size: 26rpx;
            color: #ccc;
        }
    }
}
</style>
