import request from "@/utils/request";
import request_test from "@/utils/request-test";
import { Floor, Banner, Likes, BcList } from "@/types/index";
import { AxiosPromise } from "axios";

function getBaseCategoryList(): AxiosPromise<Array<BcList>> {
  return request({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
}

function getBanner(): AxiosPromise<Banner> {
  return request_test({
    url: "/banners",
    method: "get",
  });
}

function getFloorList(): AxiosPromise<Floor> {
  return request_test({
    url: "/floors",
    method: "get",
  });
}

function getLike(): AxiosPromise<Likes> {
  return request_test({
    url: "/likes",
    method: "get",
  });
}

export { getBaseCategoryList, getBanner, getFloorList, getLike };
