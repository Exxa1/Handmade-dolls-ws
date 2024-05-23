<template>
    <div class="not-prose text-center p-3">
        <NuxtLink :to="toPath">
            <button class="px-4 py-2 bg-skin-button border hover:bg-opacity-70 w-20">
            <slot/>
            </button>
        </NuxtLink>
    </div>
</template>

<script setup>

const props = defineProps(
    ['toPath']
)

// console.log(props.productId)

</script>