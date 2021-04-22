import { createStore } from "vuex";
const BLANK_LAYER = {
  content: "This is layer",
};

export default createStore({
  state: {
    layers: [],
  },
  mutations: {
    addLayer: (state) => {
      state.layers.splice(state.layers.length,0,BLANK_LAYER);
    },
  },
  actions: {
    deleteLayer() {},
    updatelayers() {},
  },
  getters: {
    getLayers: (state) => {
      return state.layers;
    },
  },
  modules: {},
});
