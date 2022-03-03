<template>
    <div name="roadtripcard" class="border-t-1 border-dark-900 inline-flex mt-7 mb-4">
        <div
            class="before:{ w-1 h-1 bg-dark-900 rounded-full} ml-30 mr-10 justify-center relative flex"
        >{{ firstPlace }}</div>

        <template v-for="(item, index) in places" :key="index">
            <div class="transform translate-x-23 translate-y-[-100%]">{{ distances[index] }}km</div>
            <div class="transform translate-x-10 text-xs text-blue-gray-400">{{ times[index] }}</div>
            <div
                class="before:{ w-1 h-1 bg-dark-900 rounded-full} ml-40 mr-30 justify-center relative flex"
            >{{ props.places[index] }}</div>
        </template>
    </div>
</template>

<script setup>
const props = defineProps(['places', 'distances', 'times'])

const firstPlace = props.places.shift()

</script>

<style scoped>
</style>