<template>
  <div>
    <el-container class="containter">
        <el-aside width="50%">
            <el-carousel height="300px" class="productImg">
                <el-carousel-item>
                     <img :src="`/assets/sp/${index}/${item.img}`">
                </el-carousel-item>
                <el-carousel-item>
                     <img :src="`/assets/sp/${index}/main_thumbs.jpg`">
                </el-carousel-item>
                <el-carousel-item>
                     <img :src="`/assets/sp/${index}/1.jpg`">
                </el-carousel-item>
                <el-carousel-item>
                     <img :src="`/assets/sp/${index}/1_thumbs.jpg`">
                </el-carousel-item>
            </el-carousel>
        </el-aside>
        <el-main class="details">
            <h3 class="top">{{item.name}}</h3>
            <h5 class="moveRight">Giá <span class="price">{{item.price}}</span> VNĐ</h5>
            <ul class="generalDes">
                <li v-for="des in item.description" :key="des">{{des}}</li>
            </ul>
            <el-input-number class="moveRight" v-model="num1" size="medium" :min="1" :max="10"></el-input-number>
            <el-button style="margin-left:10px" type="warning" @click="addItem">Thêm vào giỏ hàng</el-button>
        </el-main>
    </el-container>

    <el-container class="productdetails">
        <el-main class="details">
            <h4 class="description">Mô tả</h4>
            <div class="descriptionDetails" v-html="item.rawHtml"></div>
        </el-main>

    </el-container>
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
        
        PromoProducts: [
        {
          url: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/homepage/images_2to1/hp_27feb_qc35ll_tobishininobi_darkgray_uk_city_2x1.psd/jcr:content/renditions/cq5dam.web.1920.1920.jpeg'
        },
        {
          url: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/homepage/images_2to1/hp_soundwear_companion_v3_at_home_2x1.psd/jcr:content/renditions/cq5dam.web.1920.1920.jpeg'
        }
      ],
        num1: 1
    };
  },
  computed: {
    index(){
        return parseInt(this.$route.params.id);
    },
    item() {
      return this.$store.state.products[parseInt(this.$route.params.id)-1];
    }
  },
  methods: {
    addItem() {
        console.log(this.index);
        console.log(this.item);
        for(let i=0;i<this.num1;i++)
            this.$store.commit('addItem', this.item);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.containter{
    background:white;
}
.details{
    background:white;
    padding:0px;
    border-left:2px solid #e2e2e2;
    text-align: left;
}
.top{
    border-bottom:2px solid #e2e2e2;
    text-align: left;
    padding:15px;
}
.productImg{
    padding:5px;
}
.generalDes{
    text-align:left;
    
}
.moveRight{
    margin-left: 15px
}
.price{
    font-weight:bold;
    color:red;
    font-size:2em;
}
.productdetails{
    margin-top:15px;
}
.description{
    background:#e2e2e2
}
.descriptionDetails{
    padding:15px;
    padding-left: 25px;
}
</style>
