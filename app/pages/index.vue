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
      <template v-if="author" #bcenter>
        <h1>Posts</h1>
        <PostListings :posts="posts" />
      </template>
    </PageBody>
  </div>
</template>

<script setup lang="ts">
import { getAuthor, getPost, getPosts } from "~/utility/content";

const post = await getPost("welcome");
const author = await getAuthor(post?.author);
const posts = await getPosts();

if (!post) {
  throw createError({
    statusCode: 404,
    fatal: true,
  });
}
</script>
