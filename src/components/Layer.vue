<template>
  <div :class="computedClasses">
    {{ layer.content }}
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
  computed: {
    computedClasses() {
      return this.layer.design && this.layer.design.length
        ? this.layer.design.split(",")
        : [];
    },
  },
};
</script>

<style></style>
