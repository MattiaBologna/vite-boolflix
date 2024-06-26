import { createApp } from 'vue'
import App from './App.vue'

// import font awesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import icons 
import {
    faStar
} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faStarReg, faMagnifyingGlass)

const app = createApp(App)

// registriamo il componente globalmente 
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
