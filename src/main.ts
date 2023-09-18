import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import vuetify from "./plugins/vuetify";
import VPActivities from "./layouts/VPActivities.vue";
import VPAbout from "./layouts/VPAbout.vue";
import VPContact from "./layouts/VPContact.vue";

import "./assets/main.css";

export default <Theme>{
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(vuetify);

    app.component("activities", VPActivities);
    app.component("about", VPAbout);
    app.component("contact", VPContact);
  },
};
