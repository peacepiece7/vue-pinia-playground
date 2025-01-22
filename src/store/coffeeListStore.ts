import type { Coffee } from '@/types/coffee'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import list from '@/assets/list.json'

export const useCoffeeListStore = defineStore('coffeeList', () => {
  const coffeeList = ref<Coffee[]>([])
  const isLoading = ref(false)
  const error = ref<Error | null>(null)

  const isPending = computed(() => isLoading.value)
  const isSuccess = computed(
    () => !isLoading.value && !error.value && coffeeList.value.length > 0
  )
  const isFailure = computed(() => !isLoading.value && error.value !== null)

  const mutations = {
    setCoffeeList: (list: Coffee[]) => {
      coffeeList.value = list
    },
    setLoading: (status: boolean) => {
      isLoading.value = status
    },
    setError: (err: Error | null) => {
      error.value = err
    },
  }

  const actions = {
    addCoffee: (coffee: Coffee) => {
      coffeeList.value.push(coffee)
    },
    removeCoffee: (coffee: Coffee) => {
      const idx = coffeeList.value.findIndex((c) => c.name == coffee.name)
      if (idx !== -1) {
        coffeeList.value.splice(idx, 1)
      }
    },
    fetch: async () => {
      if (isSuccess.value) return
      mutations.setLoading(true)
      mutations.setError(null)
      try {
        await new Promise((res) => setTimeout(() => res(null), 1500))
        mutations.setCoffeeList(list)
      } catch (err) {
        mutations.setError(
          err instanceof Error ? err : new Error('Unknown error occurred')
        )
      } finally {
        mutations.setLoading(false)
      }
    },
  }

  return {
    // 상태
    coffeeList,
    isLoading,
    error,
    isPending,
    isSuccess,
    isFailure,
    ...mutations,
    ...actions,
  }
})
