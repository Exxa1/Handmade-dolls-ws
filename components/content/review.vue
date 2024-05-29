<template>
    <div>
        <div class="not-prose m-4 bg-skin-button-hover text-white rounded-lg relative w-64">
            <div class="px-8 pt-5 pb-3">
                <slot name="content"/>
            </div>
            <div class="w-100 " />
            <div><UIcon class="text-red-700 absolute bottom-4 left-1/2" name="i-heroicons-heart-solid" /></div>
            <div class="px-5 pb-3 m-0 text-right">
                <slot name="name" />
            </div>
        </div>
    </div>
</template>