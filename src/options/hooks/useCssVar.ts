import { useWindowSize, useCssVar } from '@vueuse/core'
function useCssVar() {
  const cssVarState = reactive({
    theme: 'nom',

    screenWidth: 0,
    screenHeight: 0,

    searchWidth: 0,
    searchHeight: 0,

    iconWidth: 0,
    iconHeight: 0,
  })
}
