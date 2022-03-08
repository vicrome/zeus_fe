import { defineConfig } from "windicss/helpers";

export default defineConfig({
  attributify: true,
  shortcuts: {
    cbutton:
      "ml-12 p-1 rounded-lg border-primary-orange border-2 transition bg-primary-orange text-black hover:text-white",
  },
  theme: {
    extend: {
      colors: {
        "primary-orange": "#ff8906",
      },
    },
  },
});
