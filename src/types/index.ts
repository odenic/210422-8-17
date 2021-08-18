interface BaseCategoryList {
  CategoryList: Array<BCList>;
  Banners: Array<banner>;
  smallBanners: Array<banner>;
}

interface BCList {
  categoryChild?: Array<BCList>;
  categoryId?: number;
  categoryName?: string;
}

interface banner {
  id: number;
  imgUrl: string;
}

export { BaseCategoryList };
