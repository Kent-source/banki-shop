<template>
  <article class="ba-home-page">
    <h1>Картины эпохи Возрождения</h1>

    <section class="ba-home-page__gallery">
      <BaPaintingsCard v-for="painting in paintingsList" :key="painting.id" :paintingData="painting" />
    </section>
  </article>
</template>

<script src="./index.ts" lang="ts" />
<style scoped lang="scss" src="./index.scss"/>
