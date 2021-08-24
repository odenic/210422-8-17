import request from "@/utils/request";
import { ResAddToCart } from "@/types/index";
import { AxiosPromise } from "axios";

function addToCart(skuId: string, skuNum: string): AxiosPromise<ResAddToCart> {
  return request({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post",
  });
}

function getCartList(): any {
  return request({
    url: `/cart/cartList`,
    method: "get",
  });
}

function changeIsChecked(
  skuId: string,
  isChecked: string
): AxiosPromise<ResAddToCart> {
  return request({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: "get",
  });
}

function delGoods(skuId: string): AxiosPromise<ResAddToCart> {
  return request({
    url: `/cart/deleteCart/${skuId}`,
    method: "delete",
  });
}

export { addToCart, getCartList, changeIsChecked, delGoods };
