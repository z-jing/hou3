import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './components'
import './assets/styles/layout.scss';
import axios from './service/axios';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.use(iView);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
