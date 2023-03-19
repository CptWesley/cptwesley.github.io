<template>
  <v-app>
    <!--
    <v-app-bar class="px-3" color="white" density="comfortable">
      <template #default>
        <v-btn v-for="link in links" :key="link.ref" :to="link.ref">
          {{ link.name }}
        </v-btn>
      </template>
      <template #append>
        <v-icon icon="mdi-vuetify" size="large" class="float-end" />
      </template>
    </v-app-bar>
  -->
    <v-app-bar class="navbar">
      <template #default>
        <v-container class="fill-height d-flex align-center">
          <v-btn v-for="link in links" :key="link.ref" :to="link.ref" variant="text">
            {{ link.name }}
          </v-btn>
        </v-container>
      </template>
      <template #append>
        <IconButton size="32" src="/github.svg" to="https://github.com/CptWesley/cptwesley.github.io" />
      </template>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
interface ILink {
  name: string;
  ref: string;
}

const links: ILink[] = [
  {
    name: "Home",
    ref: "/",
  },
  {
    name: "About",
    ref: "/author/cptwesley",
  },
  {
    name: "Posts",
    ref: "/posts",
  },
  /*
  {
    name: "Categories",
    ref: "/categories",
  },
  {
    name: "Authors",
    ref: "/authors",
  },
  */
];
</script>

<style>
.navbar {
  padding-left: 20px !important;
  padding-right: 20px !important;
}
</style>
