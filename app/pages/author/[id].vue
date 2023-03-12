<template>
  <div>
    <Head v-if="author">
      <Title>{{ author.title }}</Title>
      <Meta name="description" :content="author.description" />
    </Head>
    <PageBody>
      <template v-if="author" #center>
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col class="d-flex flex-column align-center">
              <AvatarCircle :url="author.avatar" :color="author.color" :letters="author.letters" size="128px" class="tw-not-prose" />
            </v-col>
          </v-row>
        </v-container>
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
