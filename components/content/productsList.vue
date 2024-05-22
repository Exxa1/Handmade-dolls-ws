<template>
    <div class="not-prose">
        <ul class="flex space-x-20">
            <li v-for="product in products" :key="product._path">
                <div>{{ product.title }}</div>
                <Carousel :productId="product.id"/>
                <SeeMoreButton :toPath="product._path">See More</SeeMoreButton>
                <MyButton :productId="product.id">Get ME</MyButton>
            </li>
        </ul>
    </div>
</template>

<script setup>
const {data: products} = await useAsyncData('dolls', () => queryContent('/products').only(['title', '_path', 'id']).find())

</script>