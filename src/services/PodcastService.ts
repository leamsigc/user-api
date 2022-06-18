
import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

export abstract class PodcastService {
  private static settings: AxiosRequestConfig<string> = {
    baseURL: `${import.meta.env.VITE_PODCAST_URL}`,
  };

  private static PodcastInstance = axios.create(this.settings);

  static async fetchPodcasts({
    region, category, amount
  }: { region: String, category: String, amount: Number }) {
    const formatParam = `/${region}/rss/topaudiopodcasts/limit=${amount}/genre=${category}/json`;
    const exampleParam = 'us/rss/topaudiopodcasts/limit=50/genre=1318/json'
    return await this.PodcastInstance.get(exampleParam);
  }

  static async fetchById({ id }: { id: Number }) {
    return await this.PodcastInstance.get(`/lookup?id=${id}`);
  }

  private parseRSS(data:any) {

    return {
      title: data.title,
      author: data.author,
      description: data.description.long,
      image: data.image,
      updated: data.updated,
      website: data.link,
      email: data.owner.email,
      episodes: data.episodes,
      allEpisodes: data.episodes.map((x: any) => Object.assign({}, x)),
      latestEpisode: data.episodes[0],
      isLoading: false,
    }
  }
}
