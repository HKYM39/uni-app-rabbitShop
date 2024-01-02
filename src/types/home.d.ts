export interface BannerItem {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
}

/** 首页分类数据类型 */
export interface CategoryItem {
  /* 图标 */
  icon: string
  /* 唯一Id */
  id: string
  /* 分类名称 */
  name: string
}

/** 首页－热门推荐等界面数据类型 */
export interface PanelItem {
  /** 唯一id */
  id: string
  /** 标题 */
  title: string
  /** 类型 */
  type: number
  /** 介绍 */
  alt: string
  /** 图片地址 */
  pictures: string[]
}
