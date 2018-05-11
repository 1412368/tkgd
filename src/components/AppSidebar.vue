<template>
    <div class="list-group">
      <a href="#/categories/cloth/1" class="list-group-item list-group-item-action">Cloth</a>
      <a href="#/categories/jewelry/1" class="list-group-item list-group-item-action">Jewelry</a>
      <a href="#/categories/shoe/1" class="list-group-item list-group-item-action">Shoe</a>
      <a href="#/categories/watch/1" class="list-group-item list-group-item-action disabled">Watch</a>
    </div>
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
aside {
  background: white;
  float: left;
  padding: 20px;
  margin-right: 10px;
  margin-top:57px;
  height:2000px;
}
.list-group{
  float:left;
  padding: 20px;
  margin-right: 10px;
  margin-top:57px;
  height:2000px;
  width: 250px;
}
.sidearea {
  border-bottom: 1px solid #ccc;
  text-align: left;
}

.callout {
  padding: 20px 0;
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}

/*--input range--*/
.sidearea:first-of-type {
  padding-bottom: 40px;
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}

span {
  font-family: 'Barlow', sans-serif;
}

.max {
  font-size: 12px;
  float: right;
  color: #565656;
}

.min {
  float: left;
  font-size: 12px;
  color: #565656;
}
</style>