<template>
  <div>
    <Head v-if="post">
      <Title>{{ post.title }}</Title>
      <Meta name="description" :content="post.description" />
    </Head>
    <PageBody>
      <template v-if="post" #center>
        <ContentRenderer :value="post.body" />
      </template>
      <template v-if="author" #right>
        <AuthorInfoPreview :author="author!" />
      </template>
    </PageBody>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "#app";
import { getAuthor, getPost } from "~/utility/content";

const route = useRoute();
const post = await getPost(route.params.id);
const author = await getAuthor(post?.author);

if (!post) {
  throw createError({
    statusCode: 404,
    fatal: true,
  });
}
</script>
