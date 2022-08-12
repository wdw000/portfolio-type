import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://wangdo.site/api/portfolio",
});

createApp(App).mount("#app");
