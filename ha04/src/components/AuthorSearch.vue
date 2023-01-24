<template>

  <input type="text" v-on:change="testSearch">
  <img src='@/assets/AuthorSearch.jpg' class='img-fluid rounded' alt=''>
</template>

<script>
export default {
  name: 'AuthorSearch',
  methods: {
    testSearch(author) {
      this.$emit('select-author', author);
    }
  },
  props:["autoren"],
  /* data(){
    return{
      autoren:""
    }
  } */
}
</script>