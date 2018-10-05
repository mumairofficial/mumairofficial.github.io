<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App Umair good to see you"/>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, fugiat? Consequatur nemo officiis magnam facere! Beatae suscipit cum nam molestias eos libero illum magnam deserunt nobis! Officia esse dolore qui?
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld
  }
};
</script>
