import type { GoodsItem } from './commo'

export interface CategoryItem {
  /** 唯一Id */
  id: string
  /** 一级分类图片集[ 一级分类图片项 ] */
  imageBanners: string[]
  /** 分类名称 */
  name: string
  /** 一级分类图片 */
  picture: string
  /** 所属子分类 */
  children: CategoryChildItem[]
}

export interface CategoryChildItem {
  /** 唯一Id */
  id: string
  /** 子分类名称 */
  name: string
  /** 子分类图片 */
  picture: string
  /** 子分类推荐商品 */
  goods: GoodsItem[]
}
