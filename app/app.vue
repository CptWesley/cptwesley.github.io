<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-leave-to {
  opacity: 0;
  transform: translate(0, -32px);
}

.page-enter-from {
  opacity: 0;
  transform: translate(0, 32px);
}
</style>
