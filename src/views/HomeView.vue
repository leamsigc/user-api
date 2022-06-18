<script setup lang="ts">
import router from "@/router";
import { usePodcastStore } from "@/stores/podcast";
import { useRandomUserStore } from "@/stores/users";
import { NResult, NButton, NCard } from "naive-ui";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

const usersList = useRandomUserStore();
usersList.fetchUserList();
const podcastStore = usePodcastStore()
const { getAllPodcast } = storeToRefs(podcastStore);

podcastStore.GET_BASE_PODCAST_LIST()

const HandleViewMore =(id:number)=>{
  router.push(`/single/${id}`)
}
</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-8">
      <div
        class="flex flex-col md:max-w-xl rounded-lg  shadow-lg items-center"
        v-for="item in getAllPodcast"
      >
        <img
          class="w-48 h-48 object-cover  rounded-t-lg md:rounded-none md:rounded-l-lg"
          :src="item['im:image'][2].label"
        />
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-200 text-xl font-medium mb-2">{{ item['im:name'].label }}</h5>
          <p class="text-gray-300 text-base mb-4 line-clamp-4">{{ item.summary.label }}</p>
          <n-button text @click="HandleViewMore(item.id.attributes['im:id'])">More</n-button>
        </div>
      </div>
    </div>
  </div>
</template>
