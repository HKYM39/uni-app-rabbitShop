<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="false" :interval="3000" @change="onChange">
      <swiper-item v-for="(banner, index) in bannerList" :key="index">
        <navigator url="/pages/index/index" class="navigator" hover-class="none">
          <image :src="banner.imgUrl" mode="aspectFill" class="image" />
        </navigator>
      </swiper-item>
    </swiper>
    <view class="indicator">
      <text
        v-for="(item, index) in bannerList"
        :key="index"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import type { PropType } from 'vue'
import type { BannerItem } from '@/types/home'
const activeIndex = ref<number>(0)
// 轮播图地址
defineProps({
  bannerList: {
    required: true,
    type: Object as PropType<BannerItem[]>,
  },
})

const onChange: UniHelper.SwiperOnChange = (e) => {
  activeIndex.value = e.detail.current
}
</script>

<style scoped lang="scss">
.carousel {
  height: 280rpx;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;

    .dot {
      width: 30rpx;
      height: 6rp;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .active {
      background-color: #fff;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
@/services/home/types
