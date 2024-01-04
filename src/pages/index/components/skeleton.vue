<template name="skeleton">
  <view class="sk-container">
    <view is="pages/index/components/CustomNavBar">
      <view
        class="navbar CustomNavBar--navbar data-v-d6ebbcc0 CustomNavBar--data-v-d6ebbcc0"
        style="padding-top: 20px"
      >
        <view class="logo CustomNavBar--logo data-v-d6ebbcc0 CustomNavBar--data-v-d6ebbcc0">
          <image
            class="logo-image CustomNavBar--logo-image data-v-d6ebbcc0 CustomNavBar--data-v-d6ebbcc0 sk-image"
          ></image>
          <text
            class="logo-text CustomNavBar--logo-text data-v-d6ebbcc0 CustomNavBar--data-v-d6ebbcc0 sk-transparent sk-text-3-5714-309 sk-text"
            >新鲜 · 亲民 · 快捷</text
          >
        </view>
        <view class="search CustomNavBar--search data-v-d6ebbcc0 CustomNavBar--data-v-d6ebbcc0">
          <text
            class="icon-search CustomNavBar--icon-search data-v-d6ebbcc0 CustomNavBar--data-v-d6ebbcc0 sk-transparent sk-text-14-2857-817 sk-text sk-pseudo sk-pseudo-circle"
            >搜索商品</text
          >
          <text
            class="icon-scan CustomNavBar--icon-scan data-v-d6ebbcc0 CustomNavBar--data-v-d6ebbcc0 sk-pseudo sk-pseudo-circle"
          ></text>
        </view>
      </view>
    </view>
    <scroll-view refresher-enabled scroll-y class="scroll-view scroll-view" enable-back-to-top>
      <view is="components/CommoSwiper">
        <view class="carousel CommoSwiper--carousel data-v-24997f1c CommoSwiper--data-v-24997f1c">
          <swiper
            circular
            class="data-v-24997f1c CommoSwiper--data-v-24997f1c"
            :interval="3000"
            :current="0"
            :autoplay="false"
          >
            <swiper-item
              class="data-v-24997f1c CommoSwiper--data-v-24997f1c"
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <navigator
                class="navigator CommoSwiper--navigator data-v-24997f1c CommoSwiper--data-v-24997f1c"
                hover-class="none"
              >
                <image
                  class="image CommoSwiper--image data-v-24997f1c CommoSwiper--data-v-24997f1c sk-image"
                  mode="aspectFill"
                ></image>
              </navigator>
            </swiper-item>
          </swiper>
          <view
            class="indicator CommoSwiper--indicator data-v-24997f1c CommoSwiper--data-v-24997f1c"
          >
            <text
              class="dot CommoSwiper--dot data-v-24997f1c CommoSwiper--data-v-24997f1c active CommoSwiper--active"
            ></text>
            <text class="dot CommoSwiper--dot data-v-24997f1c CommoSwiper--data-v-24997f1c"></text>
            <text class="dot CommoSwiper--dot data-v-24997f1c CommoSwiper--data-v-24997f1c"></text>
            <text class="dot CommoSwiper--dot data-v-24997f1c CommoSwiper--data-v-24997f1c"></text>
            <text class="dot CommoSwiper--dot data-v-24997f1c CommoSwiper--data-v-24997f1c"></text>
          </view>
        </view>
      </view>
      <view is="pages/index/components/CategoryPanel">
        <view
          class="category CategoryPanel--category data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        >
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-98 sk-text"
              >居家</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-831 sk-text"
              >锦鲤</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-292 sk-text"
              >服饰</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-627 sk-text"
              >母婴</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-953 sk-text"
              >个护</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-376 sk-text"
              >严选</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-699 sk-text"
              >数码</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-799 sk-text"
              >运动</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-6 sk-text"
              >杂项</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-63 sk-text"
              >品牌</text
            >
          </navigator>
        </view>
      </view>
      <view is="pages/index/components/SubPannel">
        <view
          class="panel SubPannel--panel sub SubPannel--sub data-v-acad5b66 SubPannel--data-v-acad5b66"
        >
          <view class="panel-item SubPannel--panel-item data-v-acad5b66 SubPannel--data-v-acad5b66">
            <view class="title SubPannel--title data-v-acad5b66 SubPannel--data-v-acad5b66">
              <text
                class="panel-title SubPannel--panel-title data-v-acad5b66 SubPannel--data-v-acad5b66 sk-transparent sk-text-14-2857-423 sk-text"
                >特惠推荐</text
              >
              <text
                class="panel-desc SubPannel--panel-desc data-v-acad5b66 SubPannel--data-v-acad5b66 sk-transparent sk-text-14-2857-11 sk-text"
                >精选全攻略</text
              >
            </view>
            <navigator
              class="cards SubPannel--cards data-v-acad5b66 SubPannel--data-v-acad5b66"
              hover-class="none"
            >
              <image
                class="image SubPannel--image data-v-acad5b66 SubPannel--data-v-acad5b66 sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image SubPannel--image data-v-acad5b66 SubPannel--data-v-acad5b66 sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
          <view class="panel-item SubPannel--panel-item data-v-acad5b66 SubPannel--data-v-acad5b66">
            <view class="title SubPannel--title data-v-acad5b66 SubPannel--data-v-acad5b66">
              <text
                class="panel-title SubPannel--panel-title data-v-acad5b66 SubPannel--data-v-acad5b66 sk-transparent sk-text-14-2857-68 sk-text"
                >爆款推荐</text
              >
              <text
                class="panel-desc SubPannel--panel-desc data-v-acad5b66 SubPannel--data-v-acad5b66 sk-transparent sk-text-14-2857-193 sk-text"
                >最受欢迎</text
              >
            </view>
            <navigator
              class="cards SubPannel--cards data-v-acad5b66 SubPannel--data-v-acad5b66"
              hover-class="none"
            >
              <image
                class="image SubPannel--image data-v-acad5b66 SubPannel--data-v-acad5b66 sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image SubPannel--image data-v-acad5b66 SubPannel--data-v-acad5b66 sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
          <view class="panel-item SubPannel--panel-item data-v-acad5b66 SubPannel--data-v-acad5b66">
            <view class="title SubPannel--title data-v-acad5b66 SubPannel--data-v-acad5b66">
              <text
                class="panel-title SubPannel--panel-title data-v-acad5b66 SubPannel--data-v-acad5b66 sk-transparent sk-text-14-2857-143 sk-text"
                >一站买全</text
              >
              <text
                class="panel-desc SubPannel--panel-desc data-v-acad5b66 SubPannel--data-v-acad5b66 sk-transparent sk-text-14-2857-262 sk-text"
                >精心优选</text
              >
            </view>
            <navigator
              class="cards SubPannel--cards data-v-acad5b66 SubPannel--data-v-acad5b66"
              hover-class="none"
            >
              <image
                class="image SubPannel--image data-v-acad5b66 SubPannel--data-v-acad5b66 sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image SubPannel--image data-v-acad5b66 SubPannel--data-v-acad5b66 sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
          <view class="panel-item SubPannel--panel-item data-v-acad5b66 SubPannel--data-v-acad5b66">
            <view class="title SubPannel--title data-v-acad5b66 SubPannel--data-v-acad5b66">
              <text
                class="panel-title SubPannel--panel-title data-v-acad5b66 SubPannel--data-v-acad5b66 sk-transparent sk-text-14-2857-919 sk-text"
                >新鲜好物</text
              >
              <text
                class="panel-desc SubPannel--panel-desc data-v-acad5b66 SubPannel--data-v-acad5b66 sk-transparent sk-text-14-2857-498 sk-text"
                >生活加分项</text
              >
            </view>
            <navigator
              class="cards SubPannel--cards data-v-acad5b66 SubPannel--data-v-acad5b66"
              hover-class="none"
            >
              <image
                class="image SubPannel--image data-v-acad5b66 SubPannel--data-v-acad5b66 sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image SubPannel--image data-v-acad5b66 SubPannel--data-v-acad5b66 sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-309 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-817 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-98 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-831 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-292 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-627 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-953 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-376 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-699 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-799 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-6 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-63 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-423 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-11 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-68 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-193 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-143 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-262 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-919 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-498 {
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
