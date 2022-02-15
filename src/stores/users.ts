import type UserStore from "@/types/UserStoreInterface";
import { UserService } from "@/services/UserService";
import { defineStore } from "pinia";
export const useRandomUserStore = defineStore({
  id: "users",
  state: (): UserStore => ({
    userList: [],
    currentPage: 1,
    resultsPerPage: 10,
    error: "",
    isLoading: false,
  }),
  getters: {
    getUserList: (state) => state.userList,
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
  },
});
