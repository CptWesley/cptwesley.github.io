<template>
  <v-container fluid>
    <v-row>
      <PageItem :size="2" min-height="10vh">
        <slot name="left" />
      </PageItem>

      <PageItem :size="8" min-height="70vh">
        <slot name="center" />
      </PageItem>

      <PageItem :size="2" min-height="10vh">
        <slot name="right" />
      </PageItem>
    </v-row>
    <v-row>
      <PageItem :size="2" min-height="10vh">
        <slot name="bleft" />
      </PageItem>

      <PageItem :size="8" min-height="10vh">
        <slot name="bcenter" />
      </PageItem>

      <PageItem :size="2" min-height="10vh">
        <slot name="bright" />
      </PageItem>
    </v-row>
  </v-container>
</template>
