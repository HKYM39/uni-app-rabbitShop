<template>
    <scroll-view class="viewport" scroll-y enable-back-to-top @scrolltolower="onScrolleLower">
        <!-- 个人信息 -->
        <view class="profile" :style="{paddingTop: safeAreaInsets!.top + 'px'}">
            <view class="infomation">
                <!-- 头像 -->
                <navigator
                    url="/pagesMember/profile/profile"
                    hover-class="ignore-none"
                    v-if="loginUser"
                >
                    <image class="avatar" :src="loginUser?.avatar" mode="aspectFill" />
                </navigator>
                <navigator url="/pages/login/login" hover-class="ignore-none" v-else>
                    <image class="avatar" src="@/static/images/user.png" mode="aspectFill" />
                </navigator>
                <!-- 名字 -->
                <view class="title">
                    <template v-if="loginUser">
                        <text class="nickname" v-if="loginUser">{{ loginUser!.nickname }}</text>
                        <navigator
                            class="edit"
                            hover-class="none"
                            url="/pagesMember/profile/profile"
                            >更换昵称头像</navigator
                        >
                    </template>
                    <template v-else>
                        <navigator
                            v-if="!loginUser"
                            class="nickname"
                            url="/pages/login/login"
                            hover-class="none"
                        >
                            请登录
                        </navigator>
                        <view class="edit">点击登录帐号</view>
                    </template>
                </view>
            </view>
            <!-- 设置按钮 -->
            <navigator id="setting" url="/pagesMember/settings/settings" hover-class="none">
                设置
            </navigator>
        </view>
        <!-- 我的订单 -->
        <view class="orders">
            <view class="title">
                <text class="main-title">我的订单</text>
                <navigator class="order-all" url="/pagesOrder/list/list?type=0" hover-class="none">
                    查看全部订单 >
                </navigator>
            </view>
            <view class="menus">
                <view class="menu" v-for="menu in orderMenu" :key="menu.type" :class="menu.icon">
                    {{ menu.title }}
                </view>
                <button class="contact icon-handset" open-type="contact">售后</button>
            </view>
        </view>
        <!-- 猜你喜欢 -->
        <commo-guess id="guess" ref="guessRef"></commo-guess>
    </scroll-view>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores'
import CommoGuess from '@/components/CommoGuess.vue'
import { useGuessList } from '@/composables'
import type { LoginResponse } from '@/types/login'

// 获取安全边距
const { safeAreaInsets } = uni.getSystemInfoSync()
// 获取登录用户数据
const loginUser = ref<LoginResponse>()
const getData = () => {
    const memberStore = useMemberStore()
    loginUser.value = memberStore.profile
}
// 我的订单内部菜单
const orderMenu = [
    { icon: 'icon-currency', title: '待付款', type: '1' },
    { icon: 'icon-gift', title: '待发货', type: '2' },
    { icon: 'icon-check', title: '待收货', type: '3' },
    { icon: 'icon-comment', title: '待评价', type: '4' },
]

// 下滑回调
const { guessRef, onScrolleLower } = useGuessList()

onShow(() => {
    getData()
})
</script>

<style lang="scss">
page {
    height: 100%;
    overflow: hidden;
    background-color: #f7f7f8;
}
.viewport {
    height: 100%;
    background-image: linear-gradient(135deg, #fccf31 10%, #f55555 100%);
    background-size: 100% 28vh;
    background-repeat: no-repeat;
    .profile {
        width: 100%;
        padding: 0 36rpx;
        position: relative;

        .infomation {
            margin-top: 40rpx;
            display: flex;
        }
        .avatar {
            width: 120rpx;
            height: 120rpx;
            border-radius: 50%;
            background-color: #eee;
        }
        .title {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            line-height: 30rpx;
            margin-left: 20rpx;
            .nickname {
                max-width: 180rpx;
                margin-bottom: 16rpx;
                font-size: 30rpx;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .edit {
                display: felx;
                font-size: 20rpx;
                padding: 3rpx 10rpx 1rpx;
                color: rgba($color: #fff, $alpha: 0.8);
                border: 1rpx solid rgba($color: #fff, $alpha: 0.8);
                margin-right: 10rpx;
                border-radius: 30rpx;
            }
        }
        #setting {
            border: 0;
            color: white;
            font-size: 26rpx;
            background-color: rgba($color: #fff, $alpha: 0);
            position: absolute;
            right: 5%;
            bottom: 0;
        }
    }
    .orders {
        padding: 30rpx;
        z-index: 99;
        margin: 50rpx 20rpx 0;
        background-color: white;
        border-radius: 10rpx;
        box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);

        .title {
            display: flex;
            height: 40rpx;
            line-height: 40rpx;
            font-size: 28rpx;
            color: #1e1e1e;
            justify-content: space-between;
        }

        .order-all {
            font-size: 24rpx;
            color: #939393;
            float: right;
        }

        .menus {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            padding: 40rpx 20rpx 10rpx;

            .menu,
            .contact {
                text-align: center;
                font-size: 24rpx;
                color: #333;
                &::before {
                    display: block;
                    font-size: 60rpx;
                    color: #ff9594;
                }
            }

            .contact {
                padding: 0;
                margin: 0;
                border: 0;
                background-color: transparent;
                line-height: inherit;
            }
        }
    }

    #guess {
        background-color: #f7f7f8;
        margin-top: 20rpx;
    }
}
</style>
