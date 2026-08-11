import Vue, { PropType } from 'vue';

import BaLoadingBoxAnimation from '@/components/shared/BaLoadingBoxAnimation/index.vue';
import BaCheckIcon from '@/components/shared/icons/BaCheckIcon.vue';

export default Vue.extend({
  name: 'BaButton',

  components: {
    BaLoadingBoxAnimation,
    BaCheckIcon,
  },

  props: {
    maxWidth: {
      type: String,
      default: '100%',
    },

    theme: {
      type: String as PropType<'success'>,
    },

    isLoading: {
      type: Boolean,
    },

    isDisabled: {
      type: Boolean,
    },
  },

  methods: {
    handleClick() {
      if (this.isLoading || this.isDisabled) {
        return;
      }

      this.$emit('onClick');
    },
  },
});
