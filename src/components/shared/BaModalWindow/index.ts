import Vue from 'vue';

export default Vue.extend({
  name: 'BaModalWindow',

  methods: {
    emitCloseModal() {
      this.$emit('onClose');
    },
  },
});
