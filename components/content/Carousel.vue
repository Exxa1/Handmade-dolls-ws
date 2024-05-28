<template>
    <div class="not-prose text-center"> 
        <!-- ID: {{productId}} -->
        
        <!-- <img :src="`/img/dolls/id001/${productName}.png`"> -->
        
        <UCarousel v-slot="{ item }" :items="items" :ui="{item: 'basis-full'}" indicators
        :prev-button="{
        color: 'gray',
        // icon: 'i-heroicons-arrow-left-20-solid',
        class: '-left-5 hidden lg:inline-flex'
        }"
        :next-button="{
        color: 'gray',
        // icon: 'i-heroicons-arrow-right-20-solid',
        class: '-right-5 hidden lg:inline-flex'
        }"
        arrows
        class="mx-auto mb-2"
        >
        <NuxtImg :src="item" class="w-full" draggable="false"/>
        </UCarousel>
    </div>
</template>

<script setup>
const props = defineProps(
    ['productId']
)

const { data:imgRoute } = await useFetch('/api/products', {

})

// const items = imgRoute.value.imgPaths
const items = imgRoute.value.productsAPI[props.productId].imgPaths


</script>