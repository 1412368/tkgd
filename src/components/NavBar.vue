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
            <b-nav-item href="#">
              <i class="material-icons">local_grocery_store</i>
            </b-nav-item>
          </b-navbar-nav>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'navbar'
}
</script>
<style scoped>
</style>
