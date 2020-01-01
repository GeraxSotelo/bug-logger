<template>
  <div class="bug-details container-fluid">
    <div class="row">
      <div class="col-12">
        <p class="m-0">Title</p>
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
    <div class="row pt-3 pb-1">
      <div class="col-12 border">
        <div class="text-right">
          <button @click="editBug(bug)" class="btn btn-outline-secondary mt-2 mb-2">Edit</button>
        </div>
        <p>{{bug.description}}</p>
      </div>
      <div class="col-12 text-right">
        <button @click="closeBug(bug.id)" class="btn btn-danger">CLOSE</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h1>NOTES</h1>
        <NotesComponent :bugData="bug" />
      </div>
    </div>
  </div>
</template>

<script>
import NotesComponent from "@/views/Notes";
export default {
  name: "bugDetails",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
    this.$store.dispatch("getNotesByBugId", this.$route.params.id);
  },
  methods: {
    isClosed(data) {
      return data ? "Closed" : "Open";
    },
    async editBug(bug) {
      const { value: formValues } = await Swal.fire({
        title: "Multiple inputs",
        html:
          `<input required id="swal-input1" class="swal2-input" value="${bug.reportedBy}">` +
          `<input id="swal-input2" class="swal2-input" value="${bug.title}">` +
          `<textarea id="swal-input3" class="swal2-input">${bug.description}</textarea>`,
        focusConfirm: false
      });
      this.$store.dispatch("editBug", {
        id: bug.id,
        reportedBy: document.getElementById("swal-input1").value,
        title: document.getElementById("swal-input2").value,
        description: document.getElementById("swal-input3").value
      });
    },
    closeBug(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "This cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, close it!"
      }).then(result => {
        if (result.value) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Bug Closed",
            showConfirmButton: false,
            timer: 850
          });
          this.$store.dispatch("closeBug", id);
        }
      });
    }
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  },
  components: {
    NotesComponent
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