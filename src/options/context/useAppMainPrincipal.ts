import type { Ref } from 'vue'
import { inject, provide } from 'vue'

const key = Symbol('appMainPrincipal')

export interface AppMainPrincipal {
  onLaunchApp: (key: string) => void
  onUnLaunchApp: () => void
  currentAppId: Ref<string>
}

export function createAppMainPrincipal() {
  const currentAppId = ref('123')

  function onLaunchApp(key: string) {
    currentAppId.value = key
  }

  function onUnLaunchApp() {
    currentAppId.value = ''
  }

  const appMainPrincipal = {
    currentAppId,
    onLaunchApp,
    onUnLaunchApp,
  }

  provide(key, appMainPrincipal)

  return appMainPrincipal
}

export function useAppMainPrincipal(): AppMainPrincipal {
  return inject(key) as AppMainPrincipal
}
