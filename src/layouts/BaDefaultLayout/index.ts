import Vue from 'vue';

import BaDefaultHeader from '@/components/BaDefaultHeader/index.vue';
import BaDefaultFooter from '@/components/BaDefaultFooter/index.vue';

export default Vue.extend({
  name: 'BaDefaultLayout',

  components: {
    BaDefaultHeader,
    BaDefaultFooter,
  },
});
