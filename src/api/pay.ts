import request from "@/utils/request";
import { AxiosPromise } from "axios";

function reqTardeInfo(): AxiosPromise<unknown> {
  return request({
    url: `/order/auth/trade`,
    method: "get",
  });
}

function submitOrder(tradeNo: string, data: unknown): AxiosPromise<unknown> {
  return request({
    url: `/order/auth/submitOrder`,
    method: "post",
    params: {
      tradeNo,
    },
    data,
  });
}

function getQRCode(orderId: string): AxiosPromise<unknown> {
  return request({
    url: `/payment/weixin/createNative/${orderId}`,
    method: "get",
  });
}

function checkPaymentState(orderId: string): AxiosPromise<unknown> {
  return request({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: "get",
  });
}

function getOrderList(page: string, limit: string): AxiosPromise<unknown> {
  return request({
    url: `/order/auth/${page}/${limit}`,
    method: "get",
  });
}

export {
  reqTardeInfo,
  submitOrder,
  getQRCode,
  checkPaymentState,
  getOrderList,
};
