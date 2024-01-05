import { request } from '@/utils/request'
import type { GoodsRsponse } from '@/types/goods'

enum GoodsApiUrls {
    GET_GOODS_DETAIL = '/goods',
}

export const getGoodsDetailByIdApi = (id: string) => {
    return request<GoodsRsponse>({
        url: GoodsApiUrls.GET_GOODS_DETAIL,
        method: 'GET',
        data: { id },
    })
}
