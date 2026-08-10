import Vue from 'vue';

export default Vue.extend({
  name: 'BaButton',

  props: {
    maxWidth: {
      type: String,
      default: '100%',
    },
  },
});
