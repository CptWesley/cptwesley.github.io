<template>
  <div>Post {{ id }}</div>
</template>

<script setup>
import { useRoute } from "#app";

const route = useRoute();
const id = route.params.id;
</script>
