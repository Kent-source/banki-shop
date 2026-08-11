<template>
  <article class="ba-home-page">
    <h1>Картины эпохи Возрождения</h1>

    <section class="ba-home-page__paintings">
      <div v-if="filteredPaintingsList.length" class="ba-home-page__paintings-gallery">
        <BaPaintingsCard v-for="painting in filteredPaintingsList" :key="painting.id" :paintingData="painting" />
      </div>

      <div v-else class="ba-home-page__paintings-gallery-empty">
        <span class="ba-home-page__paintings-gallery-empty-text">Картин по названию не найдено</span>
      </div>
    </section>
  </article>
</template>

<script src="./index.ts" lang="ts" />
<style scoped lang="scss" src="./index.scss"/>
