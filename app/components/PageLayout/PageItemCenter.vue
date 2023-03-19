<template>
  <PageItem :xl="6" :lg="6" :md="6" class="page-item-center">
    <slot />
  </PageItem>
</template>

<style>
.page-item-center > .page-item {
  height: -webkit-fill-available;
}
</style>
