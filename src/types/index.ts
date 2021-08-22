interface homeData {
  CategoryList: Array<bcList>;
  Banners: Array<banner>;
  FloorLists: floor;
  likes: Array<likes>;
}

interface bcList {
  categoryChild?: Array<bcList>;
  categoryId?: number;
  categoryName?: string;
}

interface banner {
  id?: number;
  imgUrl?: string | Array<string>;
}

interface floor extends banner {
  title?: string;
  navList?: Array<string>;
  jdList?: Array<string>;
  smallImg?: string;
  bigImg?: string;
  banner?: banner;
}

interface likes extends banner {
  name?: string;
  price?: number;
}

interface searchOption {
  category1Id?: string;
  category2Id?: string;
  category3Id?: string;
  categoryName?: string;
  keyword?: string;
  props?: Array<string>;
  trademark?: string;
  order: string;
  pageNo: number;
  pageSize: number;
}

interface resOfSearch {
  attrsList?: Array<object>;
  goodsList?: Array<object>;
  pageNo?: number;
  pageSize?: number;
  total?: number;
  totalPages?: number;
  trademarkList?: Array<object>;
}

interface searchData {
  sortOrder: string;
  isShow: boolean;
  res: resOfSearch;
  option: searchOption;
}

interface detailRes {
  categoryView?: categoryView;
  price?: number;
  skuInfo?: skuInfo;
  spuSaleAttrList?: Array<spuSaleAttrList>;
  skuAttrValueList?: string;
}

interface categoryView {
  category1Id: number;
  category1Name: string;
  category2Id: number;
  category2Name: string;
  category3Id: number;
  category3Name: string;
  id: number;
}

interface skuInfo {
  category3Id: number;
  createTime: string;
  id: number;
  isSale: number;
  price: number;
  skuAttrValueList: Array<skuAttrValueList>;
  skuDefaultImg: string;
  skuDesc: string;
  skuImageList: Array<skuImageList>;
  skuName: string;
  skuSaleAttrValueList: null;
  spuId: number;
  tmId: number;
  weight: string;
}

interface skuAttrValueList {
  attrId: number;
  attrName: string;
  id: number;
  skuId: number;
  valueId: number;
  valueName: string;
}

interface skuImageList {
  id: number;
  imgName: string;
  imgUrl: string;
  isDefault: string;
  skuId: number;
  spuImgId: number;
}

interface spuSaleAttrList {
  baseSaleAttrId: number;
  id: number;
  saleAttrName: string;
  spuId: number;
  spuSaleAttrValueList: Array<puSaleAttrValueList>;
}

interface puSaleAttrValueList {
  baseSaleAttrId: number;
  id: number;
  isChecked: string;
  saleAttrName: string;
  saleAttrValueName: string;
  spuId: number;
}

interface detailData {
  res: detailRes;
  zoomImg: string;
}

export {
  homeData,
  likes,
  floor,
  banner,
  bcList,
  searchData,
  resOfSearch,
  searchOption,
  detailData,
  detailRes,
  skuImageList,
};
