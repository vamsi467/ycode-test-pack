<template>
  <main class="h-screen w-screen overflow-hidden bg-white flex flex-col">
    <NavBar />

    <section class="relative flex flex-1 flex-row overflow-hidden">
      <Layers />
      <section
        class="w-full h-full relative z-10 scrollbar text-center text-none overflow-auto"
      >
        <button @click="addLayer">add layer</button>
        <div ref="layers">
          <Layer v-for="(layer, index) in layers" :layer="layer" :key="index" />
        </div>
      </section>

      <Design />
    </section>
  </main>
</template>

<script>
import Design from "./components/Design.vue";
import Layers from "./components/Layers.vue";
import Layer from "./components/Layer.vue";
import NavBar from "./components/NavBar.vue";

import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  components: {
    Design,
    NavBar,
    Layers,
    Layer,
  },
  computed: {
    ...mapState(["layers"]),
  },

  methods: {
    ...mapMutations(["addLayer"]),
  },
};
</script>
