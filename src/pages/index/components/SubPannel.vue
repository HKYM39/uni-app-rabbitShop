<template>
  <view class="panel sub">
    <view class="panel-item" v-for="panel in panelList" :key="panel.id">
      <view class="title">
        <text class="panel-title">{{ panel.title }}</text>
        <text class="panel-desc">{{ panel.alt }}</text>
      </view>
      <navigator
        class="cards"
        :url="`/pages/recommend/recommend?type=${panel.type}`"
        hover-class="none"
      >
        <image
          class="image"
          mode="aspectFit"
          v-for="(img, index) in panel.pictures"
          :key="index"
          :src="img"
        ></image>
      </navigator>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { PanelItem } from '@/types/home'
defineProps({
  panelList: {
    required: true,
    type: Object as PropType<PanelItem[]>,
  },
})
</script>

<style scoped lang="scss">
.sub {
  display: flex;
  flex-wrap: wrap;
  min-height: 508rpx;
  margin: 20rpx 20rpx 0;
  border-radius: 10rpx;
  background-color: #fff;

  .title {
    display: flex;
    align-items: center;
    padding: 24rpx 24rpx 0;
    font-size: 32rpx;
    color: #262626;
    position: relative;

    .panel-desc {
      font-size: 24rpx;
      color: #7f7f7f;
      margin-left: 18rpx;
    }
  }

  .panel-item {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 254rpx;
    border-right: 1rpx solid #eee;
    border-top: 1rpx solid #eee;

    .title {
      justify-content: start;
    }

    &:nth-child(2n) {
      border-right: 0 none;
    }

    &:nth-child(-n + 2) {
      border-top: 0 none;
    }

    .image {
      width: 150rpx;
      height: 150rpx;
    }
  }

  .cards {
    flex: 1;
    padding: 15rpx 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
