import type UserStore from "@/types/UserStoreInterface";
import { UserService } from "@/services/UserService";
import { defineStore } from "pinia";
export const useRandomUserStore = defineStore({
  id: "users",
  state: (): UserStore => ({
    userList: [],
    currentPage: 1,
    resultsPerPage: 25,
    error: "",
    isLoading: false,
  }),
  getters: {
    getUserList: (state) => state.userList,
    getFilerList: (state) => (searchQuery: string) =>
      state.userList.filter((user) => {
        const first = user.name.first.toLowerCase();
        const last = user.name.last.toLowerCase();
        return (
          first.includes(searchQuery.toLowerCase()) ||
          last.includes(searchQuery.toLowerCase()) 
        );
        // user.name.first.search(new RegExp(searchQuery, "i")) ||
        // user.name.last.search(new RegExp(searchQuery, "i"))
      }),
  },
  actions: {
    async fetchUserList() {
      try {
        this.isLoading = true;
        const res = await UserService.fetchUsers({
          page: this.currentPage,
          result: this.resultsPerPage,
          seed: "seed",
        });
        this.userList = res.data.results;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
    async fetchNextPage() {
      try {
        this.currentPage++;
        const res = await UserService.fetchUsers({
          page: this.currentPage,
          result: this.resultsPerPage,
          seed: "seed",
        });
        this.userList = [...this.userList, ...res.data.results];
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
