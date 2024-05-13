<template>
    <div class="not-prose text-center"> 
        The component reads {{productId}}
        
        <!-- <img :src="`/img/dolls/id001/${productName}.png`"> -->
        
        <UCarousel v-slot="{ item }" :items="items" :ui="{item: 'basis-full'}" indicators
        :prev-button="{
        color: 'gray',
        // icon: 'i-heroicons-arrow-left-20-solid',
        class: '-left-5'
        }"
        :next-button="{
        color: 'gray',
        // icon: 'i-heroicons-arrow-right-20-solid',
        class: '-right-5'
        }"
        arrows
        class="w-64 mx-auto"
        >
        <img :src="item" class="w-full" draggable="false">
        </UCarousel>
    </div>
</template>

<script setup>
const props = defineProps(
    ['productId']
)

const { data:imgRoute } = await useFetch(`/api/products/${props.productId}`)

const items = imgRoute.value.imgPaths


</script>