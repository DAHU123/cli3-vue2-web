<template>
  <div>
    Practice
    <ul>
      <li>面包屑一级导航</li>
      <li>二级导航</li>
      <li>内容</li>
    </ul>
    <div class="parent">
      <div class="child"></div>
    </div>
    <img src="@/assets/logo.png" style="width: 480px!important;" />
  </div>
</template>

<script>
export default {
  name: "Practice"
};
</script>

<style scoped lang="scss">
.parent {
  width: 500px;
  height: 500px;
  background: pink;
  visibility: hidden;
  .child {
    width: 200px;
    height: 200px;
    background: lightblue;
    visibility: visible;
  }
}
ul {
  margin: 10px;
  background: #ccc;
  padding: 10px;
  border: 1px solid #999;
  list-style: none;
  &::after {
    clear: both;
    content: "";
    display: block;
  }
}
li {
  float: left;
  margin-left: 10px;
  &::after {
    content: "/";
    margin-left: 10px;
  }
}
li:last-child::after {
  content: none;
}
img {
  /*方式一*/
  /*box-sizing: border-box;*/
  /*padding: 0 90px;*/

  /*方式二*/
  /*max-width: 300px;*/

  /*方式三*/
  transform: scale(0.625);
}
</style>
