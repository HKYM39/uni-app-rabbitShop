<template>
  <view class="category">
    <navigator
      class="category-item"
      url="/pages/index/index"
      hover-class="none"
      v-for="category in categoryList"
      :key="category.id"
    >
      <image class="icon" :src="category.icon" />
      <text class="text">{{ category.name }}</text>
    </navigator>
  </view>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { CategoryItem } from '@/types/home'
defineProps({
  categoryList: {
    required: true,
    type: Object as PropType<CategoryItem[]>,
  },
})
</script>

<style scoped lang="scss">
.category {
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  background-color: #f7f7f7;
  display: flex;
  flex-wrap: wrap;
  min-height: 328rpx;
  .category-item {
    width: 150rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
