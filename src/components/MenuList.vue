<template>
  <ul class="d-flex flex-sm-wrap">
    <li v-for="item in list" :key="item.name" class="ma-4">
      <v-card
        :subtitle="item.name"
        :text="`$${item.price}`"
        min-width="400"
        variant="tonal"
        class="pa-5"
        style="background-color: wheat"
      >
        <template #default>
          <div class="d-flex align-center justify-center">
            <Cup :cup="item" />
          </div>
        </template>
      </v-card>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useCoffeeListStore } from '@/store/coffeeListStore'
import { computed } from 'vue'
import Cup from './Cup.vue'

const coffeeListStore = useCoffeeListStore()
const list = computed(() =>
  coffeeListStore.coffeeList.filter((v) => !v.discounted)
)
</script>
<style scoped></style>
