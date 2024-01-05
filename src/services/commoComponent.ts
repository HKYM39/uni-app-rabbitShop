import { request } from '@/utils/request'
import type { GuessItem } from '@/types/commo'
import type { CommoPageParams, CommoPageResponse } from '@/types/request'

enum CommoRequestApi {
  GET_GEUSS_LIST = '/home/goods/guessLike',
}

/**
 * 通用－分页搜索
 * @param params 分页搜索参数
 * @returns 请求结果
 */
export const getGussListAPI = (params: CommoPageParams) => {
  return request<CommoPageResponse<GuessItem>>({
    method: 'GET',
    url: CommoRequestApi.GET_GEUSS_LIST,
    data: params,
  })
}
