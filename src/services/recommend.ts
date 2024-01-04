import { request } from '@/utils/request'
import type { RecommendResponse, RecommendPageParams } from '@/types/recommend'

export const getRecommendAPI = async (url: string, params?: RecommendPageParams) => {
  return request<RecommendResponse>({
    method: 'GET',
    url,
    data: params,
  })
}
