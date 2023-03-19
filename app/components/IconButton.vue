<template>
  <OptionalLink :to="to"><img class="logo-img" :width="size" :height="size" :src="src" /></OptionalLink>
</template>

<script setup lang="ts">
interface IProps {
  to?: string;
  size?: number | string;
  src?: string;
}

defineProps<IProps>();
</script>

<style>
.logo-img:hover {
  filter: invert(0.3);
}
</style>
