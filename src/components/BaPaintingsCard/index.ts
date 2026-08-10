import Vue, { PropType } from 'vue';

import { IPainting } from '@/shared/types/painting';
import BaButton from '@/components/shared/BaButton/index.vue';

export default Vue.extend({
  name: 'BaPaintingsCard',

  components: {
    BaButton,
  },

  props: {
    paintingData: {
      type: Object as PropType<IPainting>,
      required: true,
    },
  },

  data() {
    return {
      imageAltText: `Картина ${this.paintingData.label} художника ${this.paintingData.painter}`,
    };
  },

  computed: {
    buttonConfig() {
      return {
        maxWidth: '112px',
        text: 'Купить',
      };
    },
  },

  methods: {
    getImageUrl(name: string) {
      return require(`@/assets/images/painting/${name}`);
    },
  },
});
