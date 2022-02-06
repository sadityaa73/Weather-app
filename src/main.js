import { createApp } from 'vue'
import WeatherApp from "./components/WeatherApp.vue"
import App from './App.vue'

const app = createApp(App);
app.component('WeatherApp', WeatherApp)

createApp(App).mount('#app')