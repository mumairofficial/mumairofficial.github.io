<template>
    <basic-layout class="tracking-wide text-center line flex justify-around" style="line-height: 1.5rem;">
        <div class="max-w-lg">
            <p>
                My name is Umair, I am professional software engineer & mostly busy in Open Source community, you can
                reach me by
                following links:
            </p>
            <div class="mt-6">
                <a class="mr-4 no-underline text-grey-darkest hover:text-green hover:underline" href="#">LinkedIn</a>
                <a class="mr-4 no-underline text-grey-darkest hover:text-green hover:underline" href="#">GitHub</a>
                <a class="mr-4 no-underline text-grey-darkest hover:text-green hover:underline" href="#">Twitter</a>
                <a class="mr-4 no-underline text-grey-darkest hover:text-green hover:underline" href="#">Facebook</a>
            </div>
        </div>
    </basic-layout>
</template>

<script>
import BasicLayout from '@/components/BasicLayout.vue';

export default {
  components: {
    BasicLayout,
  },
};
</script>
