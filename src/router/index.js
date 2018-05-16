import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/ProductDisplay'
import Carts from '@/components/Cart'
import Categories from '@/components/Categories'
import ProductDetails from  '@/components/ProductDetails'
import login from '@/components/login'
import AccountInfo from '@/components/AccountInfo'

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
    },
    {
      path:'/categories/:category/:currentPage',
      name: 'category',
      component: Categories,
    },
    {
      path:'/product/:id',
      name: 'product',
      component: ProductDetails,
    },
    {
      path:'/login',
      name:'login',
      component: login
    },
    {
      path:'/account',
      name:'account',
      component: AccountInfo
    }
  ]
})
