import { request } from '@/utils/request'
import { type CategoryItem, type BannerItem, type PanelItem } from '@/types/home'

const enum HomePageUrls {
  GET_BANNER_ITEM = '/home/banner',
  GET_CATEGORY_LIST = '/home/category/mutli',
  GET_SUBPANEL_LIST = '/home/hot/mutli',
}

/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 */
export const getHomeBanners = (distributionSite = 1) => {
  return request<BannerItem[]>({
    method: 'GET',
    url: HomePageUrls.GET_BANNER_ITEM,
    data: {
      distributionSite,
    },
  })
}

/**
 * 首页－获取分类列表
 */
export const getHomeCategorys = () => {
  return request<CategoryItem[]>({
    method: 'GET',
    url: HomePageUrls.GET_CATEGORY_LIST,
  })
}

/**
 * 首页－获取子栏目列表
 */
export const getSubPanel = () => {
  return request<PanelItem[]>({
    method: 'GET',
    url: HomePageUrls.GET_SUBPANEL_LIST,
  })
}
