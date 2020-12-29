const getters = {
  count: state => state.example.count,
  getCount(state) {
    // 在这个函数中可以进行其他的操作
    return state.example.count;
  }
};
export default getters;
