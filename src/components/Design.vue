<template>
  <aside
    id="right-panel"
    class="relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"
  >
    <header
      class="text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0 "
    >
      <div class="flex items-center leading-5 py-px">Design</div>
    </header>
    <section v-if="selectedLayer.hasOwnProperty('design')">
      <textarea
        type="text"
        id="lname"
        name="lname"
        class="placeholder-gray-50::placeholder"
        placeholder="Comma seperated tailwind classes"
        v-model="selectedLayer.design"
      />
    </section>
  </aside>
</template>

<script>
import Icon from "./Icon.vue";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },

  computed: {
    selectedLayer() {
      return this.layers[this.selectedLayerIndex] || {};
    },
    ...mapState(["selectedLayerIndex", "layers"]),
  },
};
</script>

<style></style>
