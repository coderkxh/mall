<script setup>
import { RouterView } from 'vue-router'
import TabbarView from 'components/common/TabbarView.vue';
</script>

<template>
  <div>
    <p>坎坎坷坷</p>
    <RouterView />
    <TabbarView/>
  </div>
</template>

<style>
@import 'assets/css/normalize.css'
</style>
