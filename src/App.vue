<script setup>
import Colors from './components/colorsList.vue'
import Words from './components/wordsList.vue'
import Numbers from './components/numbersList.vue'

// Import de la liste de couleur
import { colorsList } from './assets/data'

import { ref } from 'vue'
const result = ref('')

const correctTheWord = word => {
  const firstLetter = word[0].toUpperCase()
  const otherLetters = word.slice(1).toLowerCase()
  result.value = firstLetter + otherLetters
}

const randomColor = () => {
  // Génère un nombre aléatoire entre 0 et 9 pour servir d'index
  const randomIndex = Math.floor(Math.random() * colorsList.length)

  // Utilisation de l'index pour récupérer une valeur du tableau et la transmettre comme nouvelle valeur à la 'ref'
  result.value = colorsList[randomIndex]
}

const convertToCm = value => {
  result.value = `${value} km = ${value * 100000} cm`
}
</script>

<template>
  <main>
    <h1>Crazy Clics V2</h1>
    <section>
      <div>
        <Words @correctTheWord="correctTheWord" />
        <Colors @randomColor="randomColor" />
        <Numbers @convertToCm="convertToCm" />
      </div>
      <div>
        <h2>Le resultat</h2>
        <p>{{ result }}</p>
      </div>
    </section>
  </main>
</template>
<style scoped>
section {
  display: flex;
  flex: 1;
}
section > div:first-child {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 40px 20px;
}
section > div:last-child {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 500px;
  align-items: center;
}
p {
  border: 4px double black;
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
