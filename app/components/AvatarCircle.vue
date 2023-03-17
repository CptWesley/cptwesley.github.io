<template>
  <NuxtLink v-if="to" :to="to">
    <v-avatar :color="color" :size="size" class="tw-not-prose">
      <v-img v-if="url" :src="url" :alt="alt"></v-img>
      <span v-else class="text-h2">{{ letters }}</span>
    </v-avatar>
  </NuxtLink>
  <template v-else>
    <v-avatar :color="color" :size="size" class="tw-not-prose">
      <v-img v-if="url" :src="url" :alt="alt"></v-img>
      <span v-else class="text-h2">{{ letters }}</span>
    </v-avatar>
  </template>
</template>

<script setup lang="ts">
interface IProps {
  alt?: string;
  url?: string;
  color?: string;
  letters?: string;
  size?: string | number;
  to?: string | number;
}

defineProps<IProps>();
</script>
