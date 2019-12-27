<template>
  <div class="home container-fluid">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div class="row home-container">
      <div class="col-12 pb-5">
        <h1 class="mt-5">Bug-A-Boos Everywhere</h1>
      </div>
      <div class="col-12 pt-5">
        <h3>Report Your Bug!</h3>
        <router-link :to="{name:'bugs'}">
          <button class="btn p-3 mt-3">
            <h5>Go Now!</h5>
          </button>
        </router-link>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-12 card col-md-4">
        <h2>BUG</h2>
        <p>Report a Bug</p>
      </div>
      <div class="col-12 card col-md-4">
        <h2>BUG</h2>
        <p>We fix it</p>
      </div>
      <div class="col-12 card col-md-4">
        <h2>BUG</h2>
        <p>You're happy</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>

<style>
.btn {
  color: orange;
  background-color: white;
  font-weight: bold;
}
.home-container {
  background-color: orange;
  color: white;
  padding-top: 2em;
  padding-bottom: 4.5em;
}
.card {
  min-height: 10em;
  justify-content: space-around;
}
</style>
