import request from '@/utils/request'


function getBaseCategoryList(){
  return request({
    url:'/product/getBaseCategoryList',
    method:'get',
  })
}

export { getBaseCategoryList };
