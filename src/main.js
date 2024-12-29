import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* Import de 'fontawesome core' */
import { library } from '@fortawesome/fontawesome-svg-core'

/* Import du composant 'vue-fontawesome' */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Import des icônes de type 'brand' */
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

/* Ajout de ces icônes à la bibliothèque du projet */
library.add(faGithub, faLinkedin, faInstagram)

createApp(App).mount('#app')
