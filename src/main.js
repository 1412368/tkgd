// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex';

Vue.use(BootstrapVue)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#navbar',
//   router,
//   template: '<NavBar/>',
//   components: {NavBar}
// })
// Vue.component('NavBar', {
//   // options
//   template: '<NavBar/>'
// })

const store = new Vuex.Store({
    state: {
      cartTotal: 0,
      cart: {},
      sale: false,
      products: [
        {
          name: 'Khaki Suede Polish Work Boots',
          price: 149.99,
          category: 'women',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'1',
        },
        {
          name: 'Camo Fang Backpack Jungle',
          price: 39.99,
          category: 'women',
          sale: false,
          article: 'jacket',
          img: 'main.jpg',
          index:'2',
        },
        {
          name: 'Parka and Quilted Liner Jacket',
          price: 49.99,
          category: 'men',
          sale: true,
          article: 'jacket',
          img: 'main.jpg',
          index:'3',
        },
        {
          name: 'Cotton Black Cap',
          price: 12.99,
          category: 'men',
          sale: true,
          article: 'hats',
          img: 'main.jpg',
          index:'4',
        },
        {
          name: 'Knit Sweater with Zips',
          price: 29.99,
          category: 'women',
          sale: false,
          article: 'phone',
          img: 'main.jpg',
          index:'5',
        },
        {
          name: 'Long Linen-blend Shirt',
          price: 18.99,
          category: 'men',
          sale: false,
          article: 'cloth',
          img: 'main.jpg',
          index:'6',
        },
        {
          name: 'Knit Orange Sweater',
          price: 28.99,
          category: 'men',
          sale: false,
          article: 'sweater',
          img: 'main.jpg',
          index:'7',
        },
        {
          name: 'Cotton Band-collar Blouse',
          price: 49.99,
          category: 'men',
          sale: false,
          article: 'cloth',
          img: 'main.jpg',
          index:'8',
        },
        {
          name: 'Camo Fang Backpack Jungle',
          price: 59.99,
          category: 'women',
          sale: true,
          article: 'jacket',
          img: 'main.jpg',
          index:'9',
        },
        {
          name: 'Golden Pilot Jacket',
          price: 129.99,
          category: 'women',
          sale: false,
          article: 'cloth',
          img: 'main.jpg',
          index:'10',
        },
        {
          name: 'Spotted Patterned Sweater',
          price: 80.99,
          category: 'women',
          sale: false,
          article: 'jacket',
          img: 'main.jpg',
          index:'11',
        },
        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'12',
        },
        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'13',
        },
        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'14',
        },
        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'15',
        },
        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'16',
        },
        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'17',
        },
        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'18',
        },

        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'19',
        },

        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'20',
        },

        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'21',
        },

        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'22',
        },

        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'23',
        },

        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'24',
        },

        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'25',
        },


      ]
    },
    getters: {
      women: state => filter(state.products, 'category', 'women'),
      men: state => filter(state.products, 'category', 'men'),
      sale: state => filter(state.products, 'sale', true)
    },
    mutations: {
      switchSale: state => {
        state.sale = !state.sale;
      },
      clearCartCount: state => {
        state.cartTotal = 0;
      },
      clearCartContents: state => {
        state.cart = {};
      },
      addItem: (state, item) => {
        state.cartTotal++;
        if (item.name in state.cart) {
          state.cart[item.name].count++;
        } else {
          let stateItem = Object.assign({}, item);
          stateItem.count = 1;
          state.cart[item.name] = stateItem;
        }
      }
    }
});

//helper
const filter = (array, key, value) => array.filter(item => item[key] === value);

new Vue({
  el: '#app',
  components: {
    App,
  },
  store,
  router,
  render: h => h('app'),
});
