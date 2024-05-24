<script setup lang="ts">
import AgentCard from '../../components/AgentCard.vue'
import { allAgentsSorted } from '@/backend'

const agentsListe = await allAgentsSorted()
</script>

<template>
    <AgentCard v-for="agent in agentsListe" v-bind="agent" :key="agent.id" />
</template>