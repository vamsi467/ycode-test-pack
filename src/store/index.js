import { createStore } from "vuex";
const BLANK_LAYER = {
  content: "This is layer",
  design: "",
};

export default createStore({
  state: {
    layers: [],
    selectedLayerIndex: -1,
  },
  mutations: {
    addLayer: (state) => {
      state.layers.splice(state.layers.length, 0, { ...BLANK_LAYER });
    },
    deleteLayer(state, index) {
      state.layers.splice(index, 1);
    },
    setSelectedLayer(state, index) {
      state.selectedLayerIndex = index;
    },
  },
  getters: {
    getLayers: (state) => {
      return state.layers;
    },
  },
  modules: {},
});
