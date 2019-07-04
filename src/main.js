// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

//上面为项目初始内容

/*//引入IVIEW组件
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
//引入vue-easytable
import 'vue-easytable/libs/themes-base/index.css'
import {VTable,VPagination} from 'vue-easytable'
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)*/
//引入axios
import axios from 'axios'
Vue.prototype.$ajax = axios


//引入font-awesome
import 'font-awesome/css/font-awesome.min.css'
//引入ElementUI
import ElementUI from 'element-ui'
//引入自定义主题
import './assets/theme/element-#0B2644/index.css'
Vue.use(ElementUI)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
