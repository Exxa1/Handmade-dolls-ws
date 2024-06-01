<template>
    <div>
    <div class="flex flex-col gap-5">
        {{item}}

        <div>
            <h2>Name</h2>
            <UInput type="text" v-model="item.title" />
        </div>

        <div>
            <h2>Price (€)</h2>
            <UInput type="number" v-model="item.price" />
        </div>

        <div>
            <h2>Images</h2>
            <div id="images" class="flex flex-row flex-wrap gap-5">
                <div v-for="img in item.imgPaths" :key="img">
                    <NuxtImg  :src="img" class="w-36" />
                    <UButton @click="item.imgPaths.splice(item.imgPaths.indexOf(img), 1)">Remove</UButton>
                </div>

                <UButton @click="item.imgPaths.push('')">Add image</UButton>
            </div>
        </div>

        <div>
            <h2>Height (cm)</h2>
            <UInput type="number" v-model="item.height" />
        </div>

        <div>
            <h2>Description</h2>
            <UTextarea v-model="item.description" />
        </div>

        <div class="flex flex-row gap-x-5">
            <UButton @click="save()">Save</UButton>
            <UButton @click="back()">Cancel and go back</UButton>
        </div>
    </div>
    </div>
</template>

<script setup>
import { _backdropBlur } from '#tailwind-config/theme';


const router = useRouter()


const { data:products } = await useFetch('/api/products')
const item = products.value.productsAPI[router.currentRoute.value.params.name]


function save() {
    if (confirm('Are you sure you want to save the new informations?')) {
        alert('Item saved');
    }
}

function back() {
    if (confirm('Are you sure you want to cancel? You will loose all unsaved informations.')) {
        router.back();
    }
    
}


</script>