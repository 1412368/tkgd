<template>
<div class="footer">
  <div class="copyright">
    ©
    {{year}} <a href="#">Nhóm</a>.
  </div>
</div>
</template>

<script>
export default {
  data() {
    const year = new Date().getFullYear();
    return {
      year
    };
  }
};
</script>

<style>

</style>


<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: black;
  color: white;
  text-align: center;
  letter-spacing: 0.03em;
  margin-top: 10px;
  width: 100%;
  height: 50px;
  background:#343a40;
}

a,
a:visited,
a:active {
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding-left: 6px;
}
</style>