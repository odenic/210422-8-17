import {
  getBaseCategoryList,
  getBanner,
  getFloorList,
  getLike,
} from "@/api/home";
import { Homedata } from "@/types/index";

const state: Homedata = {
  CategoryList: [],
  Banners: [],
  FloorLists: {},
  likes: [],
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

  async getFloorLists({ commit }: any): Promise<void> {
    try {
      const FloorList = await getFloorList();
      commit("GET_FLOORLIST", FloorList);
    } catch (error) {
      console.log(error);
    }
  },
  async getLikes({ commit }: any): Promise<void> {
    try {
      const like = await getLike();
      commit("GET_LIKE", like);
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  GET_CATEGORY_LIST(state: Homedata, goryList: any): void {
    state.CategoryList = goryList;
    state.CategoryList!.splice(14);
  },
  GET_BANNERS(state: Homedata, banner: any): void {
    state.Banners = banner;
  },
  GET_FLOORLIST(state: Homedata, FloorList: any): void {
    state.FloorLists = FloorList;
  },
  GET_LIKE(state: Homedata, like: any): void {
    state.likes = like;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
