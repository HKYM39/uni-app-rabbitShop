<template name="skeleton">
    <view class="sk-container">
        <scroll-view scroll-y="true" enable-back-to-top="true">
            <view class="goods goods">
                <view class="preview preview">
                    <swiper circular="true" current="0" autoplay="false">
                        <swiper-item
                            style="
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                transform: translate(0%, 0px) translateZ(0px);
                            "
                        >
                            <image mode="aspectFill" class="sk-image"></image>
                        </swiper-item>
                    </swiper>
                    <view class="indicator indicator">
                        <text class="cureent sk-transparent sk-opacity">0</text>
                        <text class="split sk-transparent sk-opacity">/</text>
                        <text class="total sk-transparent sk-opacity">5</text>
                    </view>
                </view>
                <view class="meta meta">
                    <view class="price price">
                        <text class="symbol sk-transparent sk-text-14-2857-232 sk-text">￥</text>
                        <text class="number sk-transparent sk-text-14-2857-347 sk-text"
                            >171.00</text
                        >
                    </view>
                </view>
                <view class="action action">
                    <view class="item arrow sk-pseudo sk-pseudo-circle">
                        <text class="label sk-transparent sk-text-14-2857-398 sk-text">选择</text>
                        <text class="text ellipsis sk-transparent sk-text-14-2857-371 sk-text">
                            请选择商品规格
                        </text>
                    </view>
                    <view class="item arrow sk-pseudo sk-pseudo-circle">
                        <text class="label sk-transparent sk-text-14-2857-575 sk-text">送至</text>
                        <text class="text ellipsis sk-transparent sk-text-14-2857-797 sk-text">
                            请选择收货地址
                        </text>
                    </view>
                    <view class="item arrow sk-pseudo sk-pseudo-circle">
                        <text class="label sk-transparent sk-text-14-2857-681 sk-text">服务</text>
                        <text class="text ellipsis sk-transparent sk-text-14-2857-440 sk-text">
                            无忧退 快速退款 免费包邮
                        </text>
                    </view>
                </view>
                <veiw class="detail detail panel panel">
                    <view class="title title"></view>
                </veiw>
            </view>
        </scroll-view>
        <view class="toolbar toolbar" style="padding-bottom: 0px">
            <view class="icons icons">
                <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle">
                    <text class="icon-heart sk-pseudo sk-pseudo-circle"></text>收藏
                </button>
                <button
                    class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle"
                    open-type="contact"
                >
                    <text class="icon-handset sk-pseudo sk-pseudo-circle"></text>客服
                </button>
                <navigator class="icons-button sk-transparent" open-type="switchTab">
                    <text class="icon-cart sk-pseudo sk-pseudo-circle"></text>购物车
                </navigator>
            </view>
            <view class="buttons buttons">
                <view
                    class="addcart sk-transparent sk-text-31-9444-327 sk-text"
                    style="background-position-x: 50%"
                >
                    加入购物车
                </view>
                <view
                    class="buynow sk-transparent sk-text-31-9444-564 sk-text"
                    style="background-position-x: 50%"
                >
                    立即购买
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.sk-transparent {
    color: transparent !important;
}
.sk-opacity {
    opacity: 0 !important;
}
.sk-text-14-2857-232 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 47.6rpx;
    position: relative !important;
}
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}
.sk-text-14-2857-347 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 78.4rpx;
    position: relative !important;
}
.sk-text-14-2857-398 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}
.sk-text-14-2857-371 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}
.sk-text-14-2857-575 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}
.sk-text-14-2857-797 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}
.sk-text-14-2857-681 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}
.sk-text-14-2857-440 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}
.sk-text-31-9444-327 {
    background-image: linear-gradient(
        transparent 31.9444%,
        #eeeeee 0%,
        #eeeeee 68.0556%,
        transparent 0%
    ) !important;
    background-size: 100% 72rpx;
    position: relative !important;
}
.sk-text-31-9444-564 {
    background-image: linear-gradient(
        transparent 31.9444%,
        #eeeeee 0%,
        #eeeeee 68.0556%,
        transparent 0%
    ) !important;
    background-size: 100% 72rpx;
    position: relative !important;
}
.sk-button {
    color: #efefef !important;
    background: #efefef !important;
    border: none !important;
    box-shadow: none !important;
}
.sk-image {
    background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
    background: #efefef !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
    border-radius: 50% !important;
}
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
}
</style>
