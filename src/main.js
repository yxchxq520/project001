import Vue from 'vue'
import App from './App'
import router from './router'
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css'; 

Vue.config.productionTip = false

// 处理移动端延迟300ms
// npm i --save -D fastclick
import fastclick from "fastclick"
fastclick.attach(document.body)


Vue.use(MintUi);





new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
