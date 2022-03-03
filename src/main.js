import { createPinia } from "pinia";
import "virtual:windi.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
