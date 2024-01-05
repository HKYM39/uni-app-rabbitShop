import { request } from '@/utils/request'
import type { BannerItem } from '@/types/home'
import type { CategoryItem } from '@/types/category'

enum CategoryApiUrls {
  GET_BANNER_LIST = '/home/banner',
  GET_CATEGORY_LIST = '/category/top',
}

/**
 * 分类－获取分类页面的轮播图
 * @param distributionSite 活动 banner 位置，1 代表首页，2 代表商品分类页
 * @returns 请求结果
 */
export const getCategoryBannersApi = async (distributionSite: number = 2) => {
  return request<BannerItem[]>({
    method: 'GET',
    url: CategoryApiUrls.GET_BANNER_LIST,
    data: { distributionSite },
  })
}

/**
 * 分类－获取分类列表
 * @returns 请求结果
 */
export const getCategoryListApi = async () => {
  return request<CategoryItem[]>({
    method: 'GET',
    url: CategoryApiUrls.GET_CATEGORY_LIST,
  })
}
