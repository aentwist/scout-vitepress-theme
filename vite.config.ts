import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      // {
      //   find: /^.*\/VPContent\.vue$/,
      //   replacement: fileURLToPath(
      //     new URL("./src/components/CustomContent.vue", import.meta.url)
      //   ),
      // },
    ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "Scout Vitepress Theme",
      fileName: "scout-vitepress-theme",
    },
    // rollupOptions: {
    //   // make sure to externalize deps that shouldn't be bundled
    //   // into your library
    //   external: ["vue"],
    //   output: {
    //     // Provide global variables to use in the UMD build
    //     // for externalized deps
    //     globals: {
    //       vue: "Vue",
    //     },
    //   },
    // },
  },
});
