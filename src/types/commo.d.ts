/** 猜你喜欢商品类型 */
export interface GoodsItem {
  /** 唯一Id */
  id: string
  /** 商品名称 */
  name: string
  /** 商品简介 */
  desc: string
  /** 商品折扣 */
  discount: number
  /** 销量 */
  orderNum: number
  /** 商品图片 */
  picture: string
  /** 价格 */
  price: number
}

export interface GuessItem extends GoodsItem {}
