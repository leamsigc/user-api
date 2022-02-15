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

const { userList } = useRandomUserStore();
</script>

<template>
  <aside>
    <div class="sidebar">
      <div class="sidebar__header">
        <input type="text" placeholder="Search..." />
      </div>
      <div class="sidebar__content">
        <div
          class="sidebar__content--item"
          v-for="user in userList"
          :key="user.phone"
        >
          <section class="sidebar__content--item__img">
            <img :src="user.picture.thumbnail" alt="user.name.first" />
          </section>
          <section class="sidebar__content--item__details">
            <p class="text-bold">
              <span class="uppercase_fist">
                {{ user.name.first }}
              </span>
              <span class="uppercase_fist">
                {{ user.name.last }}
              </span>
            </p>
            <p>
              {{ user.email }}
            </p>
          </section>
        </div>
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
  }
  &__content {
    padding: calc(var(--base-pd) * 2px) calc(var(--base-pd) * 3px);
    border-top: 1px solid var(--base-color-primary);
    flex: 1;
    max-height: calc(100vh - 9rem);
    overflow-y: auto;
    &--item {
      cursor: pointer;
      margin-top: calc(var(--base-pd) * 2px);
      padding: calc(var(--base-pd) * 2px) calc(var(--base-pd) * 3px);
      display: grid;
      grid-template-columns: 1fr 2fr 2fr;
      grid-gap: calc(var(--base-pd) * 2px);

      background: var(--base-bg);
      &__img {
        img {
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
