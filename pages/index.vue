<template>
  <div>
    <h1 class="text-3xl font-bold underline bg-green-700">
      Check lists:
    </h1>
    <template v-for="checkList in checkLists.checkLists" :key="checkList.id">
      <CheckListAsItem :id="checkList.id" :title="checkList.name" />
    </template>
  </div>
</template>

<script setup lang="ts">
import checkLists from '@/assets/json/checkListList.json'
</script>