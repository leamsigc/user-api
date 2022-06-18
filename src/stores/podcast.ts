import { PodcastService } from "@/services/PodcastService";
import { defineStore } from "pinia";
interface PodcastStoreInterface{
    allPodcast:[]
    currentPodcastView:any
}
export const usePodcastStore = defineStore({
  id: "podcast",
  state: ():PodcastStoreInterface => ({
    allPodcast:[],
    currentPodcastView:null
  }),
  getters: {
    getAllPodcast: (state) => state.allPodcast,
  },
  actions: {
   async GET_BASE_PODCAST_LIST() {
      const res = await PodcastService.fetchPodcasts({amount:10,category:'1318',region:"us"})
      console.log(res.data.feed.entry);
      
      this.allPodcast = res.data.feed.entry
    },

   async GET_PODCAST_BY_ID(id:number) {
    console.log(id);
    
    const res = await PodcastService.fetchById({id})
    this.currentPodcastView = res.data
   }
  },
});
