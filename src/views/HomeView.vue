<script setup lang="ts">
import { useRandomUserStore } from "@/stores/users";
import { NResult, NButton } from "naive-ui";

const usersList = useRandomUserStore();
usersList.fetchUserList();
</script>

<template>
  <n-result
    status="404"
    title="Acme System"
    description="Simple testing the New Vue3, pinia,naiveUI,Vuerouter next and the composition API"
    size="huge"
  >
    <template #footer>
      <h1 class="text-3xl font-bold">
        The new composition Api and setup Script is 🔥🔥🔥🔥
      </h1>
    </template>
  </n-result>
</template>
