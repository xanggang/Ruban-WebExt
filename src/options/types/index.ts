export interface IAppConfig {
  row: number // 竖着行数
  col: number // 横着有多少个
  rowGap: number // 间距
  colGap: number // 间距
  iconScale: number // 缩放
  searchScale: number // 缩放
  innerHeight: number
  innerWidth: number
  miniMode: boolean
  topUseful: boolean
  topBookmark: boolean
  mainRatio: number
  iconRadius: string
  iconOpacity: number
  fontSize: number
  iconFontColor: string
}

export interface IAppSizeConfig {
  searchWidth: string
  searchHeight: string
  searchMarginTop: string
  searchMarginBottom: string
  searchRatio: number
  iconBoxWidth: string
  iconBoxHeight: string
  iconOneHeight: string
  iconWidth: string
  miniIconPadding: string
  iconRatio: number
  iconsMargin: string
}

export type IBgType = 'image' | 'color'
export type ISitesType = 'app' | 'web'

export interface ISites {
  name: string
  uuid: string
  bgType: IBgType
  bgImage?: string
  type: ISitesType
  target: string
  id: string
  bgColorImage?: string | null
  updatetime: number
  children?: ISites[]

  bgColor?: string
  bgFont?: number
  bgText?: string
}
