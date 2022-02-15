import { defineStore } from "pinia";
export const useRandomUserStore = defineStore({
  id: "users",
  state: () => ({
    userList: [],
  }),
  getters: {
    getUserList: (state) => state.userList,
  },
  actions: {
    async fetchUserList() {
      const res = await UserService.fetchUsers();
      this.userList = res.data;
    },
  },
});
