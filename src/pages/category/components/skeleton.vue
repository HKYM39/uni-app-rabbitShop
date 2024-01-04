<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <view class="search search">
        <view class="input input">
          <text class="icon-serach sk-transparent sk-text-14-2857-915 sk-text">热搜</text>
        </view>
      </view>
      <view class="category category">
        <scroll-view scroll-y class="primary primary">
          <view class="category-item active sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-73 sk-text">居家</text>
          </view>
          <view class="category-item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-856 sk-text">美食</text>
          </view>
          <view class="category-item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-106 sk-text">服饰</text>
          </view>
          <view class="category-item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-850 sk-text">母婴</text>
          </view>
          <view class="category-item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-262 sk-text">个护</text>
          </view>
          <view class="category-item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-767 sk-text">严选</text>
          </view>
          <view class="category-item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-409 sk-text">数码</text>
          </view>
          <view class="category-item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-474 sk-text">运动</text>
          </view>
          <view class="category-item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-235 sk-text">杂项</text>
          </view>
        </scroll-view>
        <scroll-view scroll-y class="sub-category sub-category">
          <view is="components/CommoSwiper" class="swiper swiper">
            <view class="carousel CommoSwiper--carousel">
              <swiper circular :interval="3000" :current="0" :autoplay="false">
                <swiper-item
                  style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(0%, 0px) translateZ(0px);
                  "
                >
                  <navigator class="navigator CommoSwiper--navigator" hover-class="none">
                    <image class="image CommoSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator CommoSwiper--indicator">
                <text class="dot CommoSwiper--dot active CommoSwiper--active"></text>
                <text class="dot CommoSwiper--dot"></text>
                <text class="dot CommoSwiper--dot"></text>
                <text class="dot CommoSwiper--dot"></text>
                <text class="dot CommoSwiper--dot"></text>
              </view>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-26-6667-67 sk-text">居家生活用品</text>
              <navigator
                class="more sk-transparent sk-text-30-0000-760 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
                >全部</navigator
              >
            </view>
            <view class="section section">
              <navigator class="goods goods" hover-class="none">
                <image class="tumble sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-504 sk-text"
                  >梅乃宿梅酒720毫升</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">￥</text>
                  <text class="number sk-transparent sk-text-14-2857-369 sk-text">168.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="tumble sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-995 sk-text"
                  >法国年份雅文邑700毫升</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">￥</text>
                  <text class="number sk-transparent sk-text-14-2857-236 sk-text">1480.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="tumble sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-754 sk-text"
                  >多米尼加陈年朗姆酒700毫升</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">￥</text>
                  <text class="number sk-transparent sk-text-14-2857-231 sk-text">238.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="tumble sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-486 sk-text"
                  >全新升级，四川酸辣粉195克*6杯</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">￥</text>
                  <text class="number sk-transparent sk-text-14-2857-984 sk-text">69.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="tumble sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-263 sk-text"
                  >川味牛肉辣椒酱190克</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">￥</text>
                  <text class="number sk-transparent sk-text-14-2857-582 sk-text">38.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="tumble sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-790 sk-text"
                  >极光限定 珠光蓝珐琅锅</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">￥</text>
                  <text class="number sk-transparent sk-text-14-2857-762 sk-text">199.00</text>
                </view>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-915 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-73 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-856 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-106 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-850 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-262 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-767 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-409 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-474 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-235 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-26-6667-67 {
  background-image: linear-gradient(
    transparent 26.6667%,
    #eeeeee 0%,
    #eeeeee 73.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}
.sk-text-30-0000-760 {
  background-image: linear-gradient(
    transparent 30%,
    #eeeeee 0%,
    #eeeeee 70%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}
.sk-text-14-2857-504 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-369 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-995 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-236 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-754 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-231 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-486 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-984 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-263 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-582 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-790 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-762 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
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
