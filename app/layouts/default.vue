<template>
  <v-app>
    <v-app-bar class="px-3" color="white" flat density="compact">
      <v-spacer></v-spacer>
      <v-tabs grow color="grey-darken-2">
        <v-tab v-for="link in links" :key="link.ref" :to="link.ref" ripple>
          {{ link.name }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
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
  {
    name: "Categories",
    ref: "/categories",
  },
  {
    name: "Authors",
    ref: "/authors",
  },
];
</script>
