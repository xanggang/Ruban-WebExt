import type { IAppConfig } from '../options/types'
import { defaultAppConfig } from '../options/setting'
import { useStorageLocal } from '~/composables/useStorageLocal'

export const appSizeStorage = useStorageLocal<IAppConfig>(
  'appSizeConfig',
  {
    ...defaultAppConfig,
  },
  { listenToStorageChanges: true })
