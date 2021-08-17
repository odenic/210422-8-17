import axios from "axios";

function getBaseCategoryList() {
  return axios({
    url:'http://39.98.123.211/api/product/getBaseCategoryList',
    method:'get',
  })
}

export { getBaseCategoryList };
