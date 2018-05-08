<template>
  <button href="#" style="margin: 20px; padding:10px">
    <b-card title="Card Title"
    :img-src= TopProduct.url
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; border: hidden"
    class="mb-2">
    </b-card>
  </button>
  <!-- <div>
    {{productlist}}
  </div> -->
</template>

<script>
export default {
  name: 'productdisplay',
  }
</script>

<style scoped>
    
</style>