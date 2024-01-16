<template>
    <view class="viewport">
        <!-- 收货地址：登录展示 -->
        <view class="list" v-if="loginUser">
            <button hover-class="none" class="menu arror">我的收货地址</button>
        </view>
        <!-- 菜单：必要展示 -->
        <view class="list show">
            <button hover-class="none" open-type="openSetting" class="menu arror">授权管理</button>
            <button hover-class="none" open-type="feedback" class="menu arror">问题反馈</button>
            <button hover-class="none" open-type="contact" class="menu arror">联系我们</button>
        </view>
        <!-- 关于：必要展示 -->
        <view class="list show">
            <button hover-class="none" class="menu arror">关于我们</button>
        </view>
        <!-- 退出登录：登录展示 -->
        <button class="button logout" v-if="loginUser" @tap="userLogOut">退出登录</button>
    </view>
</template>

<script setup lang="ts">
// 获取当前登录的用户信息
import { useMemberStore } from '@/stores/modules/member'

const memberStore = useMemberStore()

const loginUser = memberStore.profile

// 用户登出
const userLogOut = () => {
    uni.showModal({
        content: '确定退出登录？',
        showCancel: true,
        success: ({ confirm, cancel }) => {
            if (confirm) {
                memberStore.clearProfile()
                uni.navigateBack()
            }
        },
    })
}
</script>

<style lang="scss">
page {
    background-color: #f4f4f4;
}

.list {
    margin: 10rpx 20rpx 0;
    background-color: white;
    padding: 0 20rpx;
    font-size: 34rpx;
    height: auto;
    .menu {
        padding: 0;
        margin: 0;
        border: 0;
        background-color: white;
        text-align: left;
        height: 80rpx;
        line-height: 80rpx;
        position: relative;
        &:nth-child(2) {
            border-top: 1rpx solid #f4f4f4;
            border-bottom: 1rpx solid #f4f4f4;
        }
        &::after {
            width: auto;
            height: auto;
            left: auto;
            border: none;
        }
    }
}

.arror {
    &::after {
        content: '\e6c2';
        color: #f4f4f4;
        font-family: 'erabbit' !important;
        font-size: 32rpx;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
    }
}

.button {
    margin: 40rpx 20rpx 0;
    background-color: white;
    color: black;
}
</style>
