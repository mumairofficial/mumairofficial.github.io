<template>
    <div class="">
        <div class="flex flex-col justify-around text-center w-full">
            <div class="py-4 flex items-center justify-center mt-4">
                <svg class="fill-current text-green mr-2" xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                     viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/>
                </svg>
                <div class="text-2xl tracking-wide">
                    <span class="font-bold text-green">Sample</span>
                    <span class="font-light text-grey-dark">Library</span>
                </div>
            </div>

            <div class="tracking-wide uppercase text-sm mt-8">
                <router-link to="/" class="mr-6 no-underline text-grey-dark border-b-2 border-transparent pb-6"
                             exact-active-class="text-green border-green">Home
                </router-link>

                <router-link to="/request-book"
                             class="mr-6 no-underline text-grey-dark border-b-2 border-transparent pb-6"
                             exact-active-class="text-green border-green">Request Book
                </router-link>

                <router-link to="/about" class="no-underline text-grey-dark border-b-2 border-transparent pb-6"
                             exact-active-class="text-green border-green">About
                </router-link>
            </div>
        </div>
    </div>
</template>
