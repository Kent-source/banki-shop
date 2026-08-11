import Vue, { PropType } from 'vue';

import BaModalWindow from '@/components/shared/BaModalWindow/index.vue';
import BaButton from '@/components/shared/BaButton/index.vue';
import { Carousel, Slide } from 'vue-carousel';

import { IPainting } from '@/shared/types/painting';
import { IButtonConfig } from '../../types';
import { getImageUrl } from '@/shared/helpers/getImageUrl';

export default Vue.extend({
  name: 'BaPaintingsCardPreviewModal',

  components: {
    BaModalWindow,
    BaButton,
    Carousel,
    Slide,
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
    getPaintingImageUrl(name: string) {
      return getImageUrl(`painting/${name}`);
    },

    emitCloseModal() {
      this.$emit('onClose');
    },

    emitAddToCart() {
      this.$emit('onAddToCart');
    },
  },
});
