import { useCssVar as useCss, useWindowSize } from '@vueuse/core'

export default function useCssVar() {
  const cssVarDomRef = ref()
  const { width, height } = useWindowSize()
  const cssVarState = reactive({
    theme: 'nom',

    screenWidth: width,
    screenHeight: height,

    iconWidth: 0,
    iconHeight: 0,
  })

  const searchWidth = useCss('--search-width')
  const searchHeight = useCss('--search-height')

  watchEffect(() => {
    const height = Math.min(58, unref(width) * 0.1)
    searchWidth.value = `${unref(width) * 0.48}px`
    searchHeight.value = `${height}px`
  })

  return {
    ...toRefs(cssVarState),
    cssVarDomRef,
    searchWidth,
    searchHeight,
  }
}
