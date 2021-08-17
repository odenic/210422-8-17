interface BaseCategoryList {
  BaseCategoryList?: BCList[] | []
}

interface BCList {
  categoryChild?:BCList[],
  categoryId:number,
  categoryName:string
}

export { BaseCategoryList };
