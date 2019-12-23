<template>
  <div class="bugs container-fluid">
    <div class="row">
      <div class="col col-md-6 col-lg-4 mx-auto">
        <h1>Report a Bug</h1>
        <form @submit.prevent="createBug">
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              v-model="newBug.reportedBy"
              placeholder="Enter Name"
            />
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
      <div class="col">
        <ul class="list-group">
          <!-- <li class="list-group-item disabled" aria-disabled="true">Cras justo odio</li> -->
          <li class="list-group-item">
            <div class="d-flex bd-highlight">
              <div class="p-2 bd-highlight">Title</div>
              <div class="p-2 flex-grow-1 bd-highlight">Reported By</div>
              <div class="p-2 bd-highlight">Last Modified</div>
            </div>
          </li>
          <li class="list-group-item" v-for="bug in bugs" :key="bug.id">
            <bug-component :bugData="bug" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BugComponent from "@/components/Bug";
export default {
  name: "bugs",
  mounted() {
    this.$store.dispatch("getAllBugs");
  },
  data() {
    return {
      newBug: {
        reportedBy: "",
        title: "",
        description: "",
        closed: false
      }
    };
  },
  methods: {
    createBug() {
      let bug = { ...this.newBug };
      this.$store.dispatch("createBug", bug);
      this.newBug = {
        reportedBy: "",
        title: "",
        description: "",
        closed: false
      };
    }
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  components: {
    BugComponent
  }
};
</script>

<style>
</style>