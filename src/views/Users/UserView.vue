<script setup lang="ts">
import { useRandomUserStore } from "@/stores/users";

const userStore = useRandomUserStore();
</script>

<template>
  <div>
    <code>
      {{ userStore.currentUser }}
    </code>
  </div>
</template>
