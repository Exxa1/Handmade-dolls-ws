<template>
    <div>
        <ul>
            <!-- <li v-for="doll in dolls" :key="doll._path">
                <NuxtLink :to="doll._path">{{ doll.title }}</NuxtLink>
            </li> -->
        </ul>
        <!-- {{ products }} -->
    </div>
</template>

<script setup>
const {dolls} = await useAsyncData('products', () => queryContent('/products/').only('_path', 'title').find())
// console.log(dolls)
</script>