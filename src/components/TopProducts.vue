<template>
  <div id="Top Product" style="margin-top: 20px">
    <h1>Top Product</h1>
    <b-card-group style="margin: 20px; margin-left:200px; padding:10px" deck>
      <ProductDisplay />
    </b-card-group>
  </div>
</template>

<script>
  import ProductDisplay from './ProductDisplay'
  export default {
    name: 'topproduct',
    components: { ProductDisplay },
    data () {
      return {
        TopProduct: []
      }
    },
    mounted () {
    }
  }
</script>
<style scoped>
button {
  border: hidden;
  border-radius: 15;
  padding:10px;
  background: inherit;
}
button:hover {
  border: groove;
  background: inherit;
  width: 300px;
  height: 350px;
}
</style>
