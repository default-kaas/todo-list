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
const checkLists = {
  checkLists: [
    {
      id: 1,
      name: 'test1',
      items: [{
        id: 1,
        checked: false,
        text: '',
        screenshotIds: [],
        links: ''
      }]
    },
    {
      id: 2,
      name: 'test2',
      items: [{
        id: 1,
        checked: false,
        text: '',
        screenshotIds: [],
        links: ''
      }]
    },
    {
      id: 3,
      name: 'test3',
      items: [{
        id: 1,
        checked: false,
        text: '',
        screenshotIds: [],
        links: ''
      }]
    },
  ]
}
</script>