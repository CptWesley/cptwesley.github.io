<template>
  <OptionalLink :to="to" class="tw-not-prose">
    <img class="logo-img" :width="size" :height="size" :src="src" :title="title" :alt="title" />
  </OptionalLink>
</template>

<script setup lang="ts">
interface IProps {
  to?: string;
  size?: number | string;
  src?: string;
  title?: string;
}

defineProps<IProps>();
</script>

<style>
.logo-img:hover {
  filter: invert(0.3);
}
</style>
