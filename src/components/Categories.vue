<template>
  <div class="home">
    <div>
      <h4 class="categoryTitle"> {{category}}</h4>
      <div class="category">
        <transition-group name="items" tag="section" class="content">
          <ProductList 
            v-for="(item, index) in showingProduct"
            :key="item.index"
            :item="item"
            :index="index"
          />
        </transition-group>
      </div>
      <div v-if="totalPage==0">
          No product for this categories
      </div>
    <b-pagination-nav align="right" :number-of-pages="totalPage" :base-url="`#/categories/${category}/`" v-model="currentPage" />

    <app-footer class="footer" />
    </div>
  </div>
</template>

<script>
import ProductList from './ProductList'
import AppFooter from './../components/Footer.vue';

export default {
  name: 'home',
  components: {ProductList, AppFooter },
  computed: {    
    totalPage() {
      return Math.ceil(this.$store.state.products.filter(el =>
        el.article==this.$route.params.category
      ).length/10);
    },
    showingProduct(){
        return this.$store.state.products.filter(el =>
        el.article==this.$route.params.category
        ).splice((this.$route.params.currentPage-1)*10,this.$route.params.currentPage*10);
    }
  },
  data() {
    return {
        currentPage: this.$route.params.currentPage,
        category: this.$route.params.category,        
    };
  },

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
