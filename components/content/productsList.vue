<template>
    <div class="not-prose">
        <ul class="flex space-x-20">
            <li v-for="product in products" :key="product._path">
                <NuxtLink :to="product._path">{{ product.title }}</NuxtLink>
                <Carousel :productId="product.id"/>
                <MyButton>Get ME</MyButton>
            </li>
        </ul>
    </div>
</template>

<script setup>
const {data: products} = await useAsyncData('dolls', () => queryContent('/products').only(['title', '_path', 'id']).find())

</script>