import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import store from './store';
import './registerServiceWorker';

new Vue({
	i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
