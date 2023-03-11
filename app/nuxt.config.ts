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

      const posts = fs.readdirSync("./content/post");
      posts.forEach((post) => {
        const route = `/post/${path.parse(post).name}`;
        nitroConfig.prerender?.routes?.push(route);
      });
    },
  },
});
