<script setup>
// Définition de l'événement qui peut être déclenché dans ce composant
const emit = defineEmits(['randomColor'])
</script>

<template>
  <section>
    <button @click="$emit('randomColor')">Couleur surprise</button>
    <!-- Au clic 👆 l'événement est déclenché -->
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  background-color: white;
  padding: 20px 40px;
  border-radius: 40px;
  border: 3px solid rgb(98, 206, 233);
  color: rgb(98, 206, 233);
  font-size: 30px;
}
</style>
