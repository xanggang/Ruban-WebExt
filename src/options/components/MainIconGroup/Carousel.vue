<template>
  <div class="carouesl-container">
    <div class="icon-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.carouesl-container {

  .icon-wrap {
    margin: 0 auto;
    width: var(--icon-box-width);
    height: var(--icon-box-height);
    display: grid;
    grid-template-columns: repeat(var(--icon-col), calc(100% / var(--icon-col)));
    grid-template-rows: repeat(var(--icon-row), calc(100% / var(--icon-row)));
    place-items: center;
  }
}
</style>
