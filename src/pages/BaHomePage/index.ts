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
      filteredPaintingsList: [...paintingsList],
    };
  },

  watch: {
    '$route.query.search': function (searchString: string) {
      this.filterPaintingList(searchString);
    },
  },

  methods: {
    filterPaintingList(searchString: string) {
      if (!searchString) {
        this.filteredPaintingsList = [...paintingsList];

        return;
      }

      this.filteredPaintingsList = [...paintingsList].filter(
        (item) => item.label.toLowerCase().includes(searchString) || item.painter.toLowerCase().includes(searchString),
      );
    },
  },
});
