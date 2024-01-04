import type { CommoPageResponse, CommoPageParams } from './request'
import type { GoodsItem } from './commo'

export interface RecommendResponse {
  /** 唯一Id */
  id: string
  /** 活动图片 */
  bannerPicture: string
  /** 推荐栏目标题 */
  title: string
  /** 子栏目数据 */
  subTypes: SubTypeItem[]
}

export interface RecommendPageParams extends CommoPageParams {
  /** 子栏目id，默认查询所有子栏目的第一页 */
  subType?: string
}

export interface SubTypeItem {
  /** 唯一id */
  id: string
  /** 子栏目标题 */
  title: string
  /** 子栏目商品合集 */
  goodsItems: CommoPageResponse<GoodsItem>
}
