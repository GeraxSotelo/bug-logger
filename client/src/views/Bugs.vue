<template>
  <div class="bugs container-fluid">
    <div class="row">
      <div class="col col-md-6 col-lg-4 mx-auto">
        <h1>Report a Bug</h1>
        <form @submit.prevent="createBug">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="newBug.name" placeholder="Enter Name" />
          </div>
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="newBug.title" placeholder="Title" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              class="form-control"
              v-model="newBug.description"
              placeholder="Bug Description"
            />
          </div>
          <button class="btn btn-danger">Report</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">{{bugs}}</div>
    </div>
    <ul class="list-group">
      <li class="list-group-item disabled" aria-disabled="true">Cras justo odio</li>
      <li class="list-group-item">{{bugs.description}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "bugs",
  mounted() {
    this.$store.dispatch("getAllBugs");
  },
  data() {
    return {
      newBug: {
        name: "",
        title: "",
        description: ""
      }
    };
  },
  methods: {
    createBug() {
      let bug = { ...this.newBug };
      this.$store.dispatch("createBug", bug);
      this.newBug = {
        name: "",
        title: "",
        description: ""
      };
    }
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  }
};
</script>

<style>
</style>