import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import { createPinia } from "pinia";

export const instance = axios.create({
  baseURL: "https://wangdo.site/api/portfolio",
});

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
