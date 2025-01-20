<template>
  <div>
    <!-- 로딩 상태 표시 -->
    <div v-if="coffeeListStore.isLoading">Loading...</div>

    <!-- 에러 상태 표시 -->
    <div v-else-if="coffeeListStore.error">
      Error: {{ coffeeListStore.error.message }}
    </div>

    <!-- 데이터 표시 -->
    <div v-else>
      <!-- 여기에 coffeeList.list를 사용하여 데이터를 표시하는 로직 추가 -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCoffeeListStore } from '../store/coffeeListStore' // 경로는 실제 위치에 맞게 수정해주세요

// store 초기화
const coffeeListStore = useCoffeeListStore()

// 에러 처리를 포함한 데이터 fetch
onMounted(async () => {
  try {
    await coffeeListStore.fetch()
  } catch (error) {
    console.error('Failed to fetch coffee list:', error)
  }
})
</script>

<style scoped></style>
