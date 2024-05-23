<template>
    <div class="not-prose">
        <ul class="flex flex-wrap justify-evenly gap-8 lg:gap-16">
            <li v-for="product in products" :key="product._path" class="w-min">
                <Carousel :productId="product.id"/>
                <div class="text-2xl text-center">{{ product.title }}</div>
                <div class="flex flex-row justify-center">
                    <SeeMoreButton :toPath="product._path" />
                    <MyButton :productId="product.id" />
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

// retrieves the products using NUXT CONTENT's query
const {data: products} = await useAsyncData('dolls', () => queryContent('/products').only(['title', '_path', 'id']).find())

</script>