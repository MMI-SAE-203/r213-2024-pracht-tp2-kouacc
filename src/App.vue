<script setup lang="ts">
import { onErrorCaptured } from 'vue'
import { RouterLink, RouterView } from 'vue-router/auto'
import { MaisonCard } from '@/components/MaisonCard.vue'

onErrorCaptured((err, instance, info) => {
  console.error('erreur : ', err, '\ninfo : ', info, '\ncomposant : ', instance)
  return true
})
  
</script>

<template>
  <header>
    <nav>
  <ul>
    <li>
      <RouterLink to="/">Accueil</RouterLink>
    </li>
    <li>
      <RouterLink to="/offres">Toutes les offres</RouterLink>
    </li>
    <li>
      <RouterLink to="/agents">Tous les agents</RouterLink>
    </li>
  </ul>
</nav>
  </header>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </RouterView>
</template>
