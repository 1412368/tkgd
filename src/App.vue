<template>
  <div id= 'app'>
    <el-container>
      <el-header><NavBar/></el-header>
      <el-container>
        <el-aside width="200px">
          <app-sidebar/>
        </el-aside>
        <el-container>
          <el-main><router-view></router-view></el-main>
          <el-footer><AppFooter></AppFooter></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import NavBar from './components/NavBar'
import AppSidebar from './components/AppSidebar.vue';
import AppFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {NavBar, AppSidebar, AppFooter}
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
.el-header{
  padding:0px
}
</style>
