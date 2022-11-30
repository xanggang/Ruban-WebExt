<template>
  <div class="search-bar-container">
    <div class="inner">
      <a-popover v-model:visible="showPopover" title="" overlay-class-name="select-engine-popover">
        <template #content>
          <div class="select-engine-popover">
            <div
              v-for="(item, index) in engineConfig"
              :key="index"
              class="select-engine"
              @click="onSelectEngine(item)"
            >
              <img :src="item.icon" alt="">
            </div>
          </div>
        </template>
        <div class="select-engine">
          <img :src="getEngineIcon" alt="">
        </div>
      </a-popover>
      <div class="search-bar-center">
        <a-auto-complete
          v-model:value="value"
          :filter-option="false"
          :options="suggestionList"
          :default-active-first-option="false"
          @search="onSearch"
          @select="onSelect"
          @keyup.enter="onEnter"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import jsonp from 'jsonp'
import { type IEngineConfig, engineConfig } from './enums'

// 选择搜索引擎
function useEngine() {
  const engine = ref<IEngineConfig>(engineConfig[0])
  const showPopover = ref(false)
  const getEngineIcon = computed(() => {
    return unref(engine).icon
  })

  function onSelectEngine(type: IEngineConfig) {
    engine.value = type
    showPopover.value = false
  }

  return {
    engine,
    getEngineIcon,
    showPopover,
    onSelectEngine,
  }
}
const { engine, getEngineIcon, onSelectEngine, showPopover } = useEngine()

function useSuggestion() {
  const suggestionList = ref<any[]>([])
  const value = ref('')

  const onSearch = (searchText: string) => {
    if (!searchText) {
      suggestionList.value = []
      return
    }
    getSuggestion(searchText)
  }
  const onSelect = (value: string) => {
    const url = unref(engine)?.searchUrl(value)
    window.open(url)
  }
  const onEnter = () => {
    const url = unref(engine)?.searchUrl(unref(value))
    window.open(url)
  }

  onMounted(() => {
    initJsonP()
  })

  onUnmounted(() => {
    (window as any).baidu = null
  })

  function initJsonP() {
    (window as any).baidu = {
      sug(e: any) {
        suggestionList.value = e.s?.map((text: String) => {
          return {
            value: text,
          }
        })
      },
    }
  }

  function getSuggestion(wd: string) {
    return new Promise((resolve, reject) => {
      const url = `http://suggestion.baidu.com/su?wd=${wd}`
      jsonp(url, null, (err: Error, data: any) => {
        if (err) {
          reject(err)
        }
        resolve(data)
      })
    })
  }

  return {
    suggestionList,
    value,
    onSearch,
    onSelect,
    onEnter,
  }
}

const {
  suggestionList,
  value,
  onSearch,
  onSelect,
  onEnter,
} = useSuggestion()
</script>

<style lang="less" scoped>
.search-bar-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: calc(var(--search-height) * 0.1);
    border-bottom-left-radius: calc(var(--search-height) * 0.1);
    box-shadow: rgb(0 0 0 / 16%) 0px 2px 2px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px;
    overflow: hidden;
  }

  .search-bar-center {
  @apply h-12 bg-gray-50 text-gray-300;
    width: var(--search-width);
    height: var(--search-height);
    border-radius: calc(var(--search-height) * 0.1);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    :deep(.ant-select) {
      width: 100%;
      height: 100%;

      .ant-select-selector {
        width: 100%;
        height: 100%;
        border: none!important;
        box-shadow: none!important;

        .ant-select-selection-search {

          .ant-select-selection-search-input {
            width: 100%;
            height: 100%;
            font-size: calc(var(--search-height) * 0.304);
            padding-left: calc(var(--search-height) * 0.155);
            padding-right: 2.5em;
          }
        }
      }
    }
  }

  .select-engine {
    height: var(--search-height);
    width: var(--search-height);
    background: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: none;
    transition: all 0.2s;

    &:hover {
      background: rgb(238, 238, 238);
    }

    img {
      width: 80%;
      height: 80%;
    }
  }

  .select-engine-popover {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .item {
      width: 30px;
      height: 30px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

<style lang="less">
.select-engine-popover {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .select-engine {
    height: var(--search-height);
    width: var(--search-height);
    background: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: none;
    transition: all 0.2s;

    &:hover {
      background: rgb(238, 238, 238);
    }

    img {
      width: 80%;
      height: 80%;
    }
  }
}
</style>
