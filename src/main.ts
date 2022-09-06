import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import { createPinia } from "pinia";
import { scrollAnimation } from "./lib/directives";

export const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

const pinia = createPinia();

createApp(App)
  .directive("scrollAnimation", scrollAnimation)
  .use(pinia)
  .mount("#app");
