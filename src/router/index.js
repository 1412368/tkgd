import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/ProductDisplay'
import Carts from '@/components/Cart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      props: ['products']
    },
    {
      path:'/cart',
      name: 'carts',
      component: Carts,
    }
  ]
})
