<template>
  <button
    id="pagination-back-button"
    v-bind:class="{ disabled: siteMinus() }"
    v-on:click="siteMinus"
  >
    Zurück
  </button>
  <button
    id="pagination-next-button"
    v-bind:class="{ disabled:sitePlus() }"
    v-on:click="sitePlus"
  >
    Next
  </button>
  <!-- TODO: implement me -->
  <!-- <img src='@/assets/BooksListPagination.jpg' class='img-fluid rounded' alt=''> -->
</template>

<script>
export default {
  name: "BooksListPagination",
  props: ["site_"],
  data() {},
  computed: {
    
  },
  methods: {
    sitePlus() {
      if(this.site_ === 1361){
        return true
      }
      return false;
    },
    siteMinus() {
      if(this.site_ === 0){
        return true
      }
      return false;
    },
  },
};
</script>
<style>
.disabled{
  background: red;
}
</style>
