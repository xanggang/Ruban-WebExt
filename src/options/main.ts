import { createApp } from 'vue'
import App from './Options.vue'
import '../styles'
import { installAntdComp } from './antdComp'

const app = createApp(App)
installAntdComp(app)
app.mount('#app')
