<template>
    <div class="not-prose">
        <ul class="flex flex-col">
            <li v-for="review in topReviews" :key="review.ID">
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
const topReviews = reviews.slice(0, 3);

</script>