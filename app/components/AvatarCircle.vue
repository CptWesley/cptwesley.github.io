<template>
  <v-avatar :color="color" :size="size">
    <v-img v-if="url" :src="url" :alt="alt"></v-img>
    <span v-else class="text-h2">{{ letters }}</span>
  </v-avatar>
</template>

<script setup lang="ts">
interface IProps {
  alt?: string;
  url?: string;
  color?: string;
  letters?: string;
  size?: string | number;
}

defineProps<IProps>();
</script>
