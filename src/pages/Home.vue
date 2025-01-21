<template>
  <section>
    <template v-if="coffeeListStore.isLoading">Loading...</template>
    <template v-else-if="coffeeListStore.error">
      Error: {{ coffeeListStore.error.message }}
    </template>
    <template v-else>
      <MenuList />
    </template>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCoffeeListStore } from '../store/coffeeListStore' // 경로는 실제 위치에 맞게 수정해주세요
import MenuList from '@/components/MenuList.vue'

const coffeeListStore = useCoffeeListStore()

// 에러 처리를 포함한 데이터 fetch
onMounted(async () => {
  await coffeeListStore.fetch()
})
</script>

<style scoped></style>
