<template>
  <span class="tw-not-prose">
    <NuxtLink :to="post.path" class="listing">
      <span>{{ post.title }}</span>
      <span class="author">{{ authorString }}</span>
      <span class="date">{{ dateString }}</span>
    </NuxtLink>
  </span>
</template>

<script setup lang="ts">
import { getAuthor, IPost } from "~/utility/content";

interface IProps {
  post: IPost;
}

const props = defineProps<IProps>();

const author = await getAuthor(props.post.author);

const authorString = author ? `- ${author.title}` : "";
const dateString = props.post.date?.toLocaleDateString() ?? "";
</script>

<style>
.listing {
  display: flex;
}
.listing:hover {
  filter: invert(0.3);
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
