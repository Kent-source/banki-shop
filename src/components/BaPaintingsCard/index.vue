<template>
  <div class="ba-paintings-card" :class="{ 'ba-paintings-card_sold': paintingData.isSold }">
    <div class="ba-paintings-card__image-wrapper">
      <img class="ba-image-container" :src="getImageUrl(paintingData.image)" :alt="'imageAltText'" />
    </div>

    <div class="ba-paintings-card__info" @click="handleOpenPreviewModal(true)">
      <span class="ba-paintings-card__info-text"> «{{ paintingData.label }}» </span>

      <span class="ba-paintings-card__info-text">
        {{ paintingData.painter }}
      </span>
    </div>

    <div class="ba-paintings-card__footer">
      <template v-if="!paintingData.isSold">
        <div class="ba-paintings-card__footer-prices">
          <template v-if="paintingData.discountPrice">
            <span class="ba-paintings-card__footer-prices-previous">{{ paintingData.price }}</span>

            <span class="ba-paintings-card__footer-prices-current">{{ paintingData.discountPrice }}</span>
          </template>

          <template v-else>
            <span class="ba-paintings-card__footer-prices-current">{{ paintingData.price }}</span>
          </template>
        </div>

        <BaButton
          :maxWidth="buttonConfig.maxWidth"
          :theme="buttonConfig.theme"
          :isLoading="isLoadingAddToCart"
          @onClick="addToCart"
        >
          {{ buttonConfig.text }}
        </BaButton>
      </template>

      <template v-else>
        <div class="ba-paintings-card__footer-sold-info">
          <span class="ba-paintings-card__footer-sold-info-text">Продана на аукционе</span>
        </div>
      </template>
    </div>

    <BaPaintingsCardPreviewModal
      :isOpen="isOpenPreviewModal"
      :paintingData="paintingData"
      :buttonConfig="buttonConfig"
      :isLoadingAddToCart="isLoadingAddToCart"
      @onClose="handleOpenPreviewModal(false)"
      @onAddToCart="addToCart"
    />
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
