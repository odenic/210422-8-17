import request from "@/utils/request";
import request_test from "@/utils/request-test";

function getBaseCategoryList() {
  return request({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
}

function getBanner() {
  return request_test({
    url: "/banners",
    method: "get",
  });
}

function getSmallBanner() {
  return request_test({
    url: "/smallBanners",
    method: "get",
  });
}

export { getBaseCategoryList, getBanner, getSmallBanner };
