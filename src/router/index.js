import Vue from 'vue'
import Router from 'vue-router'
import FooterNav from '@/components/footerNav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'footerNav',
      component: FooterNav
    }
  ]
})
