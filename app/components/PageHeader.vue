<template>
  <v-app-bar :elevation="2" title="bar">
    <v-spacer></v-spacer>
    <v-btn @click="$emit('toggleTheme')">
      <v-icon
        :icon="theme === 'light' ? 'fa:fa-moon fas' : 'mdi:mdi-weather-sunny'"
        size="32"
      />
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    theme: {
      required: true,
      type: String,
    },
  },
});
</script>
