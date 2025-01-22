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
  <aside v-show="hasCartItems">
    <Payment />
  </aside>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import MenuList from '@/components/MenuList.vue'
import Payment from '@/components/Payment.vue'
import { useCoffeeListStore } from '../store/coffeeListStore'
import { useCartStore } from '@/store/cartStore'

const coffeeListStore = useCoffeeListStore()
const cartStore = useCartStore()
const hasCartItems = computed(() => cartStore.cartList().length > 0)

onMounted(async () => {
  await coffeeListStore.fetch()
})
</script>

<style scoped></style>
