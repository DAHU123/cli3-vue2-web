import axios from "@/utils/request";
import { proxyLogin } from "@/api/proxy";
const apiName = proxyLogin + "/staff/v1";

export default {
  // 登录
  postAccountLogin({ params }) {
    return axios.post(`${apiName}/login`, params);
  },
  // 获取当前用户的信息
  getStaffUserInfo({ params }) {
    return axios.get(`${apiName}/user/getInfo`, { params });
  },
  // 修改密码
  updatePwd({ params }) {
    return axios.put(`${apiName}/user/update/password`, { ...params });
  }
};
