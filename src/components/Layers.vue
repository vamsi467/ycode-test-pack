<template>
  <aside
    id="right-panel"
    class="relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"
  >
    <header
      class="text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0 "
    >
      <div class="flex items-center leading-5 py-px">Layers</div>
    </header>
    <section>
      <div
        class="flex text-white text-xs font-medium"
        v-for="(layer, index) in layers"
        :key="index"
      >
        <input type="radio" name="layer" v-model="selectedLayer" />
        <LayerNameControl :layer="layer" />
      </div>
    </section>
  </aside>
</template>

<script>
import Icon from "./Icon.vue";
import LayerNameControl from "./LayerNameControl.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Icon,
    LayerNameControl,
  },
  computed: {
    ...mapState(["layers"]),
  },
  methods: {
    ...mapMutations(["addLayer"]),
  },
};
</script>

<style></style>
