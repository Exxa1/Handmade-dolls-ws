<template>
    <div class="not-prose">
        <ul class="flex flex-col">
            <li v-for="review in reviews" :key="review.ID">
                <Review>
                    <template #content>{{ review.content }}</template>
                    <template #name>{{ review.name }}</template>
                </Review>
            </li>
        </ul>
    </div>
</template>

<script setup>

import reviews from '~/data/reviews.json'

</script>