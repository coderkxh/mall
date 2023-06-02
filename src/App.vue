<script setup>
import { RouterView } from 'vue-router'
import TabbarView from 'components/common/tabbar/TabbarView.vue';
</script>

<template>
  <div>
    <RouterView />
    <TabbarView/>
  </div>
</template>

<style>
@import 'assets/css/normalize.css'
</style>
