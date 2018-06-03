<template>
  <div>
    <transition name="fade">

      <div v-if="!submitted" class="payment">
        <b-form @submit="Buy">
          <h5>Please enter your delivery address:</h5>
          <b-form-input id="address" type="text" v-model="name" required placeholder="116 Nguyễn Chí Thanh">
          </b-form-input>
          <h5>Please enter your phone number:</h5>
          <b-form-input v-model="phone" type="number" placeholder="Enter your name"></b-form-input>
          <h5>Please choose your payment method:</h5>
          <b-form-radio-group id="radios2" v-model="paymentMethod" name="radioSubComponent">
            <b-form-radio value="first">Thay toán trực tiếp</b-form-radio>
            <b-form-radio value="second">Thanh toán qua visa</b-form-radio>
          </b-form-radio-group>
          <div v-if='paymentMethod==="second"'>
            <h5>Please enter your card number</h5>
            <b-form-input v-model="cardnum" type="number" placeholder="Enter your name"></b-form-input>
            <h5>Please enter name on your visa card</h5>
            <b-form-input v-model="cardname" type="text" placeholder="Enter your name"></b-form-input>
            <h5>Please enter your security code</h5>
            <b-form-input v-model="cardpass" type="text" placeholder="Enter your name"></b-form-input>
          </div>

          <b-button type="submit" variant="primary" style="margin-top:10px" @click="Buy">Xác nhận</b-button>
        </b-form>

      </div>

      <div v-else class="statussubmit">
        <div v-if="status === 'failure'">
          <h3>Oh No!</h3>
          <p>Something went wrong!</p>
          <button @click="clearCart">Please try again</button>
        </div>

      </div>

    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    userData() {
      return this.$store.state.userData;
    },
    isLogin() {
      return this.$store.state.isLogin;
    }
  },
  created() {
    if (this.isLogin)
      this.name = this.userData.address;
    this.phone = this.userData.phone;
  },

  props: {
    total: {
      type: [Number, String],
      default: '50.00'
    },
    success: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: "",
      phone: "",
      cardnum: "",
      cardname: "",
      cardpass: "",
      submitted: false,
      complete: false,
      status: '',
      response: '',
      paymentMethod: 'first',
      stripeOptions: {
        // you can configure that cc element. I liked the default, but you can
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
      stripeEmail: ''
    };
  },
  methods: {
    Buy() {
      this.status = 'success';
      this.$emit('successSubmit');
      this.$store.commit('clearCartCount');
      this.clearCart();
    },
    clearCart() {
      this.submitted = false;
      this.status = '';
      this.complete = false;
      this.response = '';
    }
  }
};
</script>

<style scoped>
.statussubmit {
  text-align: center;
}

.stripe-card {
  border: 1px solid #ccc;
}

p {
  margin: 0 0 10px;
}

label {
  color: black;
  margin: 15px 0 5px;
  font-family: 'Playfair Display', sans-serif;
}

.loadcontain {
  text-align: center;
}

.stripe-card {
  margin-bottom: 10px;
}

.cc-number {
  color: #3964e8;
  font-weight: bold;
}






/* -- transition --*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>