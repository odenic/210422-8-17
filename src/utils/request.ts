import axios from "axios";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

const request = axios.create({
  baseURL: "http://39.98.123.211/api",
});

request.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

request.interceptors.response.use(
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

export default request;
