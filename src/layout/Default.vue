<script setup lang="ts">
import { NConfigProvider, useOsTheme, darkTheme } from "naive-ui";
import { computed, h, ref } from "vue";
import {
  NLayout,
  NLayoutSider,
  NMenu,
  NLayoutFooter,
  NLayoutHeader,
  NLoadingBarProvider,
} from "naive-ui";
import { useMenuEntrys } from "@/composables";
import PodcastPlayer from "../components/PodcastPlayer.vue";


const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null));
const osThemeRef = useOsTheme();

const { menu } = useMenuEntrys()

const inverted = ref<boolean>(false);
</script>

<template>
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } }" :theme="theme">
    <n-layout position="absolute">
      <n-layout-header style="height: 64px; padding: 24px" bordered>PPLAYER</n-layout-header>
      <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
        <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          show-trigger
          :inverted="inverted"
        >
          <n-menu
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menu"
          />
        </n-layout-sider>
        <n-layout content-style="padding: 24px;" :native-scrollbar="false" style="overflow: hidden">
          <n-loading-bar-provider>
            <slot></slot>
          </n-loading-bar-provider>
        </n-layout>
      </n-layout>
      <n-layout-footer
        bordered
        position="absolute"
        class="flex p-2"
        :style="{
          height: '120px',
          'min-height': '100px',
          'z-index':1000
        }"
      >
        <podcast-player></podcast-player>
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<style>
:root {
  --base-pd: 5;
  --base-mg: 5;
  --base-bg: rgba(7, 28, 124, 0.185);
  --base-color-primary: rgba(1, 23, 119, 0.3);
  --base-lh: 1.5;
  --base-font: "v-roboto", "roboto", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  font-family: var(--base-font);
  line-height: var(--base-lh);
  overflow: hidden;
}
</style>
