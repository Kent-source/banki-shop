import Vue, { PropType } from 'vue';

import BaModalWindow from '@/components/shared/BaModalWindow/index.vue';
import BaButton from '@/components/shared/BaButton/index.vue';

import { IPainting } from '@/shared/types/painting';
import { IButtonConfig } from '../../types';

export default Vue.extend({
  name: 'BaPaintingsCardPreviewModal',

  components: {
    BaModalWindow,
    BaButton,
  },

  props: {
    isOpen: {
      type: Boolean,
    },

    paintingData: {
      type: Object as PropType<IPainting>,
      required: true,
    },

    isLoadingAddToCart: {
      type: Boolean,
    },

    buttonConfig: {
      type: Object as PropType<IButtonConfig>,
      required: true,
    },
  },

  methods: {
    emitCloseModal() {
      this.$emit('onClose');
    },

    emitAddToCart() {
      this.$emit('onAddToCart');
    },
  },
});
