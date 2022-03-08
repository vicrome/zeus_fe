import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    user: "patata",
    data: ["a"],
  }),
  getters: {
    getUser() {
      return this.user;
    },
    getData() {
      return this.data;
    },
  },
  actions: {
    setUser(user) {
      this.user = user;
      localStorage.setItem("user", user);
    },
    setData(data) {
      this.data = data;
    },
  },
});
