<template>
  <button
    class="ba-button"
    :class="[theme ? 'ba-button_theme-' + theme : '', { 'ba-button_disabled': isDisabled }]"
    :style="{ 'max-width': maxWidth }"
    @click="handleClick"
  >
    <template v-if="!isLoading">
      <div v-if="theme === 'success'" class="ba-button__content-icon-wrapper">
        <BaCheckIcon class="ba-image-container" />
      </div>

      <slot></slot>
    </template>

    <div v-else class="ba-button__loading">
      <BaLoadingBoxAnimation isSmall :isShow="isLoading" />
    </div>
  </button>
</template>

<script src="./index.ts" lang="ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
