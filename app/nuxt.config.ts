// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@fortawesome/fontawesome-free/css/all.min.css",
    "@material-icons/font/css/all.css",
    "material-symbols/index.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  hooks: {
    async "nitro:config"(nitroConfig) {
      if (nitroConfig.dev || !nitroConfig.prerender?.routes) {
        return;
      }
      // ..Async logic..
      nitroConfig.prerender.routes.push("/posts/1");
      nitroConfig.prerender.routes.push("/posts/3");
    },
  },
  content: {
    highlight: {
      theme: {
        default: "github-light",
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
