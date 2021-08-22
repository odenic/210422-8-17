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

export {
  homeData,
  likes,
  floor,
  banner,
  bcList,
  searchData,
  resOfSearch,
  searchOption,
};
