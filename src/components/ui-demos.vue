<template>
  <div id='demo'>
    <h2>
      <slot></slot>
      <a :href="'https://github.com/yelloxing/Image-Demo/blob/master/src/demos/'+url+'.vue'" target="_blank">查看代码</a>
    </h2>
  </div>
</template>
<script>
export default {
  props: ["url"]
};
</script>

<style scoped>
div {
  text-align: center;
  overflow: auto;
  height: calc(100vh - 50px);
}
div > h2 {
  line-height: 2em;
  padding-bottom: 30px;
}
div > h2 > a {
  color: rgb(255, 255, 255);
  background-color: rgb(13, 230, 238);
  padding: 5px;
  font-size: 16px;
}
</style>