<template>
  <view class="viewport">
    <!-- 推荐背景图 -->
    <view class="cover">
      <image :src="panelData?.bannerPicture" mode="aspectFit" />
    </view>
    <view class="tabs">
      <view
        class="text"
        v-for="(sub, index) in panelData?.subTypes"
        :key="sub.id"
        @tap="activeTab(index)"
        :class="{ active: activeTabIndex === index }"
      >
        {{ sub.title }}
      </view>
    </view>
    <!-- 推荐商品 -->
    <scroll-view
      class="scroll-view"
      refresher-enabled
      @refresherrefresh="onScroll"
      :refresher-triggered="scrollTrigger"
      @scrolltolower="onScrolltolower"
      scroll-y
    >
      <view class="goods">
        <!-- 遍历展示商品 -->
        <navigator
          class="navigator"
          v-for="(goods, index) in goodList"
          :key="goods.id + index"
          :url="`/page/goods/goods?id=${goods.id}`"
        >
          <!-- 商品图片 -->
          <image class="tumble" :src="goods.picture" mode="aspectFill" />
          <!-- 商品介绍 -->
          <view class="name">{{ goods.name }}</view>
          <!-- 商品价格 -->
          <view class="price">
            <text class="symbol">￥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">
        {{ hasMoreGoods ? '已经没有更多数据了～' : '正在加载商品......' }}
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { getRecommendAPI } from '@/services/recommend'
import type { GoodsItem } from '@/types/commo'
import type { RecommendPageParams, RecommendResponse, SubTypeItem } from '@/types/recommend'

// 定义栏目数组
const panelMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneSetp' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

// 接受Props
const query = defineProps({
  type: {
    required: true,
    type: String,
  },
})

// 搜索出当前页面栏目类型
const current = panelMap.find((item) => item.type === query.type)

// 动态设置标题
// uni.setNavigationBarTitle({ title: current!.title })

// 获取推荐栏目参数
const pageParams: RecommendPageParams = {
  page: 1,
  pageSize: 10,
}

// 栏目数据
const panelData = ref<RecommendResponse>()

// 栏目推荐的商品数据
const goodList = ref<GoodsItem[]>([])

// 是否还有更多商品标识
const hasMoreGoods = ref(false)

// 获取栏目数据
const getRecommendData = async () => {
  const resp = await getRecommendAPI(current!.url, pageParams)
  if (resp.code === '1') {
    panelData.value = resp.result
    // 如果请求参数中没有subType，将返回所有子栏目的第一页数据
    if (pageParams.subType === undefined) {
      resp.result.subTypes.forEach((sub) => {
        sub.goodsItems.items.forEach((good) => {
          const repeat = goodList.value.findIndex((r) => r.id === good.id)
          if (repeat === -1) {
            goodList.value.push(good)
          }
        })
      })
      hasMoreGoods.value = true
    } else {
      // 如果subType不为Null，将只返回搜索栏目下的商品数据
      const searchSubType = resp.result.subTypes.find((sub) => {
        return sub.id === panelData.value?.subTypes[activeTabIndex.value].id
      }) as SubTypeItem
      goodList.value.push(...searchSubType!.goodsItems.items)
      if (pageParams.page < searchSubType.goodsItems.pages) {
        pageParams.page++
        hasMoreGoods.value = false
      } else {
        // 修改是否还有商品为 true
        hasMoreGoods.value = true
        // 弹窗提示用户已经没有更多商品了
        return uni.showToast({
          icon: 'none',
          title: `${searchSubType.title} 已经没有更多商品了`,
        })
      }
    }
  }
}
// 当前选中Tab
const activeTabIndex = ref<number>(-1)

// 触摸Tab栏回调函数
const activeTab = (index: number) => {
  if (index !== activeTabIndex.value) {
    // 修改激活Tab栏Id
    activeTabIndex.value = index
    // 将TabId放入搜索参数中
    pageParams.subType = panelData.value?.subTypes[activeTabIndex.value].id
    // 清除当前栏目的商品数据
    goodList.value = []
    getRecommendData()
  }
}

// 下滑动画条件
const scrollTrigger = ref(false)

// 下滑回调函数
const onScroll = async () => {
  // 开启载入动画
  scrollTrigger.value = true
  // 清除页面数据
  goodList.value = []
  pageParams.page = 1
  await getRecommendData()
  // 关闭载入动画
  scrollTrigger.value = false
}

// 滚动触底回调
const onScrolltolower = async () => {
  if (activeTabIndex.value === -1) {
    return uni.showToast({ icon: 'none', title: '未选中子栏目只能查看一页商品' })
  } else {
    getRecommendData()
  }
}

// 页面加载完成回调
onLoad(() => {
  getRecommendData()
})
</script>

<style lang="scss">
page {
  height: 100%;
  background-color: $main-background-color;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;

  .cover {
    width: 750rpx;
    height: 225rpx;
    border-radius: 0 0 40rpx 40rpx;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }

  .scroll-view {
    flex: 1;
  }

  .loading-text {
    width: 100%;
    text-align: center;
  }

  .tabs {
    display: flex;
    justify-content: space-evenly;
    height: 100rpx;
    line-height: 90rpx;
    margin: 0 20rpx;
    font-size: 28rpx;
    border-radius: 10rpx;
    box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
    color: #333;
    background-color: white;
    position: relative;
    z-index: 9;

    .text {
      margin: 0 20rpx;
      position: relative;
    }

    .active {
      &::after {
        content: '';
        width: 40rpx;
        height: 4rpx;
        transform: translate(-50%);
        background-color: #27ba9b;
        position: absolute;
        left: 50%;
        bottom: 24rpx;
      }
    }
  }

  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20rpx 20rpx;

    .navigator {
      width: 345rpx;
      padding: 20rpx;
      margin-top: 20rpx;
      border-radius: 10rpx;
      background-color: white;
    }

    .tumble {
      width: 305rpx;
      height: 305rpx;
    }

    .name {
      height: 88rpx;
      font-size: 26rpx;
    }

    .price {
      line-height: 1;
      color: #cf4444;
      font-size: 30rpx;
    }

    .symbol {
      font-size: 70%;
    }

    .number {
      font-size: 70%;
    }
  }
}
</style>
