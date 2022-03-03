<template>
    <div name="actions" class="flex flex-row ml-[4%]">
        <button class="cbutton" @click="addFlight()">Add Flights ✈️</button>
        <button class="cbutton" @click="addNight()">Add a Night 🏡</button>
        <button class="cbutton" @click="addRoadtrip()">Add aRoadtrip 🚗🛣️</button>
        <button class="cbutton" @click="addRoadtrip()">Add Friends: 4 👬</button>
        <button class="cbutton" @click="addRoadtrip()">Budget: Cheap 💸</button>
    </div>

    <div class="wrapper mt-8 ml-[4%] pl-12">
        <div>Itinerary:</div>
        <div name="content" class="content ml-10 pb-6">
            <component
                :is="lookup[option.type]"
                v-for="(option, index) in options"
                v-bind="option.propsData"
                :key="index"
            ></component>
        </div>
        <hr />
        <div name="presupuesto" class="ml-[30%] mb-20 pt-6">
            <p>
                Presupuesto total por persona :
                <strong>200€</strong>
            </p>
            <p>
                Asumiendo gastos como comida a
                <strong>40€/dia</strong>
            </p>
            <p>
                Y sumandole la gasolina a
                <strong>10€/100km</strong>, se queda en:
            </p>
            <hr class="max-w-[38%]" />
            <p class="ml-80">
                <strong>TOTAL: 327€</strong>
            </p>
        </div>
    </div>
</template>

<script setup>
import FlightCard from '@/components/FlightCard.vue';
import NightCard from '@/components/NightCard.vue';
import RoadtripCard from '@/components/RoadtripCard.vue';
import { useRoute } from 'vue-router';


const lookup = {
    FlightCard,
    NightCard,
    RoadtripCard
}

const options = [
    {
        type: 'FlightCard',
        propsData: { fromAirport: 'VLL', fromTime: '10:10', toAirport: 'LON', toTime: '15:15', price: '288' }
    },
    {
        type: 'NightCard',
        propsData: { nDays: 2, place: 'Warsaw', price: '77' }
    },
    {
        type: 'RoadtripCard',
        propsData: { places: ['Warsaw22', 'Cracow'], distances: ['120'], times: ['1h20m'] }
    },
    {
        type: 'NightCard',
        propsData: { nDays: 2, place: 'Warsaw', price: '77' }
    },
    {
        type: 'FlightCard',
        propsData: { fromAirport: 'VLL', fromTime: '10:10', toAirport: 'LON', toTime: '15:15', price: '288' }
    }
]


function addFlight() {
    console.log("New Flight added!!✈️")
}

function addNight() {
    console.log("New Night added!!🌃")
}

function addRoadtrip() {
    console.log("New Roadtrip added!!🚗")
}

const route = useRoute()

console.log(route.params.tripid)
/*
watch(
      () => route.params.id,
      async newId => {
        userData.value = await fetchUser(newId)
      }
    )
*/
</script>

<style scoped>
</style>