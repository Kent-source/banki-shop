import Vue, { PropType } from 'vue';

import BaButton from '@/components/shared/BaButton/index.vue';
import BaPaintingsCardPreviewModal from './components/BaPaintingsCardPreviewModal/index.vue';

import { IPainting } from '@/shared/types/painting';
import { EnumKeyLocalStorage } from '@/shared/configs/localStorage';

export default Vue.extend({
  name: 'BaPaintingsCard',

  components: {
    BaButton,
    BaPaintingsCardPreviewModal,
  },

  props: {
    paintingData: {
      type: Object as PropType<IPainting>,
      required: true,
    },
  },

  data() {
    return {
      imageAltText: `Картина ${this.paintingData.label} художника ${this.paintingData.painter}`,

      isExistPaintingInCart: false,
      isLoadingAddToCart: false,
      isOpenPreviewModal: false,
    };
  },

  mounted() {
    this.isExistPaintingInCart = this.getArrayPaintingsIdsFromCart().includes(this.paintingData.id);
  },

  computed: {
    buttonConfig() {
      if (this.isExistPaintingInCart) {
        return {
          maxWidth: '118px',
          text: 'В корзине',
          theme: 'success',
        };
      }

      return {
        maxWidth: '112px',
        text: 'Купить',
        theme: undefined,
      };
    },
  },

  methods: {
    getImageUrl(name: string) {
      return require(`@/assets/images/painting/${name}`);
    },

    addToCart() {
      const arrayPaintingIdsFromCart = this.getArrayPaintingsIdsFromCart();

      if (arrayPaintingIdsFromCart.includes(this.paintingData.id)) {
        return;
      }

      this.isLoadingAddToCart = true;

      setTimeout(() => {
        localStorage.setItem(
          EnumKeyLocalStorage.Cart,
          JSON.stringify([...arrayPaintingIdsFromCart, this.paintingData.id]),
        );

        this.isExistPaintingInCart = true;

        this.isLoadingAddToCart = false;
      }, 2000);
    },

    getArrayPaintingsIdsFromCart(): Array<string> {
      const localStorageCartData = localStorage.getItem(EnumKeyLocalStorage.Cart);

      if (!localStorageCartData) {
        return [];
      }

      return JSON.parse(localStorageCartData);
    },

    handleOpenPreviewModal(isOpen: boolean) {
      this.isOpenPreviewModal = isOpen;
    },
  },
});
