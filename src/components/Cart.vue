<template>
  <div class="capsule cart">

    <div v-if="cartTotal > 0">
      <h1>Cart</h1>
      <div class="cartitems"
        v-for="item in cart"
        :key="item">
        <div class="carttext">
          <h4>{{ item.name }}</h4>
          <p>{{ item.price }} x {{ item.count }}</p>
          <p>Total for this item: <strong>{{ item.price * item.count }}</strong></p>
        </div>
        <img class="cartimg" :src="`/assets/sp/${item.index}/${item.img}`" :alt="`Image of ${item.name}`">
      </div>
      <div class="total">
        <h3>Total: {{ total }}$</h3>
      </div>
      <app-checkout :total="total" @successSubmit="success = true"></app-checkout>
    </div>

    <div v-else-if="cartTotal === 0 && success === false" class="empty">
      <h1>Cart</h1>
      <h3>Your cart is empty.</h3>
      <router-link exact to="/"><button>Return to shopping</button></router-link>
    </div>

    <div v-else>
      <app-success @restartCart="success = false"/>
      <h2>Success!</h2>
      <p>Your order has been processed, it will be delivered shortly.</p>
      <b-button size="sm" variant="primary" @click="Buy">Back to shopping</b-button>
    </div>

  </div>
</template>

<script>
import AppCheckout from './../components/AppCheckout.vue';

export default {
  data() {
    return {
      success: false
    };
  },
  components: {
    AppCheckout,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.state.cartTotal;
    },
    total() { 
      var sum=0;
      for (var prop in this.cart) {
          if (!this.cart.hasOwnProperty(prop)) {
              //The current property is not a direct property of p
              continue;
          }
          console.log(prop);
          console.log(this.cart[prop]);
          //Do your logic with the property here
          sum=sum+this.cart[prop].price*this.cart[prop].count;
      }
      return sum.toFixed(2);
        // .reduce((acc, el) => acc + (el.count * el.price), 0)
        // .toFixed(2);
    }
  },
  filters: {
    usdollar: function(value) {
      return `$${value}`;
    }
  },
    methods: {
    Buy(){
      this.status = 'success';
      this.$emit('successSubmit');
      this.$store.commit('clearCartCount');
      this.$router.push('/');
    },
  }

};
</script>

<style scoped>
.cart > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 50px;
  background: white;
  border-radius: 3px;
  margin-top: 10px;
  padding-bottom: 80px;
}

.cart.empty h1,
.cart.empty h3 {
  margin-bottom: 15px;
}

.cartitems {
  padding: 30px;
  border-bottom: 1px solid #ccc;
  width: 500px;
}

.carttext {
  width: 250px;
  float: left;
}

.carttext p,
.carttext h4 {
  padding: 5px;
}

.cartimg {
  width: 100px;
  border: 1px solid #ccc;
  float: right;
}

.total {
  margin: 20px 0;
}
</style>
