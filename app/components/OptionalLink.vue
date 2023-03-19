<template>
  <NuxtLink v-if="to" :to="to">
    <slot />
  </NuxtLink>
  <template v-else>
    <slot />
  </template>
</template>

<script setup lang="ts">
interface IProps {
  to?: string;
}

defineProps<IProps>();
</script>
