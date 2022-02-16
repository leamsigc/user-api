<script setup lang="ts">
import { RouterView } from "vue-router";
import { NConfigProvider, useOsTheme, darkTheme } from "naive-ui";
import { computed, h, ref } from "vue";
import {
  NIcon,
  NLayout,
  NLayoutSider,
  NMenu,
  NLayoutFooter,
  NLayoutHeader,
  NLoadingBarProvider,
} from "naive-ui";
import {
  HomeOutline as HomeIcon,
  ManOutline as MaleIcon,
  WomanOutline as PersonIcon,
  MaleFemaleOutline as UserIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";
import { RouterLink } from "vue-router";

const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null));
const osThemeRef = useOsTheme();

function renderIcon(icon: unknown) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions = ref([
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/",
          },
        },
        { default: () => "Home" }
      ),
    key: "home",
    icon: renderIcon(HomeIcon),
  },
  {
    label: "Users",
    key: "users",
    icon: renderIcon(UserIcon),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: "/users",
                query: {
                  gender: "all",
                },
              },
            },
            { default: () => "All" }
          ),
        key: "all",
        icon: renderIcon(UserIcon),
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: "/users",
                query: {
                  gender: "male",
                },
              },
            },
            { default: () => "Male" }
          ),
        key: "male",
        icon: renderIcon(MaleIcon),
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: "/users",
                query: {
                  gender: "female",
                },
              },
            },
            { default: () => "Female" }
          ),
        key: "female",
        icon: renderIcon(PersonIcon),
      },
    ],
  },
  {
    label: "Reports",
    key: "reports",
    icon: renderIcon(WineIcon),
    children: [
      {
        label: "Month",
        key: "month",
      },
    ],
  },
  {
    label: "Load more...",
    key: "the-past-increases-the-future-recedes",
  },
]);
const inverted = ref<boolean>(false);
</script>

<template>
  <n-config-provider
    :theme-overrides="{ common: { fontWeightStrong: '600' } }"
    :theme="theme"
  >
    <n-layout position="absolute">
      <n-layout-header style="height: 64px; padding: 24px" bordered>
        Acme System
      </n-layout-header>
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
            :options="menuOptions"
          />
        </n-layout-sider>
        <n-layout
          content-style="padding: 24px;"
          :native-scrollbar="false"
          style="overflow: hidden"
        >
          <n-loading-bar-provider>
            <RouterView />
          </n-loading-bar-provider>
        </n-layout>
      </n-layout>
      <n-layout-footer
        bordered
        position="absolute"
        style="height: 64px; padding: 24px"
      >
        <strong> Leamsigc </strong>
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
