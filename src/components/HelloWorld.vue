<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="handleClick">点击</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    handleClick() {
      const params = {
        username: "xupengpeng",
        password: "7k5458"
      };
      // 进行接口请求
      this.$api.postAccountLogin({ params }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
