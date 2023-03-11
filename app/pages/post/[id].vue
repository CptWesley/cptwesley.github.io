<template>
  <div>
    <Head v-if="post">
      <Title>{{ post.title }}</Title>
      <Meta name="description" :content="post.description" />
    </Head>
    <PageBody>
      <template #center>
        <div v-if="post">
          <ContentRenderer :value="post.body" />
        </div>
      </template>
    </PageBody>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "#app";
import { getPost } from "~~/utility/content";

const route = useRoute();
const post = await getPost(route.params.id);

if (!post) {
  throw createError({
    statusCode: 404,
    fatal: true,
  });
}
</script>
