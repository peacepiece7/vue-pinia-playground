import type { Coffee } from '@/types/coffee'
import { defineStore } from 'pinia'
import list from '@/assets/list.json'

export const coffeeListStore = defineStore('coffeeListStore', {
  state: () => ({
    list: [] as Coffee[],
    isLoading: false,
    error: null as Error | null,
  }),

  getters: {
    isPending: (state) => state.isLoading,
    isSuccess: (state) =>
      !state.isLoading && !state.error && state.list.length > 0,
    isFailure: (state) => !state.isLoading && state.error !== null,
  },

  actions: {
    async fetch() {
      this.isLoading = true
      this.error = null
      try {
        await new Promise((res) => setTimeout(() => res(null), 1500))
        this.list = list
      } catch (err) {
        if (err instanceof Error) {
          this.error = err
        } else {
          this.error = new Error('Unknown error occurred')
        }
      } finally {
        this.isLoading = false
      }
    },
  },
})
