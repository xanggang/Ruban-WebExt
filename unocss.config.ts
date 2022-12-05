import { defineConfig } from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    colors: {
      'gray-1': '#333333', // 正文颜色
      'gray-2': '#707683', // 二级正文颜色
      'gray-3': '#aab0bc', // 三级正文颜色
      'gray-4': '#a3a9b4', // 最浅的颜色， 一般是tips、表单label
      'primary-a': '#50629a', // 曾激活
      'primary-1': '#1890ff', // 选中、焦点、主要的, 比主色要浅一点
    },
  },
})
