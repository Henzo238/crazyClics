<script setup>
import { wordsList } from '/src/assets/data.js'
const emit = defineEmits(['correctTheWord'])
</script>

<template>
  <div>
    <button
      v-for="word in wordsList"
      :key="word"
      @click="$emit('correctTheWord', word)"
    >
      {{ word }}
    </button>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
button {
  background-color: #70e9bf;
  padding: 20px 30px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
}
</style>
