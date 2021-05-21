<template>
  <div>
    Composition
    <div>count: {{ count.num }}</div>
    <div>init: {{ init }}</div>
    <el-button type="primary" @click="addCount">增加count</el-button>
    <el-button type="primary" @click="minusCount">减少count</el-button>
    <Others />
  </div>
</template>

<script>
import Others from "./Others";
import { reactive, toRefs, watch, watchEffect } from "@vue/composition-api";
export default {
  name: "Composition",
  components: { Others },
  setup(props, context) {
    let count = reactive({
      num: 0
    });
    const initObj = reactive({
      init: 88
    });
    const addCount = () => {
      count.num++;
      initObj.init++;
    };
    const minusCount = () => {
      count.num--;
      initObj.init--;
    };
    // 监听一个数据的变化
    watch(
      () => count.num,
      (count, preCount) => {
        console.log("single", count, preCount);
      }
    );
    // 监听多个数据的变化
    watch(
      [() => count.num, () => initObj.init],
      ([count, msg], [preCount, preMsg]) => {
        console.log(
          "more",
          "count",
          count,
          "msg",
          msg,
          "preCount",
          preCount,
          "preMsg",
          preMsg
        );
      }
    );
    // 监听数据的变化
    watchEffect(() => {
      console.log("watchEffect", count.num);
    });
    return {
      count,
      addCount,
      minusCount,
      ...toRefs(initObj)
    };
  }
};
</script>

<style scoped></style>
