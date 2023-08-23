<template>
  <div>
    <h1 class="text-3xl font-bold pl-1 py-2 bg-emerald-600">
      Check lists
    </h1>
    <!-- TODO: add search on check list name -->
    <template v-for="checkList in checkLists.checkLists" :key="checkList.id">
      <CheckListAsItem :id="checkList.id" :title="checkList.name" :collaborators="checkList.collaborators" />
    </template>
  </div>
</template>

<script setup lang="ts">
import checkLists from '@/assets/json/checkListList.json'
</script>