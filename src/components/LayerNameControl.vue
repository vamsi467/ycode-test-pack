<template>
  <div class="flex justify-between text-white text-xs font-medium">
    <input
      class="bg-transparent"
      v-if="layer.edit"
      type="text"
      v-model="layer.content"
    />
    <span v-else>{{ layer.content }}</span>
    <button @click="layer.edit = !layer.edit">
      {{ layer.edit ? "save" : "edit" }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    layer: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
