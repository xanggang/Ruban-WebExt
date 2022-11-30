<template>
  <main class="ruban-container">
    <div class="bg-wrap"></div>
    <SearchBar class="search-bar"></SearchBar>
  </main>
</template>

<script setup lang="ts">
import useCssVar from '~/options/hooks/useCssVar'

const {
  screenWidth,
  screenHeight,
  searchHeight,
  searchWidth,
} = useCssVar()
</script>

<style lang="less" scoped>
.ruban-container {
  width: 100%;
  height: 100%;
  background: pink;

  .bg-wrap {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://api.dujin.org/bing/1920.php");
    background-size: cover;
  }
  .search-bar {
    position: relative;
    top: 30%;
  }
  .config {

  }
}
</style>
