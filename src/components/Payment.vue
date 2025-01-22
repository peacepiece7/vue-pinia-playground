<template>
  <div class="cover">
    <div class="total" @mouseenter="isShowDetail = true">
      TOTAL:
      {{
        cartStore.total().toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })
      }}
    </div>
    <ul v-if="isShowDetail">
      <li v-for="list in cartStore.cartList()">
        {{ list.name }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useCartStore } from '@/store/cartStore'
import { ref } from 'vue'
const cartStore = useCartStore()
const isShowDetail = ref(false)
</script>
<style scoped lang="css">
.cover {
  position: fixed;
  right: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100px;
  background-color: wheat;
  border: 2px solid black;
  z-index: 200;
}
.total {
  font-size: 2rem;
}
</style>
