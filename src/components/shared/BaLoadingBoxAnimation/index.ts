import Vue from 'vue';

import BaLoadingAnimation from '@/components/shared/BaLoadingAnimation/index.vue';

export default Vue.extend({
  name: 'BaLoadingBoxAnimation',

  components: {
    BaLoadingAnimation,
  },

  props: {
    isShow: {
      type: Boolean,
    },

    isSmall: {
      type: Boolean,
    },

    isAdaptive: {
      type: Boolean,
    },
  },
});
