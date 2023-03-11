<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
    </Head>
    <div v-if="markdown">
      <ContentRenderer :value="markdown" />
    </div>
    <div v-else>NOT FOUND</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "#app";

const route = useRoute();
const id = route.params.id;
const found = await queryContent(`posts/${id}`).find();
const markdown = found.length > 0 ? found[0] : undefined;

if (!markdown) {
  throw createError({
    statusCode: 404,
    fatal: true,
  });
}

const title = markdown?.title ?? id;
const description = markdown?.description ?? id;
</script>
