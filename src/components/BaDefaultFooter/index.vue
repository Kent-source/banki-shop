<template>
  <div class="ba-default-footer">
    <BaMainNavigation />

    <div class="ba-default-footer__info">
      <div class="ba-default-footer__info-mobile">
        <div class="ba-default-footer__info-mobile-icon">
          <BaPhoneIcon class="ba-image-container" />
        </div>

        <span class="ba-default-footer__info-text"> +7 (812) 555-55-55 </span>
      </div>

      <div class="ba-default-footer__info-address">
        <div class="ba-default-footer__info-address-icon">
          <BaGeoLocationIcon class="ba-image-container" />
        </div>

        <span class="ba-default-footer__info-text"> г. Санкт-Петербург, ул. Ефимова, 3 </span>
      </div>
    </div>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
