<template>
  <div class="bugs container-fluid">
    <div class="row pb-1 pt-2">
      <div class="col col-md-6 col-lg-4 mx-auto">
        <h2>Report a Bug</h2>
        <hr />
      </div>
    </div>
    <div class="row pt-3">
      <div class="col col-lg-10 mx-auto">
        <button @click="createBug()" class="report-btn btn btn-danger p-3 mb-2">Report</button>
        <div>
          <bug-list-component :bugList="bugs" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BugComponent from "@/components/Bug";
import BugListComponent from "@/components/BugList";
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
    BugComponent,
    BugListComponent
  }
};
</script>

<style scoped>
h2,
.report-btn {
  font-family: "Montserrat", sans-serif;
}
hr {
  border: 1px solid black;
}
.bugs {
  background-color: #d8d8d8;
}
.report-btn {
  font-size: 1.8em;
}
label {
  margin-bottom: 0.15rem;
}
</style>