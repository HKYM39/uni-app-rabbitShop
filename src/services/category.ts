import { request } from '@/utils/request'
import type { BannerItem } from '@/types/home'
import type { CategoryItem } from '@/types/category'

enum CategoryApiUrls {
  GET_BANNER_LIST = '/home/banner',
  GET_CATEGORY_LIST = '/category/top',
}

export const getCategoryBannersApi = async (distributionSite: number = 2) => {
  return request<BannerItem[]>({
    method: 'GET',
    url: CategoryApiUrls.GET_BANNER_LIST,
    data: { distributionSite },
  })
}

export const getCategoryListApi = async () => {
  return request<CategoryItem[]>({
    method: 'GET',
    url: CategoryApiUrls.GET_CATEGORY_LIST,
  })
}
