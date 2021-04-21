<template>
  <nav
    class="flex justify-between bg-gray-900 border-b border-gray-600 text-white relative"
    id="nav-bar"
  >
    <div class="flex-1 flex items-center">
      <a
        href="/"
        class="p-3 h-full flex items-center group border-r border-gray-600"
      >
        <icon name="ycode-stroke" color="PureWhite" />
      </a>
    </div>
  </nav>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  components: {
    Icon,
  },
};
</script>
