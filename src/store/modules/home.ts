import { getBaseCategoryList, getBanner, getSmallBanner } from "@/api/home";
import { BaseCategoryList } from "@/types/index";

const state: BaseCategoryList = {
  CategoryList: [],
  Banners: [],
  smallBanners: [],
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
  async getBanners({ commit }: any): Promise<void> {
    try {
      const banner = await getBanner();
      commit("GET_BANNERS", banner);
    } catch (error) {
      console.log(error);
    }
  },
  async getSmallBanners({ commit }: any): Promise<void> {
    try {
      const smallBanner = await getSmallBanner();
      commit("GET_SMALL_BANNERS", smallBanner);
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
  GET_BANNERS(state: BaseCategoryList, banner: any): void {
    state.Banners = banner;
  },
  GET_SMALL_BANNERS(state: BaseCategoryList, smallBanner: any): void {
    state.smallBanners = smallBanner;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
