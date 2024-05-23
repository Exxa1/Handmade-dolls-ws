<template>
    <div class="not-prose text-center p-3">
        <NuxtLink :to="{ path: '/contact', query: { reasonForContacting: 'buy-a-doll', id:productId } }">
          <button class="px-4 py-2 bg-skin-button-hover text-white border hover:bg-opacity-70 w-20">
            <slot/>
          </button>
        </NuxtLink>
    </div>
</template>

<script setup>

const props = defineProps(
    ['productId']
)

// console.log(props.productId)

</script>