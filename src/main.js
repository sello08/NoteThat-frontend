import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'ant-design-vue/dist/antd.css';
import Antd, { Carousel } from 'ant-design-vue';



createApp(App).use(router).use(store).use(Antd).use(Carousel).mount('#app')
