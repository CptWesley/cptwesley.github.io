<template>
  <div>
    <ContentRenderer :value="data" />
  </div>
</template>

<script setup lang="ts">
const data = await queryContent("/helloworld").findOne();
</script>
