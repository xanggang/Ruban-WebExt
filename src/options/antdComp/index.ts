import type { App } from 'vue'
import 'ant-design-vue/dist/antd.css'
import AutoComplete from 'ant-design-vue/lib/auto-complete'
import APopover from 'ant-design-vue/lib/popover'
import ACarousel from 'ant-design-vue/lib/carousel'
import ABadge from 'ant-design-vue/lib/badge'
import ADrawer from 'ant-design-vue/lib/drawer'
// import 'ant-design-vue/lib/auto-complete/style/index.css'
// import 'ant-design-vue/lib/popover/style/index.css'
// import 'ant-design-vue/lib/input/style/index.css'

export function installAntdComp(app: App) {
  app.component(AutoComplete.name, AutoComplete)
  app.component(APopover.name, APopover)
  app.component(ACarousel.name, ACarousel)
  app.component(ABadge.name, ABadge)
  app.component(ADrawer.name, ADrawer)
}
