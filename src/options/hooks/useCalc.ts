import type { IAppConfig, IAppSizeConfig } from '../types'

interface ISearchCalcRes {
  width: string
  height: string
  searchRatio: number
  marginTop: string
  marginBottom: string
  appContentWidth: number
  appContentHeight: number
  searcherSizeWithRatio: {
    width: number
    height: number
  }
}

// 计算页面icon元素大小
function calcIconSize(e: IAppConfig, t: ISearchCalcRes) {
  const {
    row,
    col,
    rowGap,
    colGap,
    iconScale,
    innerWidth,
    mainRatio,
    fontSize,
  } = e
  // 实际的屏幕宽度
  const calcWidth = innerWidth > 1920
    ? 1920
    : innerWidth < 1200
      ? 1200
      : innerWidth

  const {
    appContentHeight,
    appContentWidth,
    searcherSizeWithRatio,
  } = t

  // icon容器的高度
  const iconWrapHeight = 0.8 * appContentHeight - 2.451 * searcherSizeWithRatio.height

  const y = 1 + 0.5 * (1920 - calcWidth) / 720 // 设计比例

  const colW = appContentWidth / col // 横向行数

  const colH = iconWrapHeight / row // 纵向列数

  // 计算出来的实际大小
  const calcIconSize = Math.min(Math.min(colW, colH) * iconScale * y, colW, colH)

  const w = (iconWrapHeight - row * calcIconSize) / row * rowGap / 2

  const x = col * (calcIconSize + 2 * ((appContentWidth - col * calcIconSize) / col * colGap / 2))
  let _ = Math.min(Math.ceil(x * mainRatio), innerWidth)
  let S = row * (calcIconSize + 2 * w) * mainRatio
  const O = calcIconSize * mainRatio
  const j = 1.3 * Math.max(fontSize * mainRatio, 12) + 0.9 * O * 0.08
  const k = 1.2 * (25 + j)
  _ < col * k && (_ = col * k)
  S < row * k && (S = row * k)
  let A = 0.9 * O - j - 1
  A < 25 && (A = 25)
  const I = 0.1 * innerWidth * mainRatio
  return {
    width: `${Math.floor(A)}px`, // icon宽度
    miniIconPadding: `${Math.floor(A / 7 + 4)}px`,
    boxWidth: `${Math.ceil(_)}px`,
    boxHeight: `${Math.floor(S)}px`,
    iconOneHeight: `${Math.floor(S / row)}px`,
    iconRatio: Number((A / 106).toFixed(2)),
    iconsMargin: `${Math.floor(I)}px`,
  }
}

// 计算页面search元素大小
function calcSearchSize(e: IAppConfig) {
  const {
    searchScale,
    innerHeight,
    innerWidth,
    miniMode,
    topBookmark,
    topUseful,
    mainRatio,
  } = e

  let s = 0
  if (topUseful) {
    s += 36
  }
  if (topBookmark) {
    s += 36
  }
  const u = innerHeight - s
  const f = innerWidth - 0.2 * innerWidth
  let l = innerWidth
  let p = 9 * l / 16
  if (p > u) {
    p = u
    l = 16 * p / 9
  }
  const d = l * (0.575 - 0.1818 * Math.max(Math.min(720, l - 1200), 0) / 720)
  const h = {
    width: d * searchScale,
    height: p * (0.0963 - 0.0296 * Math.max(Math.min(405, p - 675), 0) / 405) * searchScale,
  }
  if (h.width > f) {
    h.height = f / h.width * h.height
    h.width = f
  }
  const v = {
    width: h.width * mainRatio,
    height: h.height * mainRatio,
  }
  let y = null
  y = miniMode ? -0.3 : -0.06
  const g = h.width / d * mainRatio
  const m = `${Math.floor(y * u * g)}px`
  const b = `${Math.floor(0.775 * v.height)}px`
  return {
    width: `${Math.floor(v.width)}px`,
    height: `${Math.floor(v.height)}px`,
    searchRatio: Number((v.width / 625).toFixed(2)),
    marginTop: m,
    marginBottom: b,
    appContentWidth: f,
    appContentHeight: u,
    searcherSizeWithRatio: h,
  }
}

export function calcSize(e: IAppConfig): IAppSizeConfig {
  const t = calcSearchSize(e)
  const n = calcIconSize(e, t)
  return {
    searchWidth: t.width,
    searchHeight: t.height,
    searchMarginTop: t.marginTop,
    searchMarginBottom: t.marginBottom,
    searchRatio: t.searchRatio,
    iconBoxWidth: n.boxWidth,
    iconBoxHeight: n.boxHeight,
    iconOneHeight: n.iconOneHeight,
    iconWidth: n.width,
    miniIconPadding: n.miniIconPadding,
    iconRatio: n.iconRatio,
    iconsMargin: n.iconsMargin,
  }
}
