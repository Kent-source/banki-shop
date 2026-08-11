<template>
  <div class="ba-loading-box" :class="{ isShow }" v-show="isShow">
    <BaLoadingAnimation class="ba-loading-box__animation" :isSmall="isSmall" :isAdaptive="isAdaptive" />
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./style.scss"></style>
