<template>
  <a-drawer
    :visible="visible"
    class="custom-class"
    style="color: red"
    title="Basic Drawer"
    placement="right"
    @close="onClose"
  >
    <p>Some contents...</p>
    <div class="i-clarity-close-line"></div>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script lang="ts" setup>
import { propTypes } from '~/utils/propTypes'

const props = defineProps({
  visible: propTypes.bool,
})
const emits = defineEmits(['close'])

function onClose() {
  emits('close')
}
</script>

<style scoped>

</style>
