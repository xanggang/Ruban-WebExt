import type { ISites } from '../options/types'
import { useStorageLocal } from '~/composables/useStorageLocal'

export const sitesStorage = useStorageLocal<ISites[]>(
  'sites',
  [],
  { listenToStorageChanges: true })
