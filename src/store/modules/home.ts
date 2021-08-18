import { getBaseCategoryList } from "@/api/Home";
import { BaseCategoryList } from "@/types/index";

const state: BaseCategoryList = {
  CategoryList: [],
};

const actions = {
  async getList({ commit }: any): Promise<void> {
    try {
      const goryList = await getBaseCategoryList();
      commit("GET_CATEGORY_LIST", goryList);
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  GET_CATEGORY_LIST(state: BaseCategoryList, goryList: any): void {
    state.CategoryList = goryList;
    state.CategoryList!.splice(14);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
