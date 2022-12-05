import { useCssVar as useCss, useWindowSize } from '@vueuse/core'
import { calcSize } from './useCalc'
import { appSizeStorage } from '~/logic/storage'

export default function useCssVar() {
  const cssVarDomRef = ref()
  const { width, height } = useWindowSize()
  const appConfig = appSizeStorage
  const cssVarState = reactive({
    theme: 'nom',

    screenWidth: width,
    screenHeight: height,

    iconWidth: 0,
    iconHeight: 0,
  })

  const searchWidthVar = useCss('--search-width')
  const searchHeightVar = useCss('--search-height')
  const searchMarginTopVar = useCss('--search-margin-top')
  const searchMarginBottomVar = useCss('--search-margin-bottom')
  const searchRatioVar = useCss('--search-ratio')
  const iconBoxWidthVar = useCss('--icon-box-width')
  const iconBoxHeightVar = useCss('--icon-box-height')
  const iconOneHeightVar = useCss('--icon-one-height')
  const iconWidthVar = useCss('--icon-width')
  const miniIconPaddingVar = useCss('--mini-icon-padding')
  const iconRatioVar = useCss('--icon-ratio')
  const iconsMarginVar = useCss('--icons-margin')
  const iconColVar = useCss('--icon-col')
  const iconRowVar = useCss('--icon-row')
  const iconRadiusVar = useCss('--icon-radius')
  const iconOpacityVar = useCss('--icon-opacity')
  const iconFontColorVar = useCss('--icon-font-color')
  const iconFontSizeVar = useCss('--icon-font-size')

  watchEffect(() => {
    appConfig.value.innerWidth = unref(width)
    appConfig.value.innerHeight = unref(height)
  })

  watchEffect(() => {
    const {
      searchWidth,
      searchHeight,
      searchMarginTop,
      searchMarginBottom,
      searchRatio,
      iconBoxWidth,
      iconBoxHeight,
      iconOneHeight,
      iconWidth,
      miniIconPadding,
      iconRatio,
      iconsMargin,
    } = calcSize(unref(appSizeStorage))

    searchWidthVar.value = searchWidth
    searchHeightVar.value = searchHeight
    searchRatioVar.value = searchRatio.toString()
    searchMarginTopVar.value = searchMarginTop
    searchMarginBottomVar.value = searchMarginBottom
    iconBoxWidthVar.value = iconBoxWidth
    iconBoxHeightVar.value = iconBoxHeight
    iconOneHeightVar.value = iconOneHeight
    iconWidthVar.value = iconWidth
    miniIconPaddingVar.value = miniIconPadding
    iconRatioVar.value = iconRatio.toString()
    iconsMarginVar.value = iconsMargin

    iconColVar.value = unref(appSizeStorage).col.toString()
    iconRowVar.value = unref(appSizeStorage).row.toString()
    iconRadiusVar.value = unref(appSizeStorage).iconRadius
    iconOpacityVar.value = unref(appSizeStorage).iconOpacity.toString()
    iconFontSizeVar.value = unref(appSizeStorage).fontSize.toString()
    iconFontColorVar.value = unref(appSizeStorage).iconFontColor
  })

  return {
    ...toRefs(cssVarState),
    cssVarDomRef,
  }
}
