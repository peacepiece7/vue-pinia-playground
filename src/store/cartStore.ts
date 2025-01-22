import type { CartItem } from '@/types/CartItem'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCoffeeListStore } from './coffeeListStore'

export const useCartStore = defineStore('cartStore', () => {
  const coffeeListStore = useCoffeeListStore()
  const list = ref<{ name: string; quantity: number }[]>([])

  const getters = {
    total: (): number => {
      return list.value
        .map((item) => {
          const matched = coffeeListStore.coffeeList.find(
            (val) => val.name === item.name
          )
          return (matched?.price || 0) * item.quantity
        })
        .reduce((acc, cur) => acc + cur, 0)
    },
    cartList: (): CartItem[] => {
      return list.value
        .map((item) => {
          const { price, ...props } = coffeeListStore.coffeeList.find(
            (val) => val.name == item.name
          )!
          return {
            ...props,
            unitPrice: price,
            totalPrice: price * item.quantity,
            quantity: item.quantity,
          }
        })
        .sort((a, b) => a.name.localeCompare(b.name))
    },
  }

  const actions = {
    addToCart: (item: { name: string }) => {
      const { quantity = 0 } =
        list.value.find((v) => v.name === item.name) || {}
      list.value = [
        ...list.value.filter((val) => val.name != item.name),
        { ...item, quantity: quantity + 1 },
      ]
    },
    removeCartItem: (item: { name: string }) => {
      list.value = list.value
        .map((val) => ({
          ...val,
          quantity:
            val.name == item.name
              ? Math.max(val.quantity - 1, 0)
              : val.quantity,
        }))
        .filter((val) => val.quantity)
    },
  }

  return {
    ...getters,
    ...actions,
  }
})
