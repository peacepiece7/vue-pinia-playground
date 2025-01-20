<template>
    <div v-for="item in list" :key="item.name">
        <p>
            {{item.name}}
        </p>
    </div>
</template>

<script setup lang="ts">
import type { Coffee } from '@/types/coffee'

defineProps<{
  list: Coffee[]
}>()

</script>
<style scoped></style>
