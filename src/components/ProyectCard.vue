<template>
    <div class="mt-4 mb-4">
        <router-link
            :to="'/trip/' + tripid"
            class="ml-12 p-1 rounded-lg border-primary-orange border-2"
        >{{ tripname }}</router-link>
    </div>
</template>

<script setup>
defineProps(['tripname', 'tripid'])
</script>

<style scoped>
</style>