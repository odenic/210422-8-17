import {
  getBaseCategoryList,
  getBanner,
  getFloorList,
  getLike,
} from "@/api/home";
import { Homedata, likes, floor, banner, BCList } from "@/types/index";
import { ActionContext } from "vuex/types/index";

const state: Homedata = {
  CategoryList: [],
  Banners: [],
  FloorLists: {},
  likes: [],
};

const actions = {
  getList: async function({
    commit,
  }: ActionContext<Homedata, unknown>): Promise<void> {
    try {
      const goryList = await getBaseCategoryList();
      commit("GET_CATEGORY_LIST", goryList);
    } catch (error) {
      console.log(error);
    }
  },
  getBanners: async function({
    commit,
  }: ActionContext<Homedata, unknown>): Promise<void> {
    try {
      const banner = await getBanner();
      commit("GET_BANNERS", banner);
    } catch (error) {
      console.log(error);
    }
  },

  getFloorLists: async function({
    commit,
  }: ActionContext<Homedata, unknown>): Promise<void> {
    try {
      const FloorList = await getFloorList();
      commit("GET_FLOORLIST", FloorList);
    } catch (error) {
      console.log(error);
    }
  },
  getLikes: async function({
    commit,
  }: ActionContext<Homedata, unknown>): Promise<void> {
    try {
      const like = await getLike();
      commit("GET_LIKE", like);
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  GET_CATEGORY_LIST(state: Homedata, goryList: Array<BCList>): void {
    state.CategoryList = goryList;
    if (state.CategoryList) state.CategoryList.splice(14);
  },
  GET_BANNERS(state: Homedata, banner: Array<banner>): void {
    state.Banners = banner;
  },
  GET_FLOORLIST(state: Homedata, FloorList: floor): void {
    state.FloorLists = FloorList;
  },
  GET_LIKE(state: Homedata, like: Array<likes>): void {
    state.likes = like;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
