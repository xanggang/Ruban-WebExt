import baidu from '@/assets/baidu.png'
import google from '@/assets/google.png'

export interface IEngineConfig {
  icon: string
  name: string
  key: string
  searchUrl: (v: string) => string
}

export const engineConfig: IEngineConfig[] = [
  {
    icon: baidu,
    name: '百度',
    key: 'baidu',
    searchUrl: v => `https://www.baidu.com/s?ie=utf-8&wd=${v}`,
  },
  {
    icon: google,
    name: '谷歌',
    key: 'google',
    searchUrl: v => `https://www.google.com/search?q=${v}`,
  },
]
