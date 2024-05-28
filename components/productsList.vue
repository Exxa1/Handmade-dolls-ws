<template>
    <div class="not-prose">
        <ul class="flex flex-wrap justify-center gap-24 lg:gap-x-32">
            <li v-for="product in products" :key="product._path" class="w-min">
                <Carousel :productId="product.id" :useInProductlist="true"/>
                <div class="text-2xl text-center flex flex-row justify-center space-x-2">
                    <h3>{{ product.title }}</h3>
                    <p>-</p>
                    <h3>{{ product.price }}</h3>
                </div>
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
const {data: products} = await useAsyncData('dolls', () => queryContent('/products').only(['title', '_path', 'id', 'price']).find());
</script>