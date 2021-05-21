<template>
  <div>
    <h3>{{ count }}</h3>
    <el-button @click="addCount">加</el-button>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  setup(props, { emit }) {
    const addCount = () => {
      // 子组件向父组件传递数据
      emit("parentAddCount");
    };
    return { addCount };
  }
};
</script>
