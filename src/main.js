import { BrowserTracing } from "@sentry/tracing";
import * as Sentry from "@sentry/vue";
import { createPinia } from "pinia";
import "virtual:windi.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

const app = createApp(App);

Sentry.init({
  app,
  dsn: "https://7eeb20cbffc746dd9b72ff457ce44aa8@o1158513.ingest.sentry.io/6241712",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.use(pinia).use(router).mount("#app");
