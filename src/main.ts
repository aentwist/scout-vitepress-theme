import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import vuetify from "./plugins/vuetify";

import "./assets/main.css";

export default <Theme>{
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(vuetify);
  },
};
