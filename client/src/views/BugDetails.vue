<template>
  <div class="bug-details container-fluid">
    <div class="row">
      <div class="col-12">
        <p>Title:</p>
      </div>
      <div class="col-12">
        <h1>{{bug.title}}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">Reported By: {{bug.reportedBy}}</div>
      <div class="col">
        Status:
        <span
          class="green-text"
          :class="{'red-text':bug.closed}"
        >{{this.isClosed(bug.closed)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bugDetails",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
  },
  data() {
    return {};
  },
  methods: {
    isClosed(data) {
      return data ? "Closed" : "Open";
    }
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  }
};
</script>

<style>
.green-text {
  color: green;
}
.red-text {
  color: red;
}
</style>