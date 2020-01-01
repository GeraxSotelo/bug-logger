<template>
  <div class="bugs container-fluid">
    <div class="row pb-1">
      <div class="col col-md-6 col-lg-4 mx-auto">
        <h1>Report a Bug</h1>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col col-lg-10 mx-auto">
        <button @click="createBug()" class="btn btn-danger p-3 mb-2">Report</button>
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
  methods: {
    async createBug() {
      const value = await Swal.fire({
        title: "Multiple inputs",
        html:
          `<label>Name</label><input id="name" class="swal2-input">` +
          `<label>Title</label><input id="title" class="swal2-input">` +
          `<label>Description</label><textarea id="desc" class="swal2-input"></textarea>`,
        focusConfirm: false,
        showCancelButton: true,
        cancelButtonColor: "#d33",
        preConfirm: () => {
          let name = document.querySelector("#name").value;
          let title = document.querySelector("#title").value;
          let desc = document.querySelector("#desc").value;
          if (name && title && desc) {
            let bug = {
              reportedBy: name,
              title: title,
              description: desc,
              closed: false
            };
            this.$store.dispatch("createBug", bug).then(response => {
              this.$router.push("bugs/" + this.$store.state.activeBug.id);
            });
          } else {
            Swal.showValidationMessage("Please fill out all fields");
          }
        }
      });
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