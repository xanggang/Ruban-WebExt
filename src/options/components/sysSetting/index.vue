<template>
  <a-drawer
    :visible="visible"
    class="custom-class"
    style="color: red"
    placement="right"
    :mask-style="maskStyle"
    @close="onClose"
  >
    <template #title>
      <div class="header-wrap">
        <div class="header-icon">
          <PlusSquareOutlined />
          <span class="text">添加</span>
        </div>
        <div class="header-icon">
          <UserOutlined />
          <span class="text">我的</span>
        </div>
        <div class="header-icon">
          <SettingOutlined />
          <span class="text">设置</span>
        </div>
      </div>
    </template>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script lang="ts" setup>
import { PlusSquareOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { propTypes } from '~/utils/propTypes'

const props = defineProps({
  visible: propTypes.bool,
})
const emits = defineEmits(['close'])

const maskStyle = {
  background: 'transparent',
}

function onClose() {
  emits('close')
}
</script>

<style scoped lang="less">
//@import '../../../styles/_variable.less';
.header-wrap {
  display: flex;
  justify-content: center;
  align-items: center;

  .header-icon {
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.1s;

    .text {
      font-size: 12px;
      font-weight: 500;
      color: @text-color-tip-1;

      span {
        color: @text-color-tip-1;
      }
    }

    &:hover {
      color: @text-color-base-2;
      .text {
        color: @text-color-base-2;
      }
    }
  }
}
</style>
