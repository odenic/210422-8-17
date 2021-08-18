interface BaseCategoryList {
  CategoryList?: Array<BCList>;
}

interface BCList {
  categoryChild?: Array<BCList>;
  categoryId?: number;
  categoryName?: string;
}

export { BaseCategoryList };
