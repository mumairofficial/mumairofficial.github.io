<template>
  <div id="app" class="min-h-100 min-w-100">
    <app-toolbar-waterfall></app-toolbar-waterfall>
    <div class="w-full mx-6 md:container md:mx-auto mt-12">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppToolbarWaterfall from '@/components/AppToolbarWaterfall.vue';

export default {
  components: {
    AppToolbarWaterfall,
  },
};

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
