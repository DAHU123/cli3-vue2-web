<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--    <img src="@/assets/logo.png" />-->
    <!--    <p>我是超长的文字</p>-->
    <div class="parent">
      <div class="float">浮动元素</div>
    </div>
    <!--    <div style="height: 100px;width: 100px;float: left;background: lightblue;">我是一个左浮动的元素</div>-->
    <!--    <div style="width: 200px; height: 200px;background: #eee;overflow: hidden">我是一个没有设置浮动,-->
    <!--      也没有触发 BFC 元素, width: 200px; height:200px; background: #eee;</div>-->
    <div class="parent-1">
      <div class="child">child</div>
    </div>
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
img {
  float: left;
}
p {
  overflow: hidden;
}
.parent {
  overflow: hidden;
}
.float {
  float: left;
}
.parent-1 {
  width: 500px;
  height: 500px;
  background: #42b983;
  /*方式1*/
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
  /*定位*/
  /*position: relative;*/
  /*栅格布局*/
  /*display: grid;*/
  /*方式5*/
  text-align: center;
  &::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }
  .child {
    width: 200px;
    height: 200px;
    background: pink;
    /*display: table-cell;*/
    /*vertical-align: middle;*/
    /*定位方式2*/
    /*position: absolute;*/
    /*left: 50%;*/
    /*top: 50%;*/
    /*<!--transform: translate(-50%, -50%);-->*/
    /*定位方式3*/
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    /*margin: auto;*/
    /*方式4*/
    /*justify-self: center;*/
    /*align-self: center;*/
    /*方式5*/
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
