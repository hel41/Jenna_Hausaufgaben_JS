<template>
  <div class="container">
    <tests v-if="testing"></tests>

    <div class="row mb-3">
      <div class="col">
        <nav-bar
          ref="navBar"
          :tests-open="testing"
          @toggle-tests="toggleTests"
          @dark_mode="toggleDarkmode"
          :darkOn="darkmode"
          :theme="theme"
        >
        </nav-bar>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <author-search
          ref="authorSearch"
          :autoren="authorsList"
          @select-author="sucheAutor"
        ></author-search>

        <books-list
          ref="booksListView"
          :site_="page"
          :windowSize_="windowSize"
          :booksList_="booksList"
          @updateselectedIndex_="updateselectedIndex"
          @booklist_="booklist"
        ></books-list>

        <books-list-pagination
          ref="booksListPagination"
          :site_="page"
        ></books-list-pagination>
      </div>

      <div class="col">
        <book-view></book-view>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorSearch from "./components/AuthorSearch.vue";
import BooksList from "./components/BooksList.vue";
import BooksListPagination from "./components/BooksListPagination.vue";
import BookView from "./components/BookView.vue";
import NavBar from "./components/NavBar.vue";
import Tests from "./components/Tests.vue";
import books from "./assets/books.json";

export default {
  name: "App",
  components: {
    AuthorSearch,
    BooksList,
    BooksListPagination,
    BookView,
    NavBar,
    Tests,
  },
  data() {
    return {
      page: 0,
      windowSize: 5,
      selectedIndex: 0,
      filterFn: () => {},

      lightThemeUrl:
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      darkThemeUrl:
        "https://cdn.jsdelivr.net/npm/bootstrap-dark-5@1.1.3/dist/css/bootstrap-night.min.css",
      testing: false,
      darkmode: false,
      theme:
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    };
  },
  computed: {
    booksList() {
      let a = books.sort((a, b) => a.title.localeCompare(b.title));
      a.forEach((e) => {
        e.authors = e.authors.replace(/;/g, ", ");
      });
      //this.buchListeSortiert = a
      return a;
    },
    authorsList() {
      let c = [];
      books.map((book) => {
        let b = book.authors.split(";");
        if (b.length > 1) {
          // mehrere Autoren teilen
          for (let index = 0; index < b.length; index++) {
            c.push(b[index]);
          }
        } else {
          c.push(b[0]);
        }
        
        return ;
      });
      const cleanArray = [];
      //leerzeichen am Anfang entfernen
      c.forEach((e) => {
        let a = e.trim();
        cleanArray.push(a);
        return a;
      });
      c = cleanArray;
      // doppelte Einträge entferne
      const filteredArray = c.filter(function (ele, pos) {
        return c.indexOf(ele) == pos;
      });
      // Array sortieren
      filteredArray.sort();

      return filteredArray;
    },
  },
  methods: {
    toggleTests() {
      this.testing = !this.testing;
    },
    updateselectedIndex(index) {
      console.log("app", index);
      this.selectedIndex = index;

      return [];
    },
    toggleDarkmode() {
      this.darkmode = !this.darkmode;
      let a = document.getElementById("bootstrap-theme");

      if (this.darkmode == true) {
        a.setAttribute("href", this.darkThemeUrl);
      } else {
        a.setAttribute("href", this.lightThemeUrl);
      }
    },
    sucheAutor() {},
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
