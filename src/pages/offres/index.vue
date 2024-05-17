<script setup lang="ts">
import MaisonCard from '../../components/MaisonCard.vue'
import { allMaisonSorted } from '@/backend'

const maisonsListe = await allMaisonSorted()

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <ul>
    <li v-for="uneMaison of maisonsListe" :key="uneMaison.id">
    <RouterLink
      :to="{
        name: '/offres/[id]',
        params: {
          id: uneMaison.id
        }
      }"
      class="text-red-400 hover:text-red-600"
    >
      {{ uneMaison.nomMaison }}
    </RouterLink>
  </li>
</ul>
</template>
