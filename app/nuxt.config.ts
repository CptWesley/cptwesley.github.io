// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      // ..Async logic..
      nitroConfig.prerender.routes.push("/posts/1");
      nitroConfig.prerender.routes.push("/posts/3");
    },
  },
});
