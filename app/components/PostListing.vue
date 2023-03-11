<template>
  <div>
    <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { IPost } from "~~/utility/content";

interface IProps {
  post: IPost;
}

defineProps<IProps>();
</script>

<style></style>
