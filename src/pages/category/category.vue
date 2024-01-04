<template>
  <view class="viewport" v-if="finishingLoad">
    <!-- 搜索栏 -->
    <view class="search">
      <view class="input">
        <text class="icon-serach">热搜</text>
      </view>
    </view>
    <!-- 菜单栏 -->
    <view class="category">
      <!-- 滑动区域:左侧一级分类 -->
      <scroll-view class="primary" scroll-y>
        <view
          class="category-item"
          v-for="(category, index) in categoryList"
          :key="category.id"
          :class="{ active: index === activeCategory }"
          @tap="onCategoryTap(index)"
        >
          <text class="name">{{ category.name }}</text>
        </view>
      </scroll-view>
      <!-- 右侧二级菜单 -->
      <scroll-view class="sub-category" scroll-y>
        <!-- 轮播图 -->
        <commo-swiper class="swiper" :banner-list="bannerList"></commo-swiper>
        <!-- 内容区 -->
        <view
          class="panel"
          v-for="(sub, index) in activeCategoryChildren"
          :key="sub.id ? sub.id : index"
        >
          <view class="title">
            <text class="name">{{ sub.name }}</text>
            <navigator class="more" hover-class="none">全部</navigator>
          </view>
          <view class="section">
            <!-- 二级菜单推荐商品 -->
            <navigator
              class="goods"
              hover-class="none"
              v-for="goods in sub.goods"
              :key="goods.id"
              :url="`/pages/goods/goods?id=${goods.id}`"
            >
              <image :src="goods.picture" class="tumble" />
              <view class="name ellipsis">{{ goods.name }}</view>
              <view class="price">
                <text class="symbol">￥</text>
                <text class="number">{{ goods.price }}</text>
              </view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
  <skeleton v-else></skeleton>
</template>

<script setup lang="ts">
import CommoSwiper from '@/components/CommoSwiper.vue'
import { getCategoryBannersApi, getCategoryListApi } from '@/services/category'
import skeleton from './components/skeleton.vue'
import type { BannerItem } from '@/types/home'
import type { CategoryItem } from '@/types/category'

// 菜单轮播图
const bannerList = ref<BannerItem[]>([])

// 获取轮播图
const getBannerList = async () => {
  const resp = await getCategoryBannersApi()
  if (resp.code === '1') {
    bannerList.value.push(...resp.result)
  } else {
    return uni.showToast({ icon: 'none', title: resp.msg })
  }
}

// 储存分类数据
const categoryList = ref<CategoryItem[]>([])

// 获取分类数据
const getCategoryList = async () => {
  const resp = await getCategoryListApi()
  if (resp.code === '1') {
    categoryList.value.push(...resp.result)
  } else {
    return uni.showToast({ icon: 'none', title: resp.msg })
  }
}

// 当前选中菜单
const activeCategory = ref<number>(0)

// 菜单点击回调
const onCategoryTap = (index: number) => {
  activeCategory.value = index
}

// 页面是否加载完成
const finishingLoad = ref(false)

// 页面加载完成回调函数：发送请求获取数据
onLoad(async () => {
  await Promise.all([getBannerList(), getCategoryList()])
  finishingLoad.value = true
})

// 提取出当前选中分类的子分类
const activeCategoryChildren = computed(() => {
  return categoryList.value[activeCategory.value]?.children || []
})

console.log(
  '🚀 ~ file: category.vue:104 ~ activeCategoryChildren ~ activeCategoryChildren:',
  activeCategoryChildren.value,
)
</script>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/** 搜索框 */
.search {
  padding: 10rpx 30rpx 20rpx;
  background-color: white;

  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64rpx;
    padding-left: 26rpx;
    color: #8b8b8b;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: #f3f4f4;
  }

  .icon-search {
    &::before {
      margin-right: 10rpx;
    }
  }
}

/** 分类 */
.category {
  flex: 1;
  min-height: 400rpx;
  display: flex;
}

/** 一级分类 */
.primary {
  overflow: hidden;
  width: 180rpx;
  flex: none;
  background-color: #f6f6f6;

  .category-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96rpx;
    font-size: 26rpx;
    color: #905c63;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 42rpx;
      bottom: 0;
      width: 96rpx;
      border-top: 1rpx solid #e3e4e7;
    }
  }

  .active {
    background-color: white;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 8rpx;
      height: 100%;
      background-color: #27ba9b;
    }
  }
}

.primary .item:last-child::after,
.primary .active::after {
  display: none;
}

/** 二级分类 */
.sub-category {
  background-color: white;

  .swiper {
    height: 200rpx;
    margin: 0 30rpx 20rpx;
    border-radius: 4rpx;
    overflow: hidden;
  }

  .panel {
    margin: 0 30rpx 0;
  }

  .title {
    height: 60rpx;
    line-height: 60rpx;
    color: #333;
    font-size: 28rpx;
    border-bottom: 1rpx solid #f7f7f8;

    .more {
      float: right;
      padding-left: 20rpx;
      font-size: 24rpx;
      color: #999;
    }
  }

  .more {
    &::after {
      font-family: 'erabbit' !important;
      content: '\e6c2';
    }
  }

  .section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 20rpx 0;

    .goods {
      width: 150rpx;
      margin: 0 30rpx 20rpx 0;

      &:nth-child(3n) {
        margin-right: 0;
      }

      .tumble {
        width: 150rpx;
        height: 150rpx;
      }

      .price {
        padding: 5rpx;
        font-size: 18rpx;
        color: #cf4444;
      }

      .number {
        font-size: 24rpx;
        margin-left: 2rpx;
      }
    }
  }
}
</style>
