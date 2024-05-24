<script setup lang="ts">
import type { AgentsResponse } from '@/pocketbase-types'

defineProps<AgentsResponse>()

</script>

<template>

    <RouterLink :to="`/agents/${id}`" class="bg-gray-300 p-4 rounded-lg">
        <span>{{ prenom }} {{ nom }}</span>
    </RouterLink>
</template>

