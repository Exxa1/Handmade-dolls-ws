<template>
    <div class="not-prose"> 
        The component reads {{productName}}
        
        <!-- <img :src="`/img/dolls/id001/${productName}.png`"> -->
        
        <UCarousel v-slot="{ item }" :items="items" :ui="{item: 'basis-full', container: 'rounded-lg'}"
        :prev-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-left-20-solid',
        class: '-left-12'
        }"
        :next-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-right-20-solid',
        class: '-right-12'
        }"
        arrows
        class="w-64 mx-auto"
        >
        <img :src="item" class="w-full" draggable="false">
        </UCarousel>
    </div>
</template>

<script setup>
defineProps(
    ['productName']
)

const items = [
  '/img/dolls/id001/Artboard 1.png',
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=4',
  'https://picsum.photos/600/800?random=5',
  'https://picsum.photos/600/800?random=6'
]
</script>