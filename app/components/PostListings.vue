<template>
  <div v-for="(post, index) in posts" :key="post.path">
    <v-divider v-if="index > 0" />
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
