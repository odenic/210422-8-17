import {
  getBaseCategoryList,
  getBanner,
  getFloorList,
  getLike,
} from "@/api/home";
import { HomeData, Likes, Floor, Banner, BcList } from "@/types/index";
import { ActionContext } from "vuex/types/index";

const state: HomeData = {
  CategoryList: [],
  Banners: [],
  FloorLists: {},
  likes: [],
};

const actions = {
  getList: async function({
    commit,
  }: ActionContext<HomeData, unknown>): Promise<void> {
    try {
      const goryList = await getBaseCategoryList();
      commit("GET_CATEGORY_LIST", goryList);
    } catch (error) {
      console.log(error);
    }
  },
  getBanners: async function({
    commit,
  }: ActionContext<HomeData, unknown>): Promise<void> {
    try {
      const banner = await getBanner();
      commit("GET_BANNERS", banner);
    } catch (error) {
      console.log(error);
    }
  },

  getFloorLists: async function({
    commit,
  }: ActionContext<HomeData, unknown>): Promise<void> {
    try {
      const FloorList = await getFloorList();
      commit("GET_FLOORLIST", FloorList);
    } catch (error) {
      console.log(error);
    }
  },
  getLikes: async function({
    commit,
  }: ActionContext<HomeData, unknown>): Promise<void> {
    try {
      const like = await getLike();
      commit("GET_LIKE", like);
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  GET_CATEGORY_LIST(state: HomeData, goryList: Array<BcList>): void {
    state.CategoryList = goryList;
    if (state.CategoryList) state.CategoryList.splice(14);
  },
  GET_BANNERS(state: HomeData, banner: Array<Banner>): void {
    state.Banners = banner;
  },
  GET_FLOORLIST(state: HomeData, FloorList: Floor): void {
    state.FloorLists = FloorList;
  },
  GET_LIKE(state: HomeData, like: Array<Likes>): void {
    state.likes = like;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
