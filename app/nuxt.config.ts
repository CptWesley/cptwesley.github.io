import fs from "fs";
import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  hooks: {
    "nitro:config"(nitroConfig) {
      if (nitroConfig.dev || !nitroConfig.prerender?.routes) {
        return;
      }

      function pushContent(dir: string) {
        const articles = fs.readdirSync(`./content/${dir}`);
        articles.forEach((article) => {
          const route = `/${dir}/${path.parse(article).name}`;
          nitroConfig.prerender?.routes?.push(route);
        });
      }

      pushContent("post");
      pushContent("author");
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    baseURL: "/",
  },
});
