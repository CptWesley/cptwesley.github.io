<template>
  <div>
    <Head v-if="post">
      <Title>{{ post.title }}</Title>
      <Meta name="description" :content="post.description" />
    </Head>
    <div v-if="post">
      <ContentRenderer :value="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "#app";
import { getPost } from "~~/utility/content";
import { isString } from "~~/utility/validation";

const route = useRoute();
const id = isString(route.params.id);
const post = await getPost(id);

if (!post) {
  throw createError({
    statusCode: 500,
    fatal: true,
  });
}
</script>
