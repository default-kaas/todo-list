<template>
  <div class="mx-1 my-2">
    <!-- TODO: figure out why tailwind styling does not apply on NuxtLink -->
    <NuxtLink :to="`/check-list/${id}`">
      <div class="px-2 py-3 border border-gray-300 shadow-md rounded">
        <h2 class="font-bold">
          {{ title }}
        </h2>
        <ul v-if="collaborators.length > 0" class="flex ml-1 font-medium text-emerald-500">
          <li v-for="collaborator in collaborators" class="mx-1">
            @{{ collaborator }}
          </li>
        </ul>
        <div class="ml-2 font-medium" v-else>-</div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  id: number,
  title: string
  collaborators: string[]
}>(), {})
</script>