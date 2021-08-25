interface HomeData {
  CategoryList: Array<BcList>;
  Banners: Array<Banner>;
  FloorLists: Floor;
  likes: Array<Likes>;
}

interface BcList {
  categoryChild?: Array<BcList>;
  categoryId?: number;
  categoryName?: string;
}

interface Banner {
  id?: number;
  imgUrl?: string | Array<string>;
}

interface Floor extends Banner {
  title?: string;
  navList?: Array<string>;
  jdList?: Array<string>;
  smallImg?: string;
  bigImg?: string;
  banner?: Banner;
}

interface Likes extends Banner {
  name?: string;
  price?: number;
}

interface SearchOption {
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

interface ResOfSearch {
  attrsList?: Array<object>;
  goodsList?: Array<object>;
  pageNo?: number;
  pageSize?: number;
  total?: number;
  totalPages?: number;
  trademarkList?: Array<object>;
}

interface SearchData {
  sortOrder: string;
  isShow: boolean;
  res: ResOfSearch;
  option: SearchOption;
}

interface DetailRes {
  categoryView?: CategoryView;
  price?: number;
  skuInfo?: SkuInfo;
  spuSaleAttrList?: Array<SpuSaleAttrList>;
  skuAttrValueList?: string;
}

interface CategoryView {
  category1Id: number;
  category1Name: string;
  category2Id: number;
  category2Name: string;
  category3Id: number;
  category3Name: string;
  id: number;
}

interface SkuInfo {
  category3Id: number;
  createTime: string;
  id: number;
  isSale: number;
  price: number;
  skuAttrValueList: Array<SkuAttrValueList>;
  skuDefaultImg: string;
  skuDesc: string;
  skuImageList: Array<SkuImageList>;
  skuName: string;
  skuSaleAttrValueList: null;
  spuId: number;
  tmId: number;
  weight: string;
}

interface SkuAttrValueList {
  attrId: number;
  attrName: string;
  id: number;
  skuId: number;
  valueId: number;
  valueName: string;
}

interface SkuImageList {
  id: number;
  imgName: string;
  imgUrl: string;
  isDefault: string;
  skuId: number;
  spuImgId: number;
}

interface SpuSaleAttrList {
  baseSaleAttrId: number;
  id: number;
  saleAttrName: string;
  spuId: number;
  spuSaleAttrValueList: Array<PuSaleAttrValueList>;
}

interface PuSaleAttrValueList {
  baseSaleAttrId: number;
  id: number;
  isChecked: string;
  saleAttrName: string;
  saleAttrValueName: string;
  spuId: number;
}

interface DetailData {
  res: DetailRes;
  zoomImg: string;
  num: number;
}

interface ResAddToCart {
  code: number;
  message: string;
  data: any;
  ok: boolean;
}

interface ShopCart {
  activityRuleList?: any;
  cartInfoList?: Array<CartInfo>;
  createTime?: any;
}

interface CartInfo {
  cartPrice: number;
  couponInfoList: any;
  createTime: string;
  id: number;
  imgUrl: string;
  isChecked: number;
  isOrdered: number;
  operateTime: string;
  orderTime: string;
  skuId: number;
  skuName: string;
  skuNum: number;
  skuPrice: number;
  sourceId: number;
  sourceType: string;
  userId: string;
}

interface Cartdata {
  cart: Array<CartInfo>;
  totalPrice: number;
  num: number;
}

interface RegistData {
  phoneNumber: string;
  verificationCode: string;
  password: string;
  confirmPW: string;
  isChecked: boolean;
  isSend: boolean;
  rescode: string | null;
  time: number;
  timer: number | undefined;
  codeError: boolean;
  phoneError:boolean
}

interface UserData {
  name: string;
  nickName: string;
  token: string;
  userId: number;
}

export {
  HomeData,
  Likes,
  Floor,
  Banner,
  BcList,
  SearchData,
  ResOfSearch,
  SearchOption,
  DetailData,
  DetailRes,
  SkuImageList,
  PuSaleAttrValueList,
  ResAddToCart,
  ShopCart,
  Cartdata,
  CartInfo,
  RegistData,
  UserData
};
