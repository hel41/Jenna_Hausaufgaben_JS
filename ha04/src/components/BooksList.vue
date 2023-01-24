<template>
  <div id="books">
    <div
      class="book"
      v-for="book in this.booklist_"
      v-bind:key="book"
      @click="selectItem(book)"
    >
      <div class="book-title">{{ book.title }}</div>
      <div class="book-authors">{{ book.authors }}</div>
    </div>
  </div>
  <!-- <img src='@/assets/BooksList.jpg' class='img-fluid rounded' alt=''> -->
</template>

<script>
export default {
  name: "BooksList",
  props: ["site_", "windowSize_", "booksList_"],
  
  methods: {
    selectItem(e) {
      let id = this.booksList_.findIndex((p) => p.isbn13 == e.isbn13);
      console.log(id);
      this.$emit("updateselectedIndex_",id)
      return ;
    }
  },
  computed: {
    booklist_() {
      let a = this.site_ * this.windowSize_;
      let b = a + this.windowSize_;
      let c = this.booksList_.slice(a, b);
      this.$emit("booklist_", c)
      return c;
    },
  }
  
  
};
</script>
<style>
.book {
  border: 1.5px solid rgb(182, 182, 182);
  padding: 10px 20px;
  font-size: 0.8em;
  /* background: rgb(232, 232, 232); */
}
.book:first-of-type {
  border-radius: 5px 5px 0px 0px;
}
.book:last-of-type {
  border-radius: 0px 0px 5px 5px;
}
.book-title {
  font-weight: bolder;
}
#books {
  margin-bottom: 10px;
}
</style>
