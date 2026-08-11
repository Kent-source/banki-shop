import Vue from 'vue';

import BaButton from '@/components/shared/BaButton/index.vue';

export default Vue.extend({
  name: 'BaSearchBlock',

  components: {
    BaButton,
  },

  props: {
    placeholder: {
      type: String,
    },
  },

  methods: {
    handleInput(event: Event) {
      const inputValue = (event.target as HTMLInputElement).value;

      this.$emit('onInput', inputValue);
    },
  },
});
