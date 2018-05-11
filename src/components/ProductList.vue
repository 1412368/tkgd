<template>
  <div class="item">
    <p>{{ item.name }}</p>
    <span class="salepill" v-if="item.sale">Sale</span>
    <img :src="`/assets/sp/${item.index}/${item.img}`" :alt="`Image of ${item.name}` " height="150" width="200">
    <p>{{ item.price }}$</p>
    <b-button size="sm" variant="outline-primary" @click="addItem">Add Item</b-button>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    addItem() {
      this.$store.commit('addItem', this.item);
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.item {
  border-radius: 1px;
  padding: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.item:hover{
  border:groove;
}

.salepill {
  background: rgb(232, 35, 25);
  color: white;
  font-family: 'Barlow', sans-serif;
  position: absolute;
  right: 30px;
  top: 60px;
  padding: 2px 10px 4px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  border-radius: 1000px;
}

p {
  font-size: 18px;
}
</style>
