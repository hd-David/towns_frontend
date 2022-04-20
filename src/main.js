import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

axios
  .get('https://david.darwinist.io/proxy/5000/town')
  .then(response => (this.info = response.data.bpi))