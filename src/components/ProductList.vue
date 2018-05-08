<template>
    <div id="Products" style="margin-top: 20px">
      <h1>{{title}}</h1>
        <b-card-group style="margin: 20px; padding:10px" deck>
          <button v-for= "Product in Products" :key="Product.key"  style="margin: 20px; padding:10px" >
            <b-card :title= Product.title
            :img-src= Product.url
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; border: hidden"
            class="mb-2">
            <span>{{Product.price}}</span>
            </b-card>
          </button>
        </b-card-group>
    </div>
</template>

<script>
export default {
  name: 'home',
 props:['Products', 'title'],
  data () {
    return {
    }
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
