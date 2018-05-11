<template>
  <div>
    <transition name="fade">

      <div v-if="!submitted" class="payment">
        <h3>Please enter your delivery address:</h3>
        <b-form @submit="Buy">
          <b-form-input id="address"
                        type="text"
                        v-model="name"
                        required
                        placeholder="116 Nguyễn Chí Thanh">
          </b-form-input>
          <b-button type="submit" variant="primary" style="margin-top:10px">Xác nhận</b-button>
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
      name:"",
      submitted: false,
      complete: false,
      status: '',
      response: '',
      stripeOptions: {
        // you can configure that cc element. I liked the default, but you can
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
      stripeEmail: ''
    };
  },
  methods: {
    Buy(){
      this.status = 'success';
      this.$emit('successSubmit');
      this.$store.commit('clearCartCount');
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