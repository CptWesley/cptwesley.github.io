<template>
  <v-col v-if="hasContent()" cols="12" :xs="size" :sm="size" :md="size" :lg="size" :xl="size" class="d-flex flex-column align-center">
    <v-sheet rounded="lg" class="tw-prose tw-prose-lg page-item prose-a:tw-no-underline hover:prose-a:tw-underline" :min-height="minHeight">
      <slot />
    </v-sheet>
  </v-col>
  <v-spacer v-else></v-spacer>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

interface IProps {
  size: number;
  minHeight: string;
}

defineProps<IProps>();

function hasContent(): boolean {
  const slots = useSlots();

  if (!slots.default) {
    return false;
  }

  const node = slots.default();

  if (node.length <= 0) {
    return false;
  }

  const children = node[0].children;
  if (!children) {
    return false;
  }
  const childCount = <number>children.length;
  return childCount !== 0;
}
</script>

<style>
.page-item {
  padding: 1.2rem;
  width: inherit;
}
</style>
