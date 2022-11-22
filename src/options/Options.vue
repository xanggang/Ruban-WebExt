<template>
  <main class="ruban-container">
    <div class="bg-wrap"></div>
    <SearchBar class="search-bar"></SearchBar>
  </main>
</template>

<script setup lang="ts">

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
    position: absolute;
    top: 30%;
    left: 50%;
    margin-left: -100px;
  }
}
</style>
