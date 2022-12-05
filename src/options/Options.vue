<template>
  <main class="ruban-container">
    <div class="bg-wrap" />
    <div class="main-middle-center">
      <SearchBar class="search-bar" />
      <MainIconGroup />
    </div>
  </main>
  <SysSetting :visible="currentAppId === 'dc://sys-config'" @close="onUnLaunchApp"/>
</template>

<script setup lang="ts">
import MainIconGroup from './components/MainIconGroup/index.vue'
import SearchBar from './components/SearchBar/index.vue'
import SysSetting from './components/sysSetting/index.vue'
import { defaultAppConfig, sites } from './setting'
import useCssVar from '~/options/hooks/useCssVar'
import { appSizeStorage, sitesStorage } from '~/logic'
import { createAppMainPrincipal } from '~/options/context/useAppMainPrincipal'

sitesStorage.value = sites
appSizeStorage.value = defaultAppConfig
useCssVar()

const {
  currentAppId,
  onLaunchApp,
  onUnLaunchApp,
} = createAppMainPrincipal()
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
    //background-image: url("https://api.dujin.org/bing/1920.php");
    background-image: url("https://infinitypro-img.infinitynewtab.com/wallpaper/travel/2576.jpg?imageView2/2/w/1920/format/webp/interlace/1");
    background-size: cover;
  }

  .main-middle-center {
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .config {

  }
}
</style>
