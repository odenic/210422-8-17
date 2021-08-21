import request from "@/utils/request";
import { searchOption, resOfSearch } from "@/types/index";
import { AxiosPromise } from "axios";

function search(data: searchOption): AxiosPromise<resOfSearch> {
  return request({
    url: "/list",
    method: "post",
    data,
  });
}

export { search };
