import request from "@/utils/request";
import { detailRes } from "@/types/index";
import { AxiosPromise } from "axios";

function getGoodsDetails(skuId: string): AxiosPromise<detailRes> {
  return request({
    url: `/item/${skuId}`,
    method: "get",
  });
}

export { getGoodsDetails };
