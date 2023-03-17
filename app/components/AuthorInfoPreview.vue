<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col class="d-flex flex-column align-center">
        <AvatarCircle :url="author.avatar" :color="author.color" :letters="author.letters" size="128px" class="tw-not-prose" :to="author.path" />
      </v-col>
    </v-row>
  </v-container>
  <NuxtLink :to="author.path">
    <h2 class="name">{{ author.title }}</h2>
  </NuxtLink>
  <div>{{ author.description }}</div>
</template>

<script setup lang="ts">
import { IAuthor } from "~/utility/content";

interface IProps {
  author: IAuthor;
}

defineProps<IProps>();
</script>

<style>
.name {
  margin-top: 0px;
}
</style>
