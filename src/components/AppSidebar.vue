<script lang="ts" setup>
/**
 *
 * Component Description:Sidebar component
 *
 * @author Leamsigc <Ismael@leamsigc>
 * @version 0.0.1
 *
 * @todo [✔] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

import { useLoadingBar, NInput, NGrid, NGi } from "naive-ui";
import { useRandomUserStore } from "@/stores/users";
import { ref, watch } from "vue";
import SidebarUserCard from "./SidebarUserCard.vue";

import { useInfiniteScroll } from "@vueuse/core";
import { useRoute } from "vue-router";

const userStore = useRandomUserStore();

const listContent = ref(userStore.userList);

const el = ref<HTMLElement>();

const loadingBar = useLoadingBar();
const route = useRoute();

const searchQuery = ref<string>("");

useInfiniteScroll(
  el,
  async () => {
    const gender = route.query.gender || "all";
    loadingBar.start();
    await userStore.fetchNextPage();
    listContent.value = userStore.getFilerList("", gender as string);
    loadingBar.finish();
  },
  { distance: 10 }
);

watch(
  searchQuery,
  () => {
    const gender = route.query.gender || "all";
    listContent.value = userStore.getFilerList(
      searchQuery.value.trim(),
      gender as string
    );
  },
  { immediate: true }
);
watch(route, () => {
  const gender = route.query.gender || "all";
  listContent.value = userStore.getFilerList(
    searchQuery.value.trim(),
    gender as string
  );
});
</script>

<template>
  <template v-if="!userStore.isLoading">
    <aside>
      <div class="sidebar">
        <div class="sidebar__header">
          <n-input
            type="text"
            placeholder="Search..."
            class="sidebar__header--input"
            data-test="searchInput"
            v-model:value="searchQuery"
          />
        </div>
        <div class="sidebar__content" ref="el">
          <n-grid x-gap="12" y-gap="12" cols="1 400:2 600:3">
            <n-gi
              v-for="(user, index) in listContent"
              :key="user.phone"
              span="1"
            >
              <SidebarUserCard
                :image-url="user.picture.thumbnail"
                :email="user.email"
                :fist-name="user.name.first"
                :last-name="user.name.last"
                :id="index"
              />
            </n-gi>
          </n-grid>
        </div>
      </div>
    </aside>
  </template>
  <template v-else> <div class="grid-center">...loading</div> </template>
</template>
<style lang="scss">
.grid-center {
  display: grid;
  place-content: center;
  min-height: 100vh;
  max-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.uppercase_fist {
  margin-right: calc(var(--base-mg) * 0.5px);
  &::first-letter {
    text-transform: uppercase;
  }
}
.text-bold {
  font-weight: bold;
}
</style>
<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  &__header {
    padding: calc(var(--base-pd) * 2px) calc(var(--base-pd) * 3px);
    margin-bottom: calc(var(--base-mg) * 4px);
    &--input {
      display: block;
      width: 100%;
      padding: calc(var(--base-pd) * 2px);
    }
  }
  &__content {
    padding: calc(var(--base-pd) * 2px) calc(var(--base-pd) * 3px);
    border-top: 1px solid var(--base-color-primary);
    flex: 1;
    max-height: calc(100vh - 30vh);
    overflow-y: auto;
  }
}
</style>
