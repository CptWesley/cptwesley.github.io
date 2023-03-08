<template>
  <div>this is the index!</div>
  <ContentRenderer :value="data" />
</template>

<script setup lang="ts">
const { data } = await useAsyncData("hello", () =>
  queryContent("/helloworld").findOne()
);
</script>
