<script lang="ts" setup>
import AppContent from "@/components/AppContent.vue";
import AppSidebar from "@/components/AppSidebar.vue";

/**
 *
 * Component Description: The application shell
 * @author leamsigc <Ismael@leamsigc>
 * @version 0.0.1
 *
 * @todo [✔] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
</script>

<template>
  <div class="container">
    <!-- Sidebar -->
    <AppSidebar class="container__sidebar" />
    <!-- Main -->
    <AppContent class="container__main" />
  </div>
</template>
<style scoped lang="scss">
.container {
  display: grid;
  grid-template-areas: "sidebar content content content";
  grid-template-columns: minmax(300px, 400px) repeat(3, 1fr);
  min-height: 100vh;

  &__sidebar {
    grid-area: sidebar;
    padding: calc(var(--base-pd) * 1px);
  }

  &__main {
    /* Take the remaining width */
    grid-area: content;

    /* Make it scrollable */
    overflow: auto;

    background: rgba(0, 0, 0, 0.2);
    padding: calc(var(--base-pd) * 2px);
  }
}
</style>
