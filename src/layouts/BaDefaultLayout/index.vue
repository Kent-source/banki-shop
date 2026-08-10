<template>
  <main class="ba-default-layout">
    <header class="ba-default-layout__header">
      <div class="ba-default-layout__header-content ba-content-container">
        <BaDefaultHeader />
      </div>
    </header>

    <article class="ba-default-layout__body">
      <router-view></router-view>
    </article>

    <footer class="ba-default-layout__footer">
      <div class="ba-default-layout__footer-content ba-content-container">
        <BaDefaultFooter />
      </div>
    </footer>
  </main>
</template>

<script src="./index.ts" lang="ts" />
<style lang="scss" src="./index.scss" scoped />
