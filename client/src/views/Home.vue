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
    <div class="row pt-3 pb-4 bg-grey">
      <div class="col-12 card col-md-4 bg-grey">
        <i class="fas fa-bug"></i>
        <p>Report a Bug</p>
      </div>
      <div class="col-12 card col-md-4 bg-grey">
        <i class="fas fa-tools"></i>
        <p>We fix it</p>
      </div>
      <div class="col-12 card col-md-4 bg-grey">
        <i class="fas fa-laugh-beam"></i>
        <p>You're happy</p>
      </div>
    </div>
    <div class="row info-container align-items-center p-4">
      <div class="col-12 col-md-10 mx-auto">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, illo? Ex asperiores dolores ratione, atque iure inventore at ab optio deleniti distinctio officia sunt nihil eius reiciendis! Aliquid tempora, perferendis odit ipsum suscipit quasi, mollitia vero voluptatum sed voluptate fugiat. Neque vero aut placeat aliquid. Nobis possimus exercitationem fugit laboriosam, hic tempore maxime fuga quod, impedit optio amet pariatur voluptatibus! Maiores eaque non reprehenderit numquam atque perspiciatis velit pariatur, incidunt consequatur ullam repellendus, ut mollitia optio nemo enim?</p>
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

<style scoped>
.btn {
  color: orange;
  background-color: white;
  font-weight: bold;
}
.btn h5 {
  font-weight: bold;
  margin-bottom: 0;
}
.home-container {
  background-color: #e3b04b;
  color: white;
  padding-top: 2em;
  padding-bottom: 4.5em;
}
.bg-grey {
  background-color: #f8f8f8;
}
.card {
  min-height: 10em;
  justify-content: space-around;
}

.card i {
  font-size: 3em;
}

.info-container {
  background-color: #f1d6ab;
  min-height: 10em;
}
</style>
