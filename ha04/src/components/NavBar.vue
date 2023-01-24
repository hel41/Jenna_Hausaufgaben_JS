<template>
  <nav class="navbar navbar-light bg-light border rounded mt-2">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i class="bi bi-book-half"></i>
        HAUSAUFGABE 4
      </a>

      <div>
        <!-- TODO: implement -->
        <!-- <img src='@/assets/ButtonDarkMode.jpg' width ='114' class='rounded float-end' alt=''> -->
        <button id="btn-dark-mode" @click="toggleDarkMode">
          {{ darkOn ? "Lights on" : "Lights off" }}
        </button>
        <button class="btn btn-primary me-3" type="submit" @click="toggleTests">
          <i class="bi bi-robot"></i>
          {{ !testsOpen ? "Run tests" : "Close tests" }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: ["testsOpen", "darkOn", "theme"],
  methods: {
    toggleDarkMode() {
        this.$emit("dark_mode");
    //   let a = document.getElementById("bootstrap-theme")
    //   a.setAttribute('href', this.theme)
    //   console.log(a)
     },
    toggleTests() {
      this.$emit("toggle-tests");
    },
  },
};
</script>
<style>

</style>