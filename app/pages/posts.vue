<template>
  <div>
    <Head>
      <Title>Posts</Title>
      <Meta name="description" content="List of blog posts" />
    </Head>
    <PageBody>
      <template #center>
        <h1>Posts</h1>
        <PostListings :posts="posts" />
      </template>
    </PageBody>
  </div>
</template>

<script setup lang="ts">
import { getPosts } from "~/utility/content";

const posts = await getPosts();
</script>
