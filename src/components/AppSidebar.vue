<template>
    <!-- <div class="list-group">
      <h10>Danh mục sản phẩm</h10>
      <a href="#/categories/cloth/1" class="list-group-item list-group-item-action">Cloth</a>
      <a href="#/categories/jewelry/1" class="list-group-item list-group-item-action">Jewelry</a>
      <a href="#/categories/shoe/1" class="list-group-item list-group-item-action">Shoe</a>
      <a href="#/categories/watch/1" class="list-group-item list-group-item-action disabled">Watch</a>
    </div> -->
  <el-menu
    router=true,
    class="el-menu-vertical"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>Nhóm hàng một</span>
      </template>
      <el-menu-item index="/categories/cloth/1">Cloth</el-menu-item>
      <el-menu-item index="/categories/jewelry/1">Jewelry</el-menu-item>
      <el-menu-item index="/categories/shoe/1">Shoe</el-menu-item>
      <el-menu-item index="/categories/watch/1">Watch</el-menu-item>
    </el-submenu>
     <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>Nhóm hàng hai</span>
      </template>
      <el-menu-item index="/categories/cloth/1">Cloth</el-menu-item>
      <el-menu-item index="/categories/jewelry/1">Jewelry</el-menu-item>
      <el-menu-item index="/categories/shoe/1">Shoe</el-menu-item>
      <el-menu-item index="/categories/watch/1">Watch</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"> 
        <i class="el-icon-document"></i>
        <span>Nhóm hàng ba</span>
      </template>
      <el-menu-item index="/categories/cloth/1">Cloth</el-menu-item>
      <el-menu-item index="/categories/jewelry/1">Jewelry</el-menu-item>
      <el-menu-item index="/categories/shoe/1">Shoe</el-menu-item>
      <el-menu-item index="/categories/watch/1">Watch</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>Nhóm hàng bốn</span>
      </template>
      <el-menu-item index="/categories/cloth/1">Cloth</el-menu-item>
      <el-menu-item index="/categories/jewelry/1">Jewelry</el-menu-item>
      <el-menu-item index="/categories/shoe/1">Shoe</el-menu-item>
      <el-menu-item index="/categories/watch/1">Watch</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>

export default {
  props: {
    sale: {
      type: Boolean,
      default: false
    },
    pricerange: {
      type: [Number, String],
      default: 300
    }
  },
  data() {
    return {
      min: 0,
      max: 400
    };
  },
};
</script>

<style lang="css" scoped>
.el-menu-vertical{
  margin-top:20px;
  text-align: left;
}
</style>