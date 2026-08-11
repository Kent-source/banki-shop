import Vue from 'vue';

import BaButton from '@/components/shared/BaButton/index.vue';

export default Vue.extend({
  name: 'BaSearchBlock',

  components: {
    BaButton,
  },

  props: {
    inputValue: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
    },
  },

  methods: {
    handleInputEvent(event: Event) {
      const valueFromEvent = (event.target as HTMLInputElement).value;

      this.onInput(valueFromEvent);
    },

    onInput(string: string) {
      this.$emit('onInput', string);
    },
  },
});
