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
      const cartlist = list.value.map((item) => {
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
      return cartlist
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
    removeCartItem: (coffee: CartItem) => {
      const idx = list.value.findIndex((c) => c.name == coffee.name)
      if (idx !== -1) {
        list.value.splice(idx, 1)
      }
    },
  }

  return {
    ...getters,
    ...actions,
  }
})
