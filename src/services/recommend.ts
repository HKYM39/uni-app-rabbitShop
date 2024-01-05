import { request } from '@/utils/request'
import type { RecommendResponse, RecommendPageParams } from '@/types/recommend'

/**
 * 推荐－分页查询分类下推荐商品合集，每个推荐栏目请求商品各异
 * @param url 推荐栏目地址
 * @param params 推荐商品分页搜索参数，不传入subType对象默认查询子分类的第一页
 * @returns 请求结果
 */
export const getRecommendAPI = async (url: string, params?: RecommendPageParams) => {
  return request<RecommendResponse>({
    method: 'GET',
    url,
    data: params,
  })
}
