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
    <div class="ellipsis">
      时代峰峻了沙拉酱弗兰克临时冻结恢复了乐山大佛了老师讲地方啦，三六九等分类
    </div>
    <hr />
    <v-clamp
      :class="{
        demo: true
      }"
      :max-lines="3"
      autoresize
      :style="{
        width: `${100}px`
      }"
    >
      {{
        zh
          ? "textZh"
          : "时代峰峻了沙拉酱弗兰克临时冻结恢复了乐山大佛了老师讲地方啦，三六九等分类"
      }}
      <button
        slot="after"
        slot-scope="{ toggle }"
        class="toggle btn btn-sm"
        @click="toggle"
      >
        {{ zh ? "切换" : "Toggle" }}
      </button>
    </v-clamp>
  </div>
</template>

<script>
import VClamp from "@/components/VClamp.js";
export default {
  name: "Practice",
  components: { VClamp },
  data() {
    return {
      zh: false
    };
  },
  methods: {
    toggle() {
      this.zh = !this.zh;
    }
  }
};
</script>

<style scoped lang="scss">
.parent {
  width: 300px;
  height: 300px;
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
/*用css实现文本超出显示省略号----单行*/
/*.ellipsis {*/
/*  width: 100px;*/
/*  overflow: hidden;*/
/*  text-overflow: ellipsis;*/
/*  white-space: nowrap;*/
/*}*/

/*用css实现文本超出显示省略号----多行，不考虑兼容*/
/*.ellipsis {*/
/*  width: 100px;*/
/*  overflow: hidden;*/
/*  display: -webkit-box;*/
/*  -webkit-box-orient: vertical;*/
/*  -webkit-line-clamp: 3;*/
/*}*/

/*用css实现文本超出显示省略号----多行，考虑兼容*/
.ellipsis {
  width: 100px;
  position: relative;
  line-height: 20px;
  max-height: 40px;
  overflow: hidden;
}
.ellipsis::after {
  content: "...";
  position: absolute;
  bottom: 0;
  right: 0;
  padding-left: 40px;
  background: -webkit-linear-gradient(left, transparent, #fff 55%);
  background: -o-linear-gradient(right, transparent, #fff 55%);
  background: -moz-linear-gradient(right, transparent, #fff 55%);
  background: linear-gradient(to right, transparent, #fff 55%);
}
</style>
