<template>
    <div>
        <nav class="drop-shadow-sm text-skin-base text-xl border-b p-2">
            <div class="h-24 flex flex-col items-center justify-center">
                <ul class="flex flex-row space-x-12 justify-center">
                    <li><NuxtLink to="/">Product List</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                    <li><NuxtLink to="/aboutme">About Me</NuxtLink></li>
                    <li class="flex space-x-4">
                        <NuxtLink to="https://www.facebook.com/mesehely" target="_blank" iv class="w-5">
                            <img src="/fb.png"/>
                        </NuxtLink>
                        <NuxtLink to="https://www.instagram.com/mesehely/" target="_blank"  class="w-5">
                            <img src="/instagram.png"/>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="text-center">
                <NuxtLink to="/"><div id="logo">Zsuzsánna Hand-made</div></NuxtLink>
            </div>
        </nav>
    </div>
</template>