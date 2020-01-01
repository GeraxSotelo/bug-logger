<template>
  <div class="bugs container-fluid">
    <div class="row pb-1">
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
              required
            />
          </div>
          <div class="form-group">
            <label>Title</label>
            <input
              type="text"
              class="form-control"
              v-model="newBug.title"
              placeholder="Title"
              required
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              class="form-control"
              v-model="newBug.description"
              placeholder="Bug Description"
              required
            />
          </div>
          <button class="btn btn-danger mt-2">Report</button>
        </form>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col col-lg-10 mx-auto">
        <table class="table table-bordered table-striped table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Reported By</th>
              <th scope="col">Status</th>
              <th scope="col">Last Modified</th>
            </tr>
          </thead>
          <tbody>
            <bug-component v-for="bug in bugs" :key="bug.id" :bugData="bug" />
          </tbody>
        </table>
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
    async createBug() {
      let bug = { ...this.newBug };
      await this.$store.dispatch("createBug", bug);
      this.newBug = {
        reportedBy: "",
        title: "",
        description: "",
        closed: false
      };
      this.$router.push("bugs/" + this.$store.state.activeBug.id);
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
.bugs {
  background-color: #e3b04b;
}
.form-group {
  text-align: left;
  margin-bottom: 0;
}
label {
  margin-bottom: 0.15rem;
}
</style>