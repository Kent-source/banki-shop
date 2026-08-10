<template>
  <main class="ba-default-layout">
    <div class="ba-default-layout__header">
      <div class="ba-default-layout__header-content ba-content-container">
        <BaDefaultHeader />
      </div>
    </div>

    <div class="ba-default-layout__body">
      <router-view></router-view>
    </div>
  </main>
</template>

<script src="./index.ts" lang="ts" />
<style lang="scss" src="./index.scss" scoped />
