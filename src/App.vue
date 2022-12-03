<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppLayout from '@/components/AppLayout.vue'
import CocktailList from '@/components/CocktailList.vue'

import '@/assets/App.scss'
</script>

<template>
  <AppLayout>
    <CocktailList />
  </AppLayout>
</template>

<style></style>
