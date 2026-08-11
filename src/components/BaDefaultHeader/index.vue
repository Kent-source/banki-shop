<template>
  <div class="ba-default-header">
    <BaMainNavigation />

    <div class="ba-default-header__search">
      <BaSearchBlock :inputValue="searchValue" placeholder="Поиск по названию картины" @onInput="setQueryForSearch" />
    </div>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
