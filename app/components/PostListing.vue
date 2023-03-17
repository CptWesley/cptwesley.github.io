<template>
  <div class="listing">
    <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
    <span class="author">{{ authorString }}</span>
    <span class="date">{{ dateString }}</span>
  </div>
</template>

<script setup lang="ts">
import { getAuthor, IPost } from "~/utility/content";

interface IProps {
  post: IPost;
}

const props = defineProps<IProps>();

const author = await getAuthor(props.post.author);

const authorString = author ? `- ${author.title}` : "";
const dateString = props.post.date ? `${props.post.date.getDay()}-${props.post.date.getMonth()}-${props.post.date.getFullYear()}` : "";
</script>

<style>
.listing {
  display: flex;
}
.author {
  display: inherit;
  font-size: small;
  align-items: center;
  margin-left: 1ch;
  color: gray;
}
.date {
  display: inherit;
  font-size: small;
  margin-left: auto;
  margin-right: 0px;
  align-items: center;
  color: gray;
}
</style>
