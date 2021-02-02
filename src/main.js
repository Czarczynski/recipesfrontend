import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faCloudMeatball, faBook, faArrowLeft, faStar, faSeedling, faEgg, faBreadSlice, faGlassWhiskey, faWallet, faBalanceScale, faAt, faUser, faLock, faUnlock, faTimes, faClock} from "@fortawesome/free-solid-svg-icons"; //tu dodajemy ikony
import {faStar as faFarStar} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCookies from "vue-cookies";
import * as VueSpinnersCss from "vue-spinners-css";
import store from '@/store/store.js'
Vue.use(VueSpinnersCss);
Vue.use(VueCookies);

Vue.config.productionTip = false;
library.add(faSearch,faCloudMeatball, faBook, faArrowLeft, faStar, faFarStar, faSeedling, faEgg, faBreadSlice, faGlassWhiskey, faWallet, faBalanceScale, faAt, faUser, faLock, faUnlock, faTimes, faClock)

Vue.component('fa-icons', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h=>h(App),
}).$mount('#app')
