<script setup lang="ts">import { usePodcastStore } from '@/stores/podcast';
import { useRoute,  } from 'vue-router';


const podcastStore = usePodcastStore()
const {params} = useRoute()

await podcastStore.GET_PODCAST_BY_ID(params.id as unknown as number)
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ params.id}}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
