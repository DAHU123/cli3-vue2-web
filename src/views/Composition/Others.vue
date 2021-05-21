<template>
  <div>
    Others
    <h1>{{ count }}</h1>
    <Add @parentAddCount="addCount" :count="count"/>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";
import Add from "./Add";

export default {
  name: "Others",
  components: { Add },
  setup() {
    const state = reactive({
      count: 0
    });

    const addCount = () => {
      state.count++;
    };

    return { ...toRefs(state), addCount };
  }
};
</script>

<style scoped></style>
