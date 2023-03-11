<template>
  <NuxtLayout>
    <div>
      <Head>
        <Title>{{ statusCode }} - {{ fullMessage }}</Title>
      </Head>
      <div>Kapot</div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const error = useError().value;
const statusCode = error && "statusCode" in error ? error.statusCode : 500;
const statusMessage = error && "statusMessage" in error ? error.statusMessage : undefined;
const message = error?.message ?? "Error";
const fullMessage = statusMessage ?? message;
</script>
