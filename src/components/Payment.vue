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
    <ul v-if="isShowDetail" class="detail" @mouseleave="isShowDetail = false">
      <li v-for="item in cartStore.cartList()">
        <div class="d-flex justify-space-between">
          <div class="pa-5 name">{{ item.name }}</div>
          <div class="pa-5 price">${{ item.totalPrice }}</div>
          <div class="pa-5 quantity">x {{ item.quantity }}</div>
          <div class="pa-5">
            <v-btn
              color="success"
              size="small"
              class="mr-5"
              @click="cartStore.addToCart(item)"
              >+
            </v-btn>
            <v-btn
              color="error"
              size="small"
              @click="cartStore.removeCartItem(item)"
              >-
            </v-btn>
          </div>
        </div>
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
.detail {
  position: absolute;
  width: 500px;
  height: 500px;
  overflow-y: scroll;
  bottom: 150px;
  left: -300px;
  background-color: beige;
  border: 2px solid black;
}
.name {
  max-width: 200px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price {
  max-width: 50px;
  width: 100%;
}
</style>
