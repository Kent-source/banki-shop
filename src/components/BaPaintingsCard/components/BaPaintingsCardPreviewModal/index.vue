<template>
  <div class="ba-paintings-card-preview-modal">
    <BaModalWindow v-if="isOpen" @onClose="emitCloseModal">
      <template>
        <div class="ba-paintings-card-preview-modal__content">
          <div class="ba-paintings-card-preview-modal__content-carousel"></div>

          <div class="ba-paintings-card-preview-modal__content-info">
            <span class="ba-paintings-card-preview-modal__content-info-text"> «{{ paintingData.label }}» </span>

            <span class="ba-paintings-card-preview-modal__content-info-text">
              {{ paintingData.painter }}
            </span>
          </div>

          <div class="ba-paintings-card-preview-modal__content-footer">
            <div class="ba-paintings-card-preview-modal__content-footer-prices">
              <template v-if="paintingData.discountPrice">
                <span class="ba-paintings-card-preview-modal__content-footer-prices-previous">{{
                  paintingData.price
                }}</span>

                <span class="ba-paintings-card-preview-modal__content-footer-prices-current">{{
                  paintingData.discountPrice
                }}</span>
              </template>

              <template v-else>
                <span class="ba-paintings-card-preview-modal__content-footer-prices-current">{{
                  paintingData.price
                }}</span>
              </template>
            </div>

            <BaButton :theme="buttonConfig.theme" :isLoading="isLoadingAddToCart" @onClick="emitAddToCart">
              {{ buttonConfig.text }}
            </BaButton>
          </div>
        </div>
      </template>
    </BaModalWindow>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
