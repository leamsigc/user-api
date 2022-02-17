import type UserStore from "@/types/UserStoreInterface";
import { UserService } from "@/services/UserService";
import { defineStore } from "pinia";

import type { SetUserParams } from "@/types/ServiceInterface";
export const useRandomUserStore = defineStore({
  id: "users",
  state: (): UserStore => ({
    userList: [],
    unFilterUserList: [],
    currentUser: undefined,
    currentPage: 1,
    resultsPerPage: 25,
    error: "",
    isLoading: false,
  }),
  getters: {
    getUserList: (state) => state.userList,
    getFilerList:
      (state) =>
      (searchQuery: string, gender = "all") =>
        state.userList
          .filter((user) => (gender === "all" ? user : user.gender === gender))
          .filter((user) => {
            const first = user.name.first.toLowerCase();
            const last = user.name.last.toLowerCase();
            return (
              first.includes(searchQuery.toLowerCase()) ||
              last.includes(searchQuery.toLowerCase())
            );
          }),
    getCurrentUser: (state) => state.currentUser,
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
    setCurrentUser({ email, fistName, id, lastName }: SetUserParams) {
      this.currentUser = this.userList.find(
        (user) =>
          user.email === email &&
          user.name.first === fistName &&
          user.name.last === lastName
      );
    },
  },
});
