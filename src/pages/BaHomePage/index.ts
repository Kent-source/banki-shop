import Vue from 'vue';

import BaPaintingsCard from '@/components/BaPaintingsCard/index.vue';

import { paintingsList } from '@/shared/configs/paintings';

export default Vue.extend({
  name: 'BaHomePage',

  components: {
    BaPaintingsCard,
  },

  data() {
    return {
      paintingsList,
    };
  },
});
