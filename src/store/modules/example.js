/**
 *Created by DAHU123 <986220912@qq.com> on 2020/12/23.
 * 例子
 */
const state = {
  info: 0,
  count: 0
};

const mutations = {
  SET_INFO: (state, obj) => {
    state.info = obj;
  },
  PLUS: (state, data) => {
    state.count += data;
  }
};

const actions = {
  setInitCerTemplateInfo({ commit }, obj) {
    commit("SET_INFO", obj);
  },
  plusCount({ commit }, data) {
    commit("PLUS", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
