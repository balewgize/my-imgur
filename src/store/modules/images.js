import api from "../../api/imgur";
import router from "../../router";

const state = {
  images: [],
};

const getters = {
  allImages: (state) => state.images,
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit("setImages", response.data.data);
  },
  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth;
    const response = await api.uploadImages(images, token);
    console.log(response);
    router.push("/");
  },
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
