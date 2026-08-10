import Vue from 'vue';

import { navigationLinksConfig } from '@/shared/configs/navigationLinks';

export default Vue.extend({
  name: 'BaMainNavigation',

  data() {
    return {
      navigationLinksConfig,
    };
  },
});
