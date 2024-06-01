<template>
    <div>
        <ul class="flex gap-16 flex-wrap">
            <li v-for="product in items" :key="product.id">
                <NuxtLink :to="`/admin/${product.id}`">{{ product.title }}
                    <NuxtImg class="w-20" width="200" height="300" :src="product.imgPaths[0]" />
                </NuxtLink>
            </li>
            <li>
                Add a doll
            </li>
        </ul>
    </div>
</template>

<script setup>

const { data:products } = await useFetch('/api/products')

console.log(products.value)

// const items = imgRoute.value.imgPaths
const items = products.value.productsAPI

// Load in all dolls
// Be able to click on them

</script>