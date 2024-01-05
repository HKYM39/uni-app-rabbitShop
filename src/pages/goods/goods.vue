<template>
    <!-- 滚动区域 -->
    <scroll-view scroll-y calss="viewport" v-if="finishLoading">
        <!-- 商品详情 -->
        <view class="goods">
            <!-- 商品图片 -->
            <view class="preview">
                <swiper circular @change="onSwipe">
                    <!-- 滑动图片 -->
                    <swiper-item v-for="(img, index) in goodsData?.mainPictures" :key="index">
                        <image :src="img" mode="aspectFill" @tap="fullImage(img)" />
                    </swiper-item>
                </swiper>
                <view class="indicator">
                    <text class="cureent">{{ swiperCurrentIndex + 1 }}</text>
                    <text class="split">/</text>
                    <text class="total">{{ goodsData?.mainPictures.length }}</text>
                </view>
            </view>

            <!-- 商品简介 -->
            <view class="meta">
                <view class="price">
                    <text class="symbol">￥</text>
                    <text class="number">{{ goodsData?.price }}</text>
                </view>
            </view>

            <!-- 服务层 -->
            <view class="action">
                <view class="item arrow">
                    <text class="label">选择</text>
                    <text class="text ellipsis"> 请选择商品规格 </text>
                </view>
                <view class="item arrow" @tap="openPop('address')">
                    <text class="label">送至</text>
                    <text class="text ellipsis"> 请选择收货地址 </text>
                </view>
                <view class="item arrow" @tap="openPop('service')">
                    <text class="label">服务</text>
                    <text class="text ellipsis"> 无忧退 快速退款 免费包邮 </text>
                </view>
            </view>

            <!-- 商品详情 -->
            <veiw class="detail panel">
                <view class="title">
                    <text>详情</text>
                </view>
                <view class="content">
                    <veiw class="properties">
                        <!-- 属性详情 -->
                        <view
                            class="item"
                            v-for="properties in goodsData?.details.properties"
                            :key="properties.name"
                        >
                            <text class="label">{{ properties.name }}</text>
                            <text class="value">{{ properties.value }}</text>
                        </view>
                        <image
                            v-for="(img, index) in goodsData?.details.pictures"
                            :key="index"
                            :src="img"
                            mode="widthFix"
                        />
                    </veiw>
                </view>
            </veiw>

            <!-- 同类推荐 -->
            <view class="similar panel">
                <view class="title">
                    <text>同类推荐</text>
                </view>

                <view class="content">
                    <navigator
                        class="goods"
                        v-for="similar in goodsData?.similarProducts"
                        :key="similar.id"
                        :url="`/pages/goods/goods?id=${similar.id}`"
                        hover-class="none"
                    >
                        <image class="image" :src="similar.picture" mode="aspectFill" />
                        <view class="name ellipsis">{{ similar.name }}</view>
                        <view class="price">
                            <text class="symbol">￥</text>
                            <text class="number">{{ similar.price }}</text>
                        </view>
                    </navigator>
                </view>
            </view>
        </view>
    </scroll-view>
    <skeleton v-else></skeleton>
    <!-- 用户操作区域 -->
    <view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
        <view class="icons">
            <button class="icons-button"><text class="icon-heart"></text>收藏</button>
            <button class="icons-button" open-type="contact">
                <text class="icon-handset"></text>客服
            </button>
            <navigator class="icons-button" url="/pages/cart/cart" open-type="switchTab">
                <text class="icon-cart"></text>购物车
            </navigator>
        </view>
        <view class="buttons">
            <view class="addcart"> 加入购物车 </view>
            <view class="buynow"> 立即购买 </view>
        </view>
    </view>

    <uni-popup ref="popup" type="bottom" background-color="#fff">
        <service-panel v-if="popName === 'service'" @close="popup?.close()"></service-panel>
        <address-panel v-else-if="popName === 'address'" @close="popup?.close()"></address-panel>
    </uni-popup>
</template>

<script setup lang="ts">
import { getGoodsDetailByIdApi } from '@/services/goods'
import type { GoodsRsponse } from '@/types/goods.d.ts'

import skeleton from './components/skeleton.vue'
import ServicePanel from './components/ServicePanel.vue'
import AddressPanel from './components/AddressPanel.vue'
// 获取安全下标
const { safeAreaInsets } = uni.getSystemInfoSync()

// 接受获取的商品Id
const query = defineProps({
    id: {
        type: String,
        required: true,
    },
})

// 商品数据
const goodsData = ref<GoodsRsponse>()

const getGoodsData = async () => {
    const resp = await getGoodsDetailByIdApi(query.id)
    goodsData.value = resp.result
}

// 轮播图下标
const swiperCurrentIndex = ref(-1)

// 轮播图滑动回调
const onSwipe: UniHelper.SwiperOnChange = (e) => {
    swiperCurrentIndex.value = e.detail.current
}

// 轮播图点击回调：全屏观看预览图
const fullImage = (url: string) => {
    uni.previewImage({
        current: url,
        urls: goodsData.value!.mainPictures,
    })
}

// 弹出框ref
const popup = ref<{
    open: (type?: UniHelper.UniPopupType) => void
    close: () => void
}>()

// 弹出框类型
const popName = ref<'address' | 'service'>()

// 展示弹出框
const openPop = (name: typeof popName.value) => {
    popName.value = name
    popup.value?.open()
}

// 页面是否完成加载
const finishLoading = ref(false)

// 页面加载完成后获取所有数据
onLoad(() => {
    finishLoading.value = false
    getGoodsData()
    console.log('🚀 ~ file: goods.vue:164 ~ popup:', popup)
    console.log('🚀 ~ file: goods.vue:171 ~ popName:', popName.value)
    finishLoading.value = true
})
</script>

<style lang="scss">
page {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.viewport {
    background-color: $main-background-color;
}

.panel {
    margin-top: 20rpx;
    background-color: white;
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90rpx;
        line-height: 1;
        padding: 30rpx 60rpx 30rpx 6rpx;
        position: relative;

        text {
            padding-left: 10rpx;
            font-size: 28rpx;
            color: #333;
            font-weight: 600;
            border-top-left-radius: 4rpx solid #27ba9b;
        }
    }
    navigator {
        font-size: 24rpx;
        color: #666;
    }
}

.arrow {
    &::after {
        position: absolute;
        top: 50%;
        right: 30rpx;
        content: '\e6c2';
        color: #ccc;
        font-family: 'erabbit' !important;
        font-size: 32rpx;
        transform: translateY(-50%);
    }
}
.goods {
    background-color: white;
    .preview {
        height: 750rpx;
        position: relative;
        .image {
            width: 750rpx;
            height: 750rpx;
        }
        .indicator {
            height: 40rpx;
            padding: 0 24rpx;
            line-height: 40rpx;
            border-radius: 30rpx;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
            background-color: rgba($color: #fff, $alpha: 0.3);
            position: absolute;
            bottom: 30rpx;
            right: 30rpx;

            .current {
                font-size: 26rpx;
            }
            .split {
                font-size: 24rpx;
                margin: 0 1rpx 0 2rpx;
            }
            .total {
                font-size: 24rpx;
            }
        }
    }

    .meta {
        position: relative;
        border-bottom: 1rpx solid #eaeaea;
        .price {
            height: 130rpx;
            padding: 25rpx 30rpx 0;
            color: #fff;
            font-size: 34rpx;
            box-sizing: border-box;
            background-color: #35c8a9;
        }
        .number {
            font-size: 56rpx;
        }
        .brand {
            width: 160rpx;
            height: 80rpx;
            overflow: hidden;
            position: absolute;
            top: 26rpx;
            right: 30rpx;
        }
        .name {
            max-height: 88rpx;
            line-height: 1.4;
            margin: 20rpx;
            font-size: 32rpx;
            color: #333;
        }
        .desc {
            line-height: 1;
            padding: 0 20rpx 30rpx;
            font-size: 24rpx;
            color: #cf4444;
        }
    }
    .action {
        padding-left: 20rpx;
        .item {
            height: 90rpx;
            padding-right: 60rpx;
            border-bottom: 1rpx solid #eaeaea;
            font-size: 26rpx;
            color: #333;
            position: relative;
            display: flex;
            align-items: center;
            &:last-child {
                border-bottom: 0 none;
            }
        }
        .label {
            width: 60rpx;
            color: #898b94;
            margin: 0 16rpx 0 10rpx;
        }
        .text {
            flex: 1;
            -webkit-line-clamp: 1;
        }
    }
}

/* 商品详情 */
.detail {
    padding-left: 20rpx;
    .content {
        .image {
            width: 100%;
        }
    }
    .properties {
        padding: 0 20rpx;
        margin-bottom: 30rpx;
        .item {
            display: flex;
            line-height: 2;
            padding: 10rpx;
            font-size: 26rpx;
            color: #333;
            border-bottom: 1rpx dashed #ccc;
        }
        .label {
            width: 200rpx;
        }
        .value {
            flex: 1;
        }
    }
}

/* 同类推荐 */
.similar {
    .content {
        padding: 0 20rpx 200rpx;
        background-color: #f4f4f4;
        display: flex;
        flex-wrap: wrap;
        .goods {
            width: 340rpx;
            padding: 24rpx 20rpx 20rpx;
            margin: 20rpx 7rpx;
            border-radius: 10rpx;
            background-color: #fff;
        }
        .image {
            width: 300rpx;
            height: 260rpx;
        }
        .name {
            height: 80rpx;
            margin: 10rpx 0;
            font-size: 26rpx;
            color: #262626;
        }
        .price {
            line-height: 1;
            font-size: 20rpx;
            color: #cf4444;
        }
        .number {
            font-size: 26rpx;
            margin-left: 2rpx;
        }
    }
    navigator {
        &:nth-child(even) {
            margin-right: 0;
        }
    }
}

/* 底部工具栏 */
.toolbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #fff;
    height: 100rpx;
    padding: 0 20rpx var(--window-bottom);
    border-top: 1rpx solid #eaeaea;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: content-box;
    .buttons {
        display: flex;
        & > view {
            width: 220rpx;
            text-align: center;
            line-height: 72rpx;
            font-size: 26rpx;
            color: #fff;
            border-radius: 72rpx;
        }
        .addcart {
            background-color: #ffa868;
        }
        .buynow,
        .payment {
            background-color: #27ba9b;
            margin-left: 20rpx;
        }
    }
    .icons {
        padding-right: 10rpx;
        display: flex;
        align-items: center;
        flex: 1;
        .icons-button {
            flex: 1;
            text-align: center;
            line-height: 1.4;
            padding: 0;
            margin: 0;
            border-radius: 0;
            font-size: 20rpx;
            color: #333;
            background-color: #fff;
            &::after {
                border: none;
            }
        }
        text {
            display: block;
            font-size: 34rpx;
        }
    }
}
</style>
