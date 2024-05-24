<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'
import { useRoute } from 'vue-router/auto'
import { infoAgent, maisonsAgent } from '@/backend'

const route = useRoute('/agents/[id]')
console.log('id : ', route.params.id)

const agent = await infoAgent(route.params.id)
console.log(agent)
/* const maisonsListe = await maisonsAgent(route.params.id) */
const maisonsListe = await maisonsAgent(route.params.id)
console.log(maisonsListe)

</script>

<template>
  <div class="mt-10">
    <h1 class="text-xl">{{ agent.prenom }} {{ agent.nom }}</h1>
    <h2>Offres gérés</h2>
    <div class="flex">
        <MaisonCard v-for="maison in maisonsListe" v-bind="maison" :key="maison.id" />
    </div>
  </div>
</template>