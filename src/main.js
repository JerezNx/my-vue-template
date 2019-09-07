import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//一、ydui 配置
// 1.按需引入方式
// 1.1
// import 'vue-ydui/dist/ydui.base.css';
// 1.2引入需要的组件：
// import {ActionSheet} from 'vue-ydui/dist/lib.rem/actionsheet';
/* 使用px：import {ActionSheet} from 'vue-ydui/dist/lib.px/actionsheet'; */
// 1.3注册组件
// Vue.component(ActionSheet.name, ActionSheet);

// 2.全局引入
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
Vue.use(YDUI);

//二、mint-ui 配置

// 1.按需引入方式
// 1.1引入需要的组件
// import { Button} from 'mint-ui'
// 1.2注册组件
// Vue.component(Button.name, Button)
// 2.全局引入
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(Mint);

//三、vux配置
// vux由于体积原因，没有提供全局引入的功能

// import { Group, Cell } from 'vux'
// vue-cli3在main.js中引入就会导致无法正确按需引入，从而导致打包体积过大...
// Vue.component('group', Group)
// Vue.component(Cell.name, Cell)

// 四、全局jquery配置
import $ from 'jquery'
window.$ = $;
window.jQuery = $;
// import jSignature from 'jsignature'
// Vue.prototype.$ = $;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
