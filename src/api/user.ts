import request from "@/utils/request";
import { ResAddToCart, UserData } from "@/types/index";
import { AxiosPromise } from "axios";

function sendCode(phoneNumber: string): AxiosPromise<string> {
  return request({
    url: `/user/passport/sendCode/${phoneNumber}`,
    method: "get",
  });
}

function regist(
  phone: string,
  password: string,
  code: string
): AxiosPromise<ResAddToCart> {
  return request({
    url: `/user/passport/register`,
    method: "post",
    data: {
      phone,
      password,
      code,
    },
  });
}

function login(phone: string, password: string): AxiosPromise<UserData> {
  return request({
    url: `/user/passport/login`,
    method: "post",
    data: {
      phone,
      password,
    },
  });
}

function logout(): AxiosPromise<ResAddToCart> {
  return request({
    url: `/user/passport/logout`,
    method: "get",
  });
}

export { sendCode, regist, login, logout };
