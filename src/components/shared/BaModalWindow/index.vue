<template>
  <div class="ba-modal-window">
    <div class="ba-modal-window__substrate" @click="emitCloseModal"></div>

    <div class="ba-modal-window__content">
      <slot></slot>
    </div>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
