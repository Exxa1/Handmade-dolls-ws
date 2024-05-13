<template>
    <div>
        <nav class="drop-shadow-sm text-skin-base text-xl border-b p-2">
            <div class="h-24 flex flex-col items-center justify-center">
                <ul class="flex flex-row space-x-12 justify-center">
                    <li><NuxtLink to="/">Product List</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                    <li><NuxtLink to="/aboutme">About Me</NuxtLink></li>
                    <li><NuxtLink to="/" class="flex space-x-2">
                        <div class="w-5">
                            <img src="/fb.png"/>
                        </div>
                        <div class="w-5">
                            <img src="/instagram.png"/>
                        </div>
                    </NuxtLink></li>
                </ul>
            </div>
            <div class="text-center">
                <div id="logo">Zsuzsánna Hand-made</div>
            </div>
        </nav>
    </div>
</template>