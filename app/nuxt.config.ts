import fs from "fs";
import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxt/content"],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  typescript: {
    typeCheck: true,
    strict: true,
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
});
