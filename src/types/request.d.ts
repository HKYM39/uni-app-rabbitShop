/** 通用请求响应类型 */
export interface CommoResponse<T> {
  /** 状态代码 */
  code: string
  /** 返回信息 */
  msg: string
  /** 返回数据 */
  result: T
}

/** 通用分页搜索类型 */
export interface CommoPageParams {
  /** 页码 */
  page: number
  /** 每页条数 */
  pageSize: number
  /** 关键词 */
  keyword?: string
}

/** 通用分页结果类型 */
export interface CommoPageResponse<T> {
  /** 列表数据 */
  items: T[]
  /** 总条数 */
  counts: number
  /** 页码 */
  page: number
  /** 总页数 */
  pages: number
  /** 每页条数 */
  pageSize: number
}
