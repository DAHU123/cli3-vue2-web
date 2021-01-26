<template>
  <div>
    Practice
    <ul>
      <li>面包屑一级导航</li>
      <li>二级导航</li>
      <li>内容</li>
    </ul>
<!--    哈哈哈-->
  </div>
</template>

<script>
export default {
  name: "Practice"
};
</script>

<style scoped lang="scss">
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
</style>
