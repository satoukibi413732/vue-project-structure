import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import api from './http/index';
// 引入全局配置文件
import Config from '../public/config/config';
// 引入公共工具类
import Tools from './utils/tools';
//引入mock数据
// import './mock/mock';
//样式重置
import './styles/reset.scss';
// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//项目通用插件
//通用scss
import './styles/common.scss';
//改写第三方UI库杨样式
import './styles/rewrite.scss';
// import 'amfe-flexible';

document.title = Config.ProjectName;

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.prototype.$api = api;
Vue.prototype.$Config = Config;
Vue.prototype.$Tools = Tools;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
