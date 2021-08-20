
interface Homedata {
  CategoryList: Array<BCList>;
  Banners: Array<banner>;
  FloorLists: floor;
  likes: Array<likes>;
}

interface BCList {
  categoryChild?: Array<BCList>;
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


export { Homedata, likes, floor, banner, BCList };
