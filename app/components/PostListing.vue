<template>
  <div class="listing">
    <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
    <span class="author">- {{ author?.title }}</span>
    <span class="date">{{ parseDate(post.date) }}</span>
  </div>
</template>

<script setup lang="ts">
import { getAuthor, IPost } from "~/utility/content";

interface IProps {
  post: IPost;
}

const props = defineProps<IProps>();

const author = await getAuthor(props.post.author);

function parseDate(date: Date | undefined): string {
  if (!date) {
    return "";
  }

  return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
}
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
