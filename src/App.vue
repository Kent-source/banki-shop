<template>
  <div id="app">
    <component :is="currentLayout"></component>
  </div>
</template>

<script>
import BaDefaultLayout from '@/layouts/BaDefaultLayout/index.vue';

export default {
  name: 'App',
  components: {
    BaDefaultLayout,
  },
  computed: {
    currentLayout() {
      return this.$route.meta.layout || 'BaDefaultLayout';
    },
  },
};
</script>
