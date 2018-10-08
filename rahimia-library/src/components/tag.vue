<template>
    <div class="`text-xs px-4 py-2 rounded-full`" v-bind="{}">{{tag}}</div>
</template>

<script>
export default {
  props: ['text', 'color'],
};
</script>
