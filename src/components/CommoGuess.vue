<template>
  <view class="guess-like">
    <view class="caption">
      <text class="main-title">猜你喜欢</text>
    </view>
    <view class="guess-list">
      <navigator
        class="guess-item"
        v-for="item in Items"
        :key="item.id"
        :url="`/pages/goods/goods?id=${item.id}`"
        hover-class="none"
      >
        <image class="item-image" :src="item.picture" mode="aspectFit" />
        <text class="item-name">{{ item.name }}</text>
        <text class="item-price">
          <text class="small">￥</text>
          <text>{{ item.price }}</text>
        </text>
      </navigator>
    </view>
    <view class="loading-text"> 正在加载...... </view>
  </view>
</template>

<script setup lang="ts">
import type { CommoPageParams } from '@/types/request'
import type { GuessItem } from '@/types/commo'
import { getGussListAPI } from '@/services/commoComponent'

// 定义分页参数
const pageParams: CommoPageParams = {
  page: 1,
  pageSize: 10,
}

// 商品列表
const Items = ref<GuessItem[]>([])

// 是否还有商品
const lessProductFlag = ref(false)

// 获取猜你喜欢商品
const getData = async () => {
  // 如果已经没有推荐商品，弹出消息框提示用户
  if (lessProductFlag.value) {
    return uni.showToast({ icon: 'none', title: '没有更多数据了!' })
  }
  // 接受服务端返回数据
  const resp = await getGussListAPI(pageParams)
  if (resp.code === '1') {
    // 将服务器返回数据添加进商品数组中
    Items.value.push(...resp.result.items)
    // 如果页码还没超过总页数继续增加
    if (pageParams.page < resp.result.pages) {
      pageParams.page++
    } else {
      lessProductFlag.value = true
    }
  } else {
    return uni.showToast({ icon: 'none', title: resp.msg })
  }
}

// 重置数据
const resetDatas = () => {
  pageParams.page = 1
  Items.value = []
  lessProductFlag.value = false
}

onMounted(() => {
  getData()
})

defineExpose({
  resetDatas,
  getMore: getData,
})
</script>

<style scoped lang="scss">
:host {
  display: block;
}
.guess-like {
  .caption {
    display: flex;
    justify-content: center;
    line-height: 1;
    padding: 36rpx 0 40rpx;
    font-size: 32rpx;
    .main-title {
      display: flex;
      justify-content: center;
      padding: 0 28rpx 0 30rpx;

      &::before,
      &::after {
        content: '';
        width: 20rpx;
        height: 20rpx;
        background-image: url(@/static/images/bubble.png);
        background-size: contain;
        margin: 0 10rpx;
      }
    }
  }
  .guess-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20rpx;
    .guess-item {
      width: 345rpx;
      padding: 24rpx 20rpx 20rpx;
      margin-bottom: 20rpx;
      border-radius: 10rpx;
      overflow: hidden;
      background-color: white;
      font-size: 26rpx;
      .item-image {
        width: 304rpx;
        height: 304rpx;
      }
      .item-name {
        height: 75rpx;
        margin: 10rpx 0;
        color: #262626;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .item-price {
        flex: 1;
        padding-top: 4rpx;
        color: $main-price-color;
      }
      .small {
        font-size: 80%;
      }
    }
  }

  .loading-text {
    text-align: center;
    font-size: 28rpx;
    color: #666;
    padding: 20rpx 0;
  }
}
</style>
