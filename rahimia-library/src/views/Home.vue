<template>
  <div class="bg-grey-lighter text-white-lighter min-h-full">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App Umair good to see you again"/>
    <p>
      Lorem ipsum dolor greate to know
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
<style>
.btn {
  @apply
}
</style>
