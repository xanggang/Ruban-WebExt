<template>
  <div class="search-bar-container">
    <AutoComplete
      v-model:value="value"
      :options="options"
      placeholder="input here"
      @select="onSelect"
      @search="onSearch"
    />
  </div>
</template>

<script lang="ts" setup>
import AutoComplete from 'ant-design-vue/lib/auto-complete'
import 'ant-design-vue/lib/auto-complete/style/index.css'

interface MockVal {
  value: string
}

const mockVal = (str: string, repeat = 1): MockVal => {
  return {
    value: str.repeat(repeat),
  }
}

const value = ref('')
const options = ref<MockVal[]>([])
const onSearch = (searchText: string) => {
  console.log('searchText')
  options.value = !searchText
    ? []
    : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
}
const onSelect = (value: string) => {
  console.log('onSelect', value)
}
watch(value, () => {
  console.log('value', value.value)
})
</script>

<style lang="less" scoped>
.search-bar-container {
  @apply h-12 bg-gray-50 text-gray-300;
  width: 400px;

  > * {
    width: 100px;
  }
}
</style>
