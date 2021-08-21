import request from "@/utils/request";
import request_test from "@/utils/request-test";
import { floor, banner, likes, bcList } from "@/types/index";
import { AxiosPromise } from "axios";

function getBaseCategoryList(): AxiosPromise<Array<bcList>> {
  return request({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
}

function getBanner(): AxiosPromise<banner> {
  return request_test({
    url: "/banners",
    method: "get",
  });
}

function getFloorList(): AxiosPromise<floor> {
  return request_test({
    url: "/floors",
    method: "get",
  });
}

function getLike(): AxiosPromise<likes> {
  return request_test({
    url: "/likes",
    method: "get",
  });
}

export { getBaseCategoryList, getBanner, getFloorList, getLike };
