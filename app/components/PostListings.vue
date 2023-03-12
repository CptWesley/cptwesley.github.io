<template>
  <div class="tw-grid tw-grid-cols-1 tw-divide-y">
    <PostListing v-for="post in posts" :key="post.path" :post="post" />
  </div>
</template>

<script setup lang="ts">
import { IPost } from "~~/utility/content";

interface IProps {
  posts: IPost[];
}

defineProps<IProps>();
</script>
