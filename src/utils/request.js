/**
 *对请求进行统一封装
 */
import axios from "axios";

const service = axios.create({
  // baseURL: '/api',
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
  timeout: 60000
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    if (!(config.url.indexOf("/login") > -1)) {
      // 为每个接口统一设置token
      // config.headers['Authorization'] = getToken()
      // config.headers['Authorization'] = 324565465465
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.errcode === 50000) {
      const message = res.errMsg || res.errmsg;
      console.error(message);
      // Message({ message, type: "error" });
      return Promise.reject("error");
    }

    // token认证失败，token传递错误
    if (res.errCode === 10110002) {
      const message = res.errMsg || res.errmsg;
      console.error(message);
      // Message({ message: res.errMsg, type: "error" });
      return Promise.reject("error");
    }
    return response.data;
  },
  error => {
    const message = error.message || "出错了";
    console.error(message);
    // Message({
    //   message: error.message,
    //   type: "error",
    //   duration: 6 * 1000
    // });
    return Promise.reject(error);
  }
);

export default service;
