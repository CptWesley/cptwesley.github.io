<template>
  <div>
    <Head v-if="author">
      <Title>{{ author.title }}</Title>
      <Meta name="description" :content="author.description" />
    </Head>
    <div v-if="author">
      <ContentRenderer :value="author.body" />
    </div>
    <div v-for="post in posts" :key="post.path">
      <div>{{ post.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "#app";
import { getAuthor, getPosts } from "~~/utility/content";
import { isString } from "~~/utility/validation";

const route = useRoute();
const id = isString(route.params.id);
if (!id) {
  throw createError({
    statusCode: 404,
    fatal: true,
  });
}
const author = await getAuthor(id);
if (!author) {
  throw createError({
    statusCode: 404,
    fatal: true,
  });
}
const posts = await getPosts({ author: id });
</script>
