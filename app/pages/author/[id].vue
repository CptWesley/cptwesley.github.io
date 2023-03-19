<template>
  <div>
    <Head v-if="author">
      <Title>{{ author.title }}</Title>
      <Meta name="description" :content="author.description" />
    </Head>
    <PageBody>
      <template v-if="author" #center>
        <AuthorInfoHeader :author="author" :disable-link="true" />
        <ContentRenderer :value="author.body" />
      </template>

      <template v-if="author" #bcenter>
        <h1>Posts</h1>
        <PostListings :posts="posts" />
      </template>
    </PageBody>
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
