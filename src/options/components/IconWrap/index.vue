<template>
  <div class="item-container">
    <div class="icon-item" @click="handleClick">
      <div class="icon-content" :style="bindStyle">
        <span v-if="site.bgType === 'color'" class="icon-content-text"> {{ site.bgText }}</span>
        <div class="red-tag">
          <span>1</span>
        </div>
      </div>
    </div>
    <div class="icon-name">
      {{ site.name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { ISites } from '~/options/types'
import { useAppMainPrincipal } from '~/options/context/useAppMainPrincipal'

const props = defineProps({
  site: {
    type: Object as PropType<ISites>,
    default: () => ({}),
  },
})
const { onLaunchApp, currentAppId } = useAppMainPrincipal()

const bindStyle = computed(() => {
  const { bgImage, bgType, bgColor, bgFont } = toRefs(props.site)
  const obj: Recordable = {
    ...(unref(bgColor) ? { 'background-color': unref(bgColor) } : {}),
  }
  if (unref(bgType) === 'image') {
    return {
      ...obj,
      backgroundImage: `url("${unref(bgImage)}")`,
    }
  }
  if (unref(bgType) === 'color') {
    return {
      ...obj,
      backgroundColor: unref(bgColor),
      fontSize: `${unref(bgFont)}px`,
    }
  }
  return {}
})

function handleClick() {
  const { uuid, type } = toRefs(props.site)
  if (unref(type) === 'app') {
    onLaunchApp(unref(uuid))
  }
}
</script>

<style lang="less" scoped>
.item-container {
  width: 100%;
  height: var(--icon-one-height);
  position: relative;

  .icon-item {

    .icon-content {
      position: relative;
      box-sizing: border-box;
      background-size: cover;
      --svg-radius: var(--icon-radius);
      border-radius: var(--icon-radius);
      display: flex;
      justify-content: center;
      align-items: center;
      will-change: transform;
      margin: auto;
      opacity: var(--icon-opacity);
      cursor: pointer;
      transition-property: box-shadow, transform, border-radius, filter;
      transition-duration: 0.2s;
      transition-timing-function: ease;
      width: var(--icon-width);
      height: var(--icon-width);
      background-repeat: no-repeat;
      background-position: center;

      .icon-content-text {
        color: #fff;
        font-weight: 400;
      }

      .red-tag {
        position: absolute;
        right: calc(0.25 * var(--icon-radius));
        top: calc(0.25 * var(--icon-radius));
        transform: translate(40%, -40%);
        font-size: calc(var(--icon-width) * 0.15);
        padding: 0 calc(var(--icon-width) * 0.075);
        border-radius: calc(var(--icon-width) * 0.21);
        color: rgb(255, 255, 255);
        background-color: rgb(255, 78, 80);
        line-height: 1;
        min-width: 12px;
        box-sizing: border-box;
        height: calc(var(--icon-width) * 0.21);
        min-height: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;

        span {
          line-height: 1;
          margin-top: -1px;
        }
      }
    }
  }

  .icon-name {
    //visibility: var(--icon-visible);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    margin: auto;
    margin-top: 8%;
    max-width: calc(var(--icon-box-width) / var(--icon-col) / 1.5);
    min-width: calc(var(--icon-font-size) * 3);
    font-size: var(--icon-font-size);
    height: calc(var(--icon-font-size) * 1.4);
    color: var(--icon-font-color);
    opacity: var(--icon-opacity);
    text-shadow: 1px 1px 2px rgb(0 0 0 / 20%);
    width: calc(var(--icon-width) * 1.5);
  }
}

@media (hover: hover) {
  .icon-content:not(.with-drag):hover {
    animation: 2s ease 0s infinite normal none running blinking;
    box-shadow: none;
  }
}

@keyframes blinking {
  0% {
    filter: drop-shadow(rgba(33, 150, 243, 0.72) 0px 0px 3px);
  }

  50% {
    filter: drop-shadow(rgba(33, 150, 243, 0.72) 0px 0px 10px);
  }
  100% {
    filter: drop-shadow(rgba(33, 150, 243, 0.72) 0px 0px 3px);
  }
};
</style>
