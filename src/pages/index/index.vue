<template>
  <CustomNavBar></CustomNavBar>
  <!-- 加载页面 -->
  <template v-if="loading">
    <view>页面加载中</view>
  </template>
  <template v-else>
    <CommoSwiper :banner-list="bannerList"></CommoSwiper>
    <CategoryPanel :category-list="categoryList"></CategoryPanel>
    <SubPannel :panel-list="panelList"></SubPannel>
  </template>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

import CustomNavBar from './components/CustomNavBar.vue'
import CommoSwiper from '@/components/CommoSwiper.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import SubPannel from './components/SubPannel.vue'

import { getHomeBanners, getHomeCategorys, getSubPanel } from '@/services/home'
import type { PanelItem, BannerItem, CategoryItem } from '@/types/home'

// 轮播图数据
const bannerList = ref<BannerItem[]>([])
// 发送请求获取首页轮播图
const getBanners = async () => {
  const resp = await getHomeBanners()
  if (resp.code == '1') {
    bannerList.value = resp.result
  }
}

// 获取分类菜单数据
const categoryList = ref<CategoryItem[]>([])
const getCategoryList = async () => {
  const resp = await getHomeCategorys()
  if (resp.code === '1') {
    categoryList.value = resp.result
  }
}

// 获取子栏目
const panelList = ref<PanelItem[]>([])
const getSubPanelList = async () => {
  const resp = await getSubPanel()
  if (resp.code === '1') {
    panelList.value = resp.result
  }
}

// 页面加载状态
const loading = ref(true)

// 发送请求，获取页面所需数据
// 通过uniApp的Onload,加载完成生命周期，调用Promise.all将定义的所有获取数据方法调用
onLoad(async () => {
  loading.value = true
  await Promise.all([getBanners(), getCategoryList(), getSubPanelList()])
  loading.value = false
})
</script>

<style lang="scss"></style>
@/services @/types/types
