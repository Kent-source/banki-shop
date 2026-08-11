import Vue from 'vue';

import BaMainNavigation from '@/components/BaMainNavigation/index.vue';
import BaSearchBlock from '@/components/shared/BaSearchBlock/index.vue';

import { getRouteQuery } from '@/shared/helpers/getRouteQuery';

export default Vue.extend({
  name: 'BaDefaultHeader',

  components: {
    BaMainNavigation,
    BaSearchBlock,
  },

  data() {
    return {
      searchValue: '',
    };
  },

  mounted() {
    this.setSearchValue(getRouteQuery(this.$route, 'search'));
  },

  methods: {
    setQueryForSearch(searchString: string) {
      if (!searchString) {
        this.$router.push({
          query: undefined,
        });

        return;
      }

      this.$router
        .push({
          query: {
            search: searchString,
          },
        })
        .catch(() => {
          //
        });
    },

    setSearchValue(value: string) {
      this.searchValue = value;
    },
  },
});
