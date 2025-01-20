import type { Coffee } from '@/types/coffee'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import list from '@/assets/list.json'

export const useCoffeeListStore = defineStore('coffeeList', () => {
  const coffeeList = ref<Coffee[]>([])
  const isLoading = ref(false)
  const error = ref<Error | null>(null)

  // 게터
  const isPending = computed(() => isLoading.value)
  const isSuccess = computed(
    () => !isLoading.value && !error.value && coffeeList.value.length > 0
  )
  const isFailure = computed(() => !isLoading.value && error.value !== null)

  // 액션
  async function fetch() {
    isLoading.value = true
    error.value = null
    try {
      await new Promise((res) => setTimeout(() => res(null), 1500))
      coffeeList.value = list
    } catch (err) {
      if (err instanceof Error) {
        error.value = err
      } else {
        error.value = new Error('Unknown error occurred')
      }
    } finally {
      isLoading.value = false
    }
  }

  return {
    // 상태
    coffeeList,
    isLoading,
    error,
    // 게터
    isPending,
    isSuccess,
    isFailure,
    // 액션
    fetch,
  }
})
