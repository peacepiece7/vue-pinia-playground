<template>
  <div class="cover" tabindex="0">
    <div class="cup">
      <div
        class="cup-body"
        v-for="r in cup.recipe"
        :class="r.name"
        :style="{ height: `${r.quantity}%` }"
        @click="addCoffee(cup)"
      >
        {{ r.name }}
        {{ r.quantity }}%
      </div>
    </div>
    <div class="cup-handle"></div>
  </div>
</template>
<script setup lang="ts">
import { useCoffeeListStore } from '@/store/coffeeListStore'
import type { Coffee } from '@/types/coffee'
defineProps<{ cup: Coffee }>()
const { addCoffee } = useCoffeeListStore()
</script>
<style scoped lang="css">
.cover {
  display: flex;
  align-items: center;
  will-change: transform;
  transition: transform 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
}
.cover:hover {
  transform: rotate(-5deg);
}
.cover:active .cup {
  border: 5px solid #e4c605;
  outline: none;
}
.cover:active .cup-handle {
  border: 5px solid #e4c605;
  border-left: none;
}

.cup {
  display: flex;
  flex-direction: column-reverse;
  width: 150px;
  height: 200px;
  border: 5px solid black;
  border-radius: 0 0 15% 15% / 0 0 5% 5%;
  overflow: hidden;
  background-color: white;
}

.cup-body {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
}

.cup-handle {
  width: 40px;
  height: 80px;
  border: 5px solid black;
  border-left: none;
  border-radius: 0 20px 20px 0;
}

.espresso {
  background-color: rgb(222, 98, 38);
}

.milk.foam {
  background-color: rgb(198, 218, 181);
}

.steamed.milk {
  background-color: rgb(178, 187, 140);
}

.steamed.cream {
  background-color: rgb(239, 238, 217);
}

.chocolate.syrup {
  background-color: rgb(154, 128, 69);
}

.whipped.cream {
  background-color: rgb(183, 221, 220);
}

.water {
  background-color: rgb(127, 195, 179);
}
</style>
