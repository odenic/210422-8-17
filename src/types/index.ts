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

interface searchData {
  category1Id?: string;
  category2Id?: string;
  category3Id?: string;
  categoryName?: string;
  keyword?: string;
  props?: Array<string>;
  trademark?: string;
  order?: string;
  pageNo?: number;
  pageSize?: number;
}

interface attrsList {
  attrId: number;
  attrName: string;
  attrValueList: Array<string>;
}

export { homeData, likes, floor, banner, bcList, searchData, attrsList };
