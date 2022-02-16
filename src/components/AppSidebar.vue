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

import { useRandomUserStore } from "@/stores/users";
import { computed, ref } from "vue";
import SidebarUserCard from "./SidebarUserCard.vue";
import type { User } from "@/types/ServiceInterface";

import { useInfiniteScroll } from "@vueuse/core";

const userStore = useRandomUserStore();
const el = ref<HTMLElement>();

const searchQuery = ref<string>("");
useInfiniteScroll(
  el,
  () => {
    userStore.fetchNextPage();
  },
  { distance: 10 }
);
const listContent = computed((): User[] => {
  if (searchQuery.value) {
    return userStore.getFilerList(searchQuery.value.trim());
  } else {
    return userStore.userList;
  }
});

function updateQuery({ target }: { target: HTMLInputElement }) {
  searchQuery.value = target?.value;
}
</script>

<template>
  <aside>
    <div class="sidebar">
      <div class="sidebar__header">
        <input
          type="text"
          placeholder="Search..."
          class="sidebar__header--input"
          data-test="searchInput"
          :value="searchQuery"
          @input="updateQuery"
        />
      </div>
      <div class="sidebar__content" ref="el">
        <SidebarUserCard
          v-for="user in listContent"
          :key="user.phone"
          :image-url="user.picture.thumbnail"
          :email="user.email"
          :fist-name="user.name.first"
          :last-name="user.name.last"
        />
      </div>
    </div>
  </aside>
</template>
<style scoped lang="scss">
.uppercase_fist {
  margin-right: calc(var(--base-mg) * 0.5px);
  &::first-letter {
    text-transform: uppercase;
  }
}
.text-bold {
  font-weight: bold;
}
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
    max-height: calc(100vh - 9rem);
    overflow-y: auto;
  }
}
</style>
