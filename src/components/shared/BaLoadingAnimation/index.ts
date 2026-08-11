import Vue from 'vue';

export default Vue.extend({
  name: 'BaLoadingAnimation',

  props: {
    isSmall: {
      type: Boolean,
      default: false,
    },

    isAdaptive: {
      type: Boolean,
    },
  },
});
