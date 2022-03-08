<template>
    <div name="flightcard">
        <div
            class="flight-card rounded-lg border-primary-orange border-2 flex-row inline-flex mt-4 mb-4 min-w-[340px]"
        >
            <div class="flex justify-center mt-2 ml-4 mb-2 mr-4">
                <div>
                    <div class="from">{{ fromAirport }}</div>
                    <div class="mr-1">{{ fromTime }}</div>
                </div>
                <div class="flex flex-col justify-center">
                    <div class="flex">
                        <div class="border-2 border-gray-600 inset-1 w-24 h-1 mt-2.5 mr-1 ml-2"></div>
                        <svg
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 12 12"
                            enable-background="new 0 0 12 12"
                            xml:space="preserve"
                            class="w-4 h-4 mt-1 mr-2"
                        >
                            <path
                                fill="#898294"
                                d="M3.922,12h0.499c0.181,0,0.349-0.093,0.444-0.247L7.949,6.8l3.233-0.019C11.625,6.791,11.989,6.44,12,6 c-0.012-0.44-0.375-0.792-0.818-0.781L7.949,5.2L4.866,0.246C4.77,0.093,4.602,0,4.421,0L3.922,0c-0.367,0-0.62,0.367-0.489,0.71 L5.149,5.2l-2.853,0L1.632,3.87c-0.084-0.167-0.25-0.277-0.436-0.288L0,3.509L1.097,6L0,8.491l1.196-0.073 C1.382,8.407,1.548,8.297,1.632,8.13L2.296,6.8h2.853l-1.716,4.49C3.302,11.633,3.555,12,3.922,12"
                            />
                        </svg>
                    </div>
                    <div class="mr-1 self-center">1h 20m</div>
                </div>
                <div>
                    <div class="to">{{ toAirport }}</div>
                    <div class="mr-1">{{ toTime }}</div>
                </div>
            </div>

            <div class="items-center flex mr-2">{{ price }}€</div>
        </div>
    </div>
</template>

<script setup>
defineProps(['fromAirport', 'fromTime', 'toAirport', 'toTime', 'price'])
</script>

<style scoped>
</style>