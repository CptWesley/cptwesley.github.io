<template>
  <v-container fluid class="item-container">
    <v-row>
      <PageItemSide>
        <slot name="left" />
      </PageItemSide>

      <PageItemCenter>
        <slot name="center" />
      </PageItemCenter>

      <PageItemSide>
        <slot name="right" />
      </PageItemSide>
    </v-row>
    <v-row>
      <PageItemSide>
        <slot name="bleft" />
      </PageItemSide>

      <PageItemCenter>
        <slot name="bcenter" />
      </PageItemCenter>

      <PageItemSide>
        <slot name="bright" />
      </PageItemSide>
    </v-row>
  </v-container>
</template>

<style>
.item-container {
  padding-left: 4%;
  padding-right: 4%;
}
</style>
