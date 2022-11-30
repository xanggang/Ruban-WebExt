
//
export interface IIconConfig {
  row: number // 列数
  col: number // 行数
  rowGap: number // 间距
  colGap: number // 间距
  iconScale: number // 比例
  innerWidth: number // 屏幕宽度
  mainRatio: number // 屏幕缩放比例
  fontSize: number
}

export interface IAppConfig {
  appContentHeight: number
  appContentWidth: number
  searcherSizeWithRatio: {
    width: number
    height: number
  }
}

export interface ISearchConfig {

}


interface IAppConfig {
  mainRatio: number
}
