<template>
    <div>
        <div class="mb-4 ml-2 tracking-wide flex items-center">
            <div class="mr-4">{{sectionHeading}}</div>
            <div class="text-xs bg-purple-lightest text-purple-dark px-4 py-2 rounded-full">{{tag}}</div>
        </div>
        <div class="flex flex-wrap mb-3 sm:justify-between md:justify-start">
            <div v-for="book of books" :key="book.id">
                <book-widget class=""
                             :name="book.name"
                             :info="book"></book-widget>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import BookWidget from './BookWidget.vue';

export default {
  name: 'home',
  props: ['books', 'sectionHeading', 'tag'],

  data: () => ({}),

  components: {
    BookWidget,
  },
};
</script>
<style>
    .btn {
        @apply
    }
</style>
