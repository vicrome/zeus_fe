<template>
    <h2
        class="text-white font-bold text-center pt-2 pb-10"
    >Plan your next trip to: {{ tripname }}!! 🔥🔥</h2>
    <div name="actions" class="flex flex-row ml-[4%]">
        <button class="cbutton" @click="addFlight()">Add Flights ✈️</button>
        <button class="cbutton" @click="addNight()">Add a Night 🏡</button>
        <button class="cbutton" @click="addRoadtrip()">Add a Roadtrip 🚗🛣️</button>
        <button class="cbutton" @click="selectFriends()">Select Friends: {{ nFriends }} 👬</button>
        <button class="cbutton" @click="selectBudget()">Budget: {{ budgetType }} 💸</button>
    </div>

    <div class="wrapper mt-8 ml-[4%] pl-12">
        <div>Itinerary:</div>
        <div name="content" class="content ml-10 pb-6">
            <component
                :is="lookup[option.__typename]"
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
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const nFriends = ref(1);
const budgetType = ref('Cheap');
const options = ref();
const tripname = ref('Poland');

const route = useRoute()
console.log(route.params.tripid)

const lookup = {
    FlightCard,
    NightCard,
    RoadtripCard
}

options.value = [
    {
        __typename: 'FlightCard',
        propsData: { 'fromAirport': 'VLL', fromTime: '10:10', toAirport: 'LON', toTime: '15:15', price: '288' }
    },
    {
        __typename: 'NightCard',
        propsData: { nDays: 2, place: 'Warsaw', price: '77' }
    },
    {
        __typename: 'RoadtripCard',
        propsData: { places: ['Warsaw', 'Cracow'], distances: ['120'], times: ['1h20m'] }
    },
    {
        __typename: 'NightCard',
        propsData: { nDays: 2, place: 'Warsaw', price: '88' }
    },
    {
        __typename: 'FlightCard',
        propsData: { fromAirport: 'VLL', fromTime: '10:10', toAirport: 'LON', toTime: '15:15', price: '288' }
    }
]

const options_total = [
    {
        id: '1',
        data: [
            {
                __typename: 'FlightCard',
                propsData: { 'fromAirport': 'VLL', fromTime: '10:10', toAirport: 'LON', toTime: '15:15', price: '288' }
            },
            {
                __typename: 'RoadtripCard',
                propsData: { places: ['Warsaw', 'Cracow'], distances: ['120'], times: ['1h20m'] }
            },
            {
                __typename: 'NightCard',
                propsData: { nDays: 2, place: 'Warsaw', price: '88' }
            },
            {
                __typename: 'FlightCard',
                propsData: { fromAirport: 'VLL', fromTime: '10:10', toAirport: 'LON', toTime: '15:15', price: '288' }
            }]
    },
    {
        id: '2',
        data: [
            {
                __typename: 'FlightCard',
                propsData: { 'fromAirport': 'VLL', fromTime: '10:10', toAirport: 'LON', toTime: '15:15', price: '288' }
            },
            {
                __typename: 'FlightCard',
                propsData: { fromAirport: 'VLL', fromTime: '10:10', toAirport: 'LON', toTime: '15:15', price: '288' }
            }]
    },
]

const proyects = [
    {
        tripname: 'Poland', tripid: '1'
    },
    {
        tripname: 'Peru', tripid: '2'
    }
]

fetchData(route.params.tripid)
// options.value = fetchData(route.params.tripid)


const budget_options = [
    {
        name: 'Cheap',
        propierties: {
            food: '30',
            gas: '10',
            sleep: '12'
        }
    },
    {
        name: 'Mid',
        propierties: {
            food: '45',
            gas: '10',
            sleep: '18'
        }
    },
    {
        name: 'Luxury',
        propierties: {
            food: '60',
            gas: '10',
            sleep: '35'
        }
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

function selectFriends() {
    console.log(nFriends.value + " friends selected!!👬")
}

function selectBudget() {
    console.log(budgetType.value + " budget selected!!💸")
}


function fetchData(toParams) {
    console.log('fetching..')
    console.log(toParams)
    options.value = options_total.find(item => item.id == toParams).data
    tripname.value = proyects.find(trip => trip.tripid == toParams).tripname
}


watch(
    () => route.params.tripid, (toParams, prevParams) => {
        fetchData(toParams)
    }
)

</script>

<style scoped>
</style>