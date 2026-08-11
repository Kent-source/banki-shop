<template>
  <div class="ba-search-block">
    <input class="ba-search-block__input" :placeholder="placeholder" @input="(event) => handleInput(event)" />

    <BaButton maxWidth="122px"> Найти </BaButton>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
