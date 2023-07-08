import './style.css';
import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';
import App from './App.vue';

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

const app = new Vue({
  pinia,
  render: (h) => h(App),
});

app.$mount('#app');



