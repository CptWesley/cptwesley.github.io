<template>
  <v-container>
    <v-row>
      <v-col v-if="$slots.left" cols="12" sm="2">
        <v-sheet rounded="lg" class="page-item" min-height="10vh">
          <slot name="left" />
        </v-sheet>
      </v-col>
      <v-spacer v-else></v-spacer>

      <v-col cols="12" sm="8">
        <v-sheet rounded="lg" class="page-item" min-height="70vh">
          <slot name="center" />
        </v-sheet>
      </v-col>

      <v-col v-if="$slots.right" cols="12" sm="2">
        <v-sheet rounded="lg" class="page-item" min-height="10vh">
          <slot name="right" />
        </v-sheet>
      </v-col>
      <v-spacer v-else></v-spacer>
    </v-row>
    <v-row>
      <v-col v-if="$slots.bleft" cols="12" sm="2">
        <v-sheet rounded="lg" class="page-item" min-height="10vh">
          <slot name="bleft" />
        </v-sheet>
      </v-col>
      <v-spacer v-else></v-spacer>

      <v-col v-if="$slots.bcenter" cols="12" sm="8">
        <v-sheet rounded="lg" class="page-item" min-height="10vh">
          <slot name="bcenter" />
        </v-sheet>
      </v-col>
      <v-spacer v-else></v-spacer>

      <v-col v-if="$slots.bright" cols="12" sm="2">
        <v-sheet rounded="lg" class="page-item" min-height="10vh">
          <slot name="bright" />
        </v-sheet>
      </v-col>
      <v-spacer v-else></v-spacer>
    </v-row>
  </v-container>
</template>

<style>
.page-item {
  padding: 1.2rem;
}
</style>
