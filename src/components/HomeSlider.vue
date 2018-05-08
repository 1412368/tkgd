<template>  
  <b-carousel id="carousel1"
    style="text-shadow: 1px 1px 2px #333;"
    controls
    background="#ababab"
    :interval="4000"
    img-width="1024"
    img-height="480"
    v-model="slide"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide v-for= "PromoProduct in PromoProducts" :key="PromoProduct.id" :img-src=PromoProduct.url>
    </b-carousel-slide>
  </b-carousel>
</template>

<script >
export default {
  name: 'slider',
  data () {
    return {
      PromoProducts: [
        {
          url: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/homepage/images_2to1/hp_27feb_qc35ll_tobishininobi_darkgray_uk_city_2x1.psd/jcr:content/renditions/cq5dam.web.1920.1920.jpeg'
        },
        {
          url: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/homepage/images_2to1/hp_soundwear_companion_v3_at_home_2x1.psd/jcr:content/renditions/cq5dam.web.1920.1920.jpeg'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>