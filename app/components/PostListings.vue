<template>
  <div v-for="post in posts" :key="post.path">
    <PostListing :post="post" />
  </div>
</template>

<script setup lang="ts">
import { IPost } from "~~/utility/content";

interface IProps {
  posts: IPost[];
}

defineProps<IProps>();
</script>
