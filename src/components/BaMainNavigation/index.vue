<template>
  <nav class="ba-main-navigation">
    <router-link v-for="navigationLink in navigationLinksConfig" :key="navigationLink.label" :to="navigationLink.link">
      {{ navigationLink.label }}
    </router-link>
  </nav>
</template>

<script src="./index.ts" lang="ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
