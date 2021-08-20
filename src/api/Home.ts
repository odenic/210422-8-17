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


function getFloorList(){
  return request_test({
    url: "/floors",
    method: "get",
  });
}

export { getBaseCategoryList, getBanner,getFloorList };
