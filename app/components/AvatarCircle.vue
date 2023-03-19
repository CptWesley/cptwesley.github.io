<template>
  <OptionalLink :to="to">
    <v-avatar :color="color" :size="size" class="tw-not-prose">
      <v-img v-if="url" :src="url" :alt="alt" />
      <span v-else class="text-h2">{{ letters }}</span>
    </v-avatar>
  </OptionalLink>
</template>

<script setup lang="ts">
interface IProps {
  alt?: string;
  url?: string;
  color?: string;
  letters?: string;
  size?: string | number;
  to?: string;
}

defineProps<IProps>();
</script>
