import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/ProductDisplay'
import Carts from '@/components/Cart'
import Categories from '@/components/Categories'
import ProductDetails from  '@/components/ProductDetails'
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
    }
  ]
})
