<template>
    <view
        class="viewport"
        v-if="finishingLoad"
        :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }"
    >
        <CustomNavBar></CustomNavBar>
        <scroll-view
            class="scroll"
            refresher-enabled
            @refresherrefresh="onScroll"
            scroll-y
            :refresher-triggered="scrollTrigger"
            @scrolltolower="onScrollLower"
        >
            <CommoSwiper :banner-list="bannerList"></CommoSwiper>
            <CategoryPanel :category-list="categoryList"></CategoryPanel>
            <SubPannel :panel-list="panelList"></SubPannel>
            <CommoGuess ref="guessRef"></CommoGuess>
        </scroll-view>
    </view>
    <skeleton v-else></skeleton>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

import CustomNavBar from './components/CustomNavBar.vue'
import CommoSwiper from '@/components/CommoSwiper.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import SubPannel from './components/SubPannel.vue'
import CommoGuess from '@/components/CommoGuess.vue'
import skeleton from './components/skeleton.vue'

import { getHomeBannersAPI, getHomeCategorysAPI, getSubPanelAPI } from '@/services/home'
import type { PanelItem, BannerItem, CategoryItem } from '@/types/home'

const { safeAreaInsets } = uni.getSystemInfoSync()

// 轮播图数据
const bannerList = ref<BannerItem[]>([])
// 发送请求获取首页轮播图
const getBanners = async () => {
    const resp = await getHomeBannersAPI()
    if (resp.code == '1') {
        bannerList.value = resp.result
    }
}

// 获取分类菜单数据
const categoryList = ref<CategoryItem[]>([])
const getCategoryList = async () => {
    const resp = await getHomeCategorysAPI()
    if (resp.code === '1') {
        categoryList.value = resp.result
    }
}

// 获取子栏目
const panelList = ref<PanelItem[]>([])
const getSubPanelList = async () => {
    const resp = await getSubPanelAPI()
    if (resp.code === '1') {
        panelList.value = resp.result
    }
}

// 猜你喜欢栏目Ref
const guessRef = ref()

// 下拉刷新动画状态
const scrollTrigger = ref(false)

// 下拉刷新回调函数
const onScroll = async () => {
    // 开启载入动画
    scrollTrigger.value = true
    // 重置猜你喜欢数据
    guessRef.value?.resetDatas()
    // 重新发送请求获取数据
    await Promise.all([
        getBanners(),
        getCategoryList(),
        getSubPanelList(),
        guessRef.value?.getMore(),
    ])
    scrollTrigger.value = false
}

const onScrollLower = async () => {
    await guessRef.value?.getMore()
}

// 页面数据是否已经加载完成
const finishingLoad = ref(false)

// 发送请求，获取页面所需数据
// 通过uniApp的Onload,加载完成生命周期，调用Promise.all将定义的所有获取数据方法调用
onLoad(async () => {
    await Promise.all([
        getBanners(),
        getCategoryList(),
        getSubPanelList(),
        guessRef.value?.getMore(),
    ])
    finishingLoad.value = true
})
</script>

<style lang="scss">
@import url('./style/index.scss');
</style>
