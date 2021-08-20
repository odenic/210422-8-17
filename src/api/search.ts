import request from "@/utils/request";
import { searchData } from "@/types/index";

function search(data: searchData): any {
  return request({
    url: "/list",
    method: "post",
    data,
  });
}

export { search };
