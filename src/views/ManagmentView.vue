<template>
    <ProyectCard
        :tripname="proyect.tripname"
        :tripid="proyect.tripid"
        v-for="(proyect, i) in proyects"
        :key="i"
    ></ProyectCard>
    <CreateTripCard></CreateTripCard>
</template>

<script setup>
import CreateTripCard from '../components/CreateTripCard.vue';
import ProyectCard from '../components/ProyectCard.vue';

const proyects = [
    {
        tripname: 'Poland', tripid: '1'
    },
    {
        tripname: 'Peru', tripid: '2'
    }
]

</script>

<style scoped>
</style>