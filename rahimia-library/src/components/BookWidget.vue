<template>
    <div class="w-32 mx-2 my-3">
        <div class="h-42 flex-none bg-cover text-center overflow-hidden" style="background-image: url('https://tailwindcss.com/img/card-top.jpg')" title="Woman holding a mug">
        </div>
        <div class="pt-2 flex justify-between leading-normal">
            <div class="mb-8">
                <p class="text-grey-darker text-sm">{{name}}</p>
                <p class="text-grey-dark text-xs">{{info.author}}</p>
            </div>
            <a href="#">
                <svg class="fill-current text-green hover:text-green-darker" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  props: ['name', 'info'],
};
</script>
