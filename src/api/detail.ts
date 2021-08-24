import request from "@/utils/request";
import { DetailRes } from "@/types/index";
import { AxiosPromise } from "axios";

function getGoodsDetails(skuId: string): AxiosPromise<DetailRes> {
  return request({
    url: `/item/${skuId}`,
    method: "get",
  });
}

export { getGoodsDetails };
