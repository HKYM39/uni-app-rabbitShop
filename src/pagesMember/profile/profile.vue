<template>
    <view class="viewport">
        <view class="top">
            <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
                <navigator open-type="navigateBack" hover-class="none" class="back icon-left">
                </navigator>
                <view class="title">个人信息</view>
            </view>
            <view class="self-logo">
                <image @tap="onTapAvater" :src="profile?.avatar" mode="aspectFill" class="avater" />
                <text class="tips">点击头像修改</text>
            </view>
        </view>
        <view class="infomation">
            <view class="column child">
                <label class="label" for="account">帐号</label>
                <input type="text" name="account" id="account" :value="profile?.account" disabled />
            </view>
            <view class="column child">
                <label class="label" for="nickname">昵称</label>
                <input type="text" name="nickname" id="nickname" :value="profile?.nickname" />
            </view>
            <view class="column child">
                <label class="label">性别</label>
                <radio-group class="gender" @change="changeGender">
                    <label class="radio"
                        ><radio value="男" :checked="profile?.gender === '男'" />男</label
                    >
                    <label class="radio"
                        ><radio value="女" :checked="profile?.gender === '女'" />女</label
                    >
                </radio-group>
            </view>
            <view class="column child">
                <label class="label" for="account">出生日期</label>
                <picker
                    mode="date"
                    start="1900-01-01"
                    :end="formatDate(new Date())"
                    :value="profile?.birthday"
                >
                    <view class="uni-input" v-if="profile?.birthday">{{ profile?.birthday }}</view>
                    <view class="placeholder" v-else>请选择出生日期</view>
                </picker>
            </view>
            <view class="column child">
                <label class="label" for="account">住址</label>
                <picker
                    mode="region"
                    @change="changeCity"
                    :value="profile?.fullLocation?.split(' ')"
                >
                    <view class="uni-input" v-if="profile?.fullLocation">{{
                        profile?.fullLocation
                    }}</view>
                    <view class="placeholder" v-else>请选择住址</view>
                </picker>
            </view>
            <view class="column child">
                <label class="label" for="account">职业</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    placeholder="请输入职业"
                    :value="profile?.profession"
                />
            </view>
        </view>
        <button class="button submit" @tap="submit">保存</button>
    </view>
</template>

<script setup lang="ts">
import { GetLoginUserProfileApi, SubmitProfileChangeApi } from '@/services/user'
import { useMemberStore } from '@/stores'
import type { Gender, ProfileDetail, ProfileDetailForm } from '@/types/user'
import type { RadioGroupOnChange, RadioGroupOnChangeEvent } from '@uni-helper/uni-app-types'
import { formatDate } from '@/utils'

// 获取屏幕安全边界
const { safeAreaInsets } = uni.getSystemInfoSync()

const memberStore = useMemberStore()

// 储存个人信息
const profile = ref<ProfileDetail>({} as ProfileDetail)

// 获取帐号信息
const getData = async () => {
    const resp = await GetLoginUserProfileApi()
    if (resp.code === '1') {
        profile.value = resp.result
        // 更新我的页面数据，避免修改后没有更新的情况
        memberStore.profile!.avatar = profile.value.avatar
        memberStore.profile!.nickname = profile.value!.nickname
    } else {
        uni.showToast({ icon: 'error', title: resp.msg })
        uni.switchTab({ url: '/pages/my/my' })
    }
}

// 修改头像回调
const onTapAvater = () => {
    // #ifdef APP-PLUS || H5
    uni.chooseImage({
        count: 1,
        success(result) {
            // 文件路径
            const tempFilePath = result.tempFilePaths
            uploadFile(tempFilePath[0])
        },
    })
    // #endif
    // #ifdef MP-WEIXIN
    uni.chooseMedia({
        count: 1,
        success: (result) => {
            // 文件路径
            const { tempFilePath } = result.tempFiles[0]
            uploadFile(tempFilePath)
        },
    })
    // #endif
}

// 上传文件
const uploadFile = (path: string) => {
    // 文件上传
    uni.uploadFile({
        url: '/member/profile/avatar',
        name: 'file',
        filePath: path,
        success: (resp) => {
            if (resp.statusCode === 200) {
                const avatar = JSON.parse(resp.data).result.avatar
                // 更新个人信息页面图片地址
                profile.value!.avatar = avatar
                // 更新Store头像
                memberStore.profile!.avatar = avatar
                uni.showToast({ icon: 'success', title: '更新头像成功' })
            } else {
                uni.showToast({ icon: 'success', title: '服务器错误' })
            }
        },
    })
}

// 修改性别回调
const changeGender: RadioGroupOnChange = (event: RadioGroupOnChangeEvent) => {
    profile.value!.gender = event.detail.value as Gender
}

let fullLocationCode: [string, string, string] = ['', '', '']
// 修改住址回调
const changeCity: UniHelper.RegionPickerOnChange = (event) => {
    profile.value!.fullLocation = event.detail.value.join(' ')
    fullLocationCode = event.detail.code!
}

// 提交修改
const submit = async () => {
    // 更新Store昵称
    const { nickname, birthday, profession, gender } = profile.value
    const resp = await SubmitProfileChangeApi({
        nickname,
        gender,
        birthday,
        profession,
        provinceCode: fullLocationCode[0] || undefined,
        cityCode: fullLocationCode[1] || undefined,
        countyCode: fullLocationCode[2] || undefined,
    } as ProfileDetailForm)
    if (resp.code === '1') {
        memberStore.profile!.nickname = profile.value?.nickname
        uni.showToast({ icon: 'success', title: '保存成功' })
        setTimeout(() => {
            uni.navigateBack()
        }, 500)
    } else {
        uni.showToast({ icon: 'error', title: resp.msg })
    }
}

// 页面加载完成回调
onLoad(() => {
    getData()
})
</script>

<style lang="scss">
page {
    background-color: $main-background-color;
}
.viewport {
    display: flex;
    flex-direction: column;
    .top {
        background-image: linear-gradient(135deg, #fccf31 10%, #f55555 100%);
        background-size: 100% 28vh;
        background-repeat: no-repeat;
    }
    .navbar {
        width: 100%;
        color: white;
        position: relative;
        height: 100rpx;
        .back {
            height: 40rpx;
            width: 40rpx;
            position: absolute;
            left: 0;
            font-size: 40rpx;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .title {
            position: absolute;
            right: 50%;
            transform: translateX(50%);
            font-size: 32rpx;
            font-weight: 500;
        }
    }
    .self-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        .avater {
            width: 128rpx;
            height: 128rpx;
            border-radius: 50%;
        }
    }
    .infomation {
        margin: 30rpx 20rpx 0;
        background-color: white;
        border-radius: 10rpx;
        .column {
            padding: 20rpx 0;
            margin: 0 20rpx;
            display: flex;
            border-bottom: 1rpx solid #ccc;
            .label {
                width: 160rpx;
            }
            &:last-child {
                border: none;
            }
        }
    }
}
.radio {
    padding-right: 40rpx;
}
.button {
    height: 80rpx;
    border-radius: 40rpx;
    line-height: 80rpx;
    margin: 20rpx 20rpx 0;
    background-color: #ff7555;
    color: white;
}
</style>
