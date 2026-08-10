import Vue from 'vue';

import BaMainNavigation from '@/components/BaMainNavigation/index.vue';
import BaPhoneIcon from '@/components/shared/icons/BaPhoneIcon.vue';
import BaGeoLocationIcon from '@/components/shared/icons/BaGeoLocationIcon.vue';

export default Vue.extend({
  name: 'BaDefaultFooter',

  components: {
    BaMainNavigation,
    BaPhoneIcon,
    BaGeoLocationIcon,
  },
});
