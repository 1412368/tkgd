<template>
  <div id= 'app'>
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {NavBar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background:#e2e2e2;
}
</style>
