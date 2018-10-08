<template>
    <basic-layout>
        <books-section :books="books" section-heading="Forum Books" tag="study-material" color="orange"></books-section>
        <books-section :books="books2" section-heading="Majallah" tag="monthly-paper" color="orange"></books-section>
    </basic-layout>
</template>

<script>
// @ is an alias to /src
import BooksSection from '@/components/BooksSection.vue';
import BasicLayout from '@/components/BasicLayout.vue';

export default {
  name: 'home',

  data: () => ({
    books: [
      {
        id: 1,
        name: 'Book Title',
        downloadUrl: '#',
        author: 'Mr. Poe',
        publishYear: '2018',
        synopsis: 'lorem ispum dummy string',
      },
      {
        id: 2,
        name: 'Book Title',
        downloadUrl: '#',
        author: 'Mr. Poe',
        publishYear: '2018',
        synopsis: 'lorem ispum dummy string',
      },
      {
        id: 3,
        name: 'Book Title',
        downloadUrl: '#',
        author: 'Mr. Poe',
        publishYear: '2018',
        synopsis: 'lorem ispum dummy string',
      },
      {
        id: 4,
        name: 'Book Title',
        downloadUrl: '#',
        author: 'Mr. Poe',
        publishYear: '2018',
        synopsis: 'lorem ispum dummy string',
      },
      {
        id: 5,
        name: 'Book Title',
        downloadUrl: '#',
        author: 'Mr. Poe',
        publishYear: '2018',
        synopsis: 'lorem ispum dummy string',
      },
      {
        id: 6,
        name: 'Book Title',
        downloadUrl: '#',
        author: 'Mr. Poe',
        publishYear: '2018',
        synopsis: 'lorem ispum dummy string',
      },
      {
        id: 6,
        name: 'Book Title',
        downloadUrl: '#',
        author: 'Mr. Poe',
        publishYear: '2018',
        synopsis: 'lorem ispum dummy string',
      },{
        id: 6,
        name: 'Book Title',
        downloadUrl: '#',
        author: 'Mr. Poe',
        publishYear: '2018',
        synopsis: 'lorem ispum dummy string',
      },{
        id: 6,
        name: 'Book Title',
        downloadUrl: '#',
        author: 'Mr. Poe',
        publishYear: '2018',
        synopsis: 'lorem ispum dummy string',
      },{
        id: 6,
        name: 'Book Title',
        downloadUrl: '#',
        author: 'Mr. Poe',
        publishYear: '2018',
        synopsis: 'lorem ispum dummy string',
      },
    ],

    books2: [
      {
        id: 1,
        name: 'Book Title',
        downloadUrl: '#',
        author: 'Mr. Poe',
        publishYear: '2018',
        synopsis: 'lorem ispum dummy string',
      },{
        id: 2,
        name: 'Book Title',
        downloadUrl: '#',
        author: 'Mr. Poe',
        publishYear: '2018',
        synopsis: 'lorem ispum dummy string',
      },{
        id: 3,
        name: 'Book Title',
        downloadUrl: '#',
        author: 'Mr. Poe',
        publishYear: '2018',
        synopsis: 'lorem ispum dummy string',
      },{
        id: 4,
        name: 'Book Title',
        downloadUrl: '#',
        author: 'Mr. Poe',
        publishYear: '2018',
        synopsis: 'lorem ispum dummy string',
      },
    ]
  }),

  components: {
    BooksSection,
    BasicLayout
  },
};
</script>
<style>
    .btn {
        @apply
    }
</style>
