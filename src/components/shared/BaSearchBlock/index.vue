<template>
  <div class="ba-search-block">
    <input
      class="ba-search-block__input"
      :value="inputValue"
      :placeholder="placeholder"
      @input="(event) => handleInputEvent(event)"
    />

    <BaButton maxWidth="122px"> Найти </BaButton>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
