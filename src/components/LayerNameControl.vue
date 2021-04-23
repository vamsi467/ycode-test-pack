<template>
  <div
    class="flex justify-between items-center text-white text-xs font-medium my-2"
  >
    <input
      type="radio"
      :value="index"
      name="layer"
      @change="setSelectedLayer(index)"
    />
    <input
      class="bg-transparent border-white"
      v-if="layer.edit"
      type="text"
      v-model="layer.content"
    />
    <span v-else>{{ layer.content }}</span>
    <div class="flex text-black">
      <button class="py-1 px-2 mx-1 bg-white" @click="layer.edit = !layer.edit">
        {{ layer.edit ? "save" : "edit" }}
      </button>
      <button class="p-1 mx-1 bg-white" @click="deleteLayer(index)">
        delete
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: {
    layer: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState(["selectedLayerIndex"]),
  },
  methods: {
    ...mapMutations(["deleteLayer", "setSelectedLayer"]),
  },
};
</script>

<style></style>
