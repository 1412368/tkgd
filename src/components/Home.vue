<template>
  <div class="home">
    <div>
      <Slider/>
      <h4 class="categoryTitle"> Cloth</h4>
      <div class="category">
        <transition-group name="items" tag="section" class="content">
          <ProductList 
            v-for="(item, index) in products"
            :key="item.index"
            :item="item"
            :index="index"
          />
        </transition-group>
      </div>
      <h4 class="categoryTitle"> Phone</h4>
      <div class="category">
        <transition-group name="items" tag="section" class="content">
          <ProductList 
            v-for="(item, index) in products"
            :key="item.index"
            :item="item"
            :index="index"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from './ProductList'
import Slider from './HomeSlider'

export default {
  name: 'home',
  components: {  Slider, ProductList },
   data() {
    return {
      highprice: 300
    };
  },
  computed: {    
    products() {
      return this.$store.state.products.filter(el =>
        el.article=='cloth'
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
/* no grid support */
aside {
  float: left;
  width: 19.1489%;
}

.content {
  /*no grid support*/
  /* grid */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  padding: 0 !important;
}

@supports (display: grid) {
  .capsule > * {
    width: auto;
    margin: 0;
  }
}
.category{
  padding: 30px;
  margin:20px;
  margin-top: 0px;
  padding-top:0px;
}
.categoryTitle{
  margin:30px;
  margin-bottom:0px;
  margin-left:50px;
  text-align:left;
}
</style>
