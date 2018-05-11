<template>
  <div id="nav">
    <b-navbar toggleable="md" type="dark" variant="dark" >
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">BRAND</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="#/Products">Product</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em><i class="material-icons" >person</i></em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-navbar-nav>
            <!-- Using button-content slot -->
            <router-link to="/cart">
              <div class="cartitem">
                <div v-if="cartTotal > 0" class="cartcount">{{ cartTotal }}</div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="shopicon" role="presentation" width="30" height="30">
                    <title id="cart">
                      Shopping Cart
                    </title>
                    <path fill="white" d="M8.01 10c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2h10.376l10.53 49.813c-.107 1.14.952 2.245 2.095 2.187h50c1.057.015 2.03-.943 2.03-2s-.973-2.015-2.03-2H32.637l-1.688-8H85.01c.896-.01 1.742-.69 1.938-1.562l7-30c.26-1.16-.748-2.43-1.937-2.438H23.76l-1.78-8.437c-.2-.884-1.063-1.57-1.97-1.563zm16.594 14H89.51l-6.093 26H30.104zM42.01 72c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm28 0c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm-28 4c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5zm28 0c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5z"/>
                  </svg>
                </div>
            </router-link>
          </b-navbar-nav>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  computed: {
    cartTotal() {
      return this.$store.state.cartTotal;
    }
  },
}
</script>
<style scoped>
.cartcount {
  font-family: 'Barlow', sans-serif;
  position: absolute;
  background: #ff2211;
  color: white;
  text-align: center;
  padding-top: 4px;
  width: 20px;
  height: 20px;
  font-size: 10px;
  margin: -5px 0 0 20px;
  border-radius: 1000px;
  font-weight: 700;
}

</style>
