import Vue from 'vue';

import BaMainNavigation from '@/components/BaMainNavigation/index.vue';
import BaSearchBlock from '@/components/shared/BaSearchBlock/index.vue';

export default Vue.extend({
  name: 'BaDefaultHeader',

  components: {
    BaMainNavigation,
    BaSearchBlock,
  },

  methods: {
    setQueryForSearch(searchString: string) {
      if (!searchString) {
        this.$router.push({
          query: undefined,
        });

        return;
      }

      this.$router.push({
        query: {
          search: searchString,
        },
      });
    },
  },
});
