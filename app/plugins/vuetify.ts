import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";
import { aliases, md } from "vuetify/iconsets/md";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: "md",
      aliases,
      sets: {
        md,
        mdi,
        fa,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
