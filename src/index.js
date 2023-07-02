import './style.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useCarsStore } from '@/stores/cars';
import { App } from 'vue';

const pinia = createPinia();
// const store = useStore(pinia);


whenDataLoaded.then(data => {
   // replace the store's state without our data
  const app = createApp(App);
  app.use(pinia)
  app.mount('#vue-test');
  const store = useCarsStore();
  store.$state = data;
  console.log('working');
});




