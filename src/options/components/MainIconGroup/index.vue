<template>
  <div class="main-icon-group-container">
    <a-carousel ref="carouselRef" class="icon-carousel" dots-class="self-dots-class">
      <Carousel v-for="(page, index) in totalPage" :key="index">
        <IconWrap v-for="(site, ci) in list[index]" :key="`${page}_${ci}`" :site="site"/>
      </Carousel>
    </a-carousel>
  </div>
</template>

<script lang="ts" setup>
import { debounce } from 'lodash-es'
import { useEventListener } from '@vueuse/core'
import IconWrap from '../IconWrap/index.vue'
import Carousel from './Carousel.vue'
import { appSizeStorage, sitesStorage } from '~/logic'
import type { ISites } from '~/options/types'

function useMousewheel() {
  const carouselRef = ref<Nullable<any>>(null)
  function onMousewheel(e: WheelEvent) {
    if (e.deltaY > 0) {
      unref(carouselRef)?.next()
    } else {
      unref(carouselRef)?.prev()
    }
  }

  let cleanup: Nullable<Fn> = null
  const debounceEvent = debounce(onMousewheel, 30)

  onMounted(() => {
    cleanup = useEventListener(window, 'mousewheel', debounceEvent)
  })
  onUnmounted(() => {
    cleanup && cleanup()
  })

  return carouselRef
}

const carouselRef = useMousewheel()

function useIconList() {
  const totalPage = ref(0)
  const list = ref<ISites[][]>([])
  watchEffect(() => {
    const { row, col } = unref(appSizeStorage)
    const onePageTotal = row * col
    const total = unref(sitesStorage).length
    totalPage.value = total % onePageTotal === 0
      ? total / onePageTotal
      : Math.floor(total / onePageTotal) + 1
    let start = 0
    while (start < total) {
      list.value.push(unref(sitesStorage).slice(start, total))
      start += onePageTotal
    }
  })

  return {
    totalPage,
    list,
  }
}

const { list, totalPage } = useIconList()
</script>

<style lang="less" scoped>
.main-icon-group-container {
  flex-shrink: 0;
  position: relative;
  padding: 0px 0px 20px;
  width: 100%;
  overflow: hidden visible;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon-carousel {
    height: calc(var(--icon-box-height) + 10px);
    width: calc(var(--icon-box-width) + var(--icons-margin) * 2);
    box-sizing: border-box;
  }

  :deep(.self-dots-class) {
    > li {
      width: 15px;

      >button {
        display: block;
        width: 15px;
        height: 15px;
        background-color: rgb(255, 255, 255);
        opacity: 0.4;
        border-radius: 50%;
        cursor: pointer;
        transition: opacity 0.3s ease 0s;
      }

      &.slick-active {
        width: 15px;
      }
    }
  }

  :deep(.ant-carousel) {
    .slick-dots-bottom {
      bottom: -30px;
    }
  }
}
</style>
