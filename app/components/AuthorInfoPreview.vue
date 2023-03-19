<template>
  <AuthorInfoHeader :author="author" />
  <NuxtLink :to="author.path">
    <h3 class="name">{{ author.title }}</h3>
  </NuxtLink>
  <div class="text">{{ author.description }}</div>
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
.text {
  font-size: medium;
}
</style>
