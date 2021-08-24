import request from "@/utils/request";
import { SearchOption, ResOfSearch } from "@/types/index";
import { AxiosPromise } from "axios";

function search(data: SearchOption): AxiosPromise<ResOfSearch> {
  return request({
    url: "/list",
    method: "post",
    data,
  });
}

export { search };
