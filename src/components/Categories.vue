<template>
  <div class="home">
    <div>
      <h4 class="categoryTitle"> {{this.$route.params.category}}</h4>
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
      <div class="empty" v-if="totalPage==0">
          No product for this categories
      </div>
    <b-pagination-nav v-if="totalPage!=0" align="right" :number-of-pages="totalPage" :base-url="`#/categories/${category}/`" v-model="currentPage" />

    </div>
  </div>
</template>

<script>
import ProductList from './ProductList'
import AppFooter from './../components/Footer.vue';
import AppSidebar from './../components/AppSidebar.vue';

export default {
  name: 'home',
  components: {ProductList, AppFooter, AppSidebar },
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
    },
    category(){
      return this.$route.params.category;      

    }
    
  },
  data() {
    return {
        currentPage: this.$route.params.currentPage,
    };
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.empty{
  background:white;
  width: 100%;
  height:400px;
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
