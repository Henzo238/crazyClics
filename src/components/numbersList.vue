<script setup>
import { numbersList } from '/src/assets/data.js'
// Définition de l'événement qui peut être déclenché dans ce composant
const emit = defineEmits(['convertToCm'])
</script>

<template>
  <div>
    <!-- Boucle sur le tableau de nombres pour afficher un bouton par nombre -->
    <button
      v-for="number in numbersList"
      :key="number"
      @click="$emit('convertToCm', number)"
    >
      <!-- 👆 Au clic l'événement est déclenché -->
      {{ number }} km
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
  background-color: #c079e3;
  padding: 20px 30px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
}
</style>
