<template>
  <div v-if="markdown">
    <ContentRenderer :value="markdown" />
  </div>
  <div v-else>NOT FOUND</div>
</template>

<script setup lang="ts">
import { useRoute } from "#app";
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

const route = useRoute();
const id = route.params.id;
const found = await queryContent(`posts/${id}`).find();
const markdown: ParsedContent | undefined =
  found.length > 0 ? found[0] : undefined;
</script>
