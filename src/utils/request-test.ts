import axios from "axios";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

const request_test = axios.create({
  baseURL: "/mock",
});

request_test.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

request_test.interceptors.response.use(
  (response) => {
    NProgress.done();
    if (response.data.code === 200) {
      return response.data.data;
    }
    return Promise.reject(response.data.message || "error");
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request_test;