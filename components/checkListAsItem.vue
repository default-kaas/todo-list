<template>
  <NuxtLink :to="`/check-list/${id}`">
    <h2>
      {{ title }}
    </h2>
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  id: number,
  title: string
}>(), {})
</script>