import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faBan, faRetweet, faPalette } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithubSquare, faLinkedin)
library.add(faBars, faBan, faRetweet, faPalette)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

export const eventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
