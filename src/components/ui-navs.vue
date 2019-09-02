<template>
  <div>
    <h2>
      <slot name="header"></slot>
    </h2>
    <slot name="content"></slot>
  </div>
</template>
<style scoped>
div {
  padding: 30px;
}
div > h2 {
  margin-bottom: 20px;
  color: #666;
}
div > h2 > em {
  font-size: 20px;
  padding-left: 10px;
  color: #999;
  font-weight: normal;
  font-style: normal;
}
div > ul > li {
  display: inline-block;
  vertical-align: top;
  background-color: #f9f9f9;
  margin: 10px;
  padding: 10px;
}
div > ul > li > h4 {
  line-height: 2em;
  padding: 0 10px;
}
div > ul > li > a {
  display: inline-block;
  width: 300px;
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
}
</style>
