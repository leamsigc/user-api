<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
:root {
  --base-pd: 5;
  --base-mg: 5;
  --base-bg: rgba(7, 28, 124, 0.185);
  --base-color-primary: rgba(1, 23, 119, 0.3);
  --base-lh: 1.5;
  --base-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
