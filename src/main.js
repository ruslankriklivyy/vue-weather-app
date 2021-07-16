import { createApp } from 'vue';
import vueDebounce from 'vue-debounce';
import App from './App.vue';
import store from './store';

createApp(App)
  .use(vueDebounce, {
    listenTo: 'input',
  })
  .use(store)
  .mount('#app');
