<template>
  <div class="bug-details container-fluid">
    <div class="row">
      <div class="col-12">
        <p class="m-0">Title:</p>
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
      <div class="col-12 border">{{bug.description}}</div>
      <div class="col-12 text-right">
        <button @click="closeBug(bug.id)" class="btn btn-danger">CLOSE</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h1>NOTES</h1>
        <table class="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Message</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="note in notes" :key="note.id">
              <td scope="row">
                <div>
                  <p>{{note.reportedBy}}</p>
                </div>
              </td>
              <td>
                <p>{{note.content}}</p>
              </td>
              <td>
                <i class="fas fa-trash"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 mx-auto">
        <form @submit.prevent="createNote">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="newNote.reportedBy" placeholder="Name" />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea
              id="textArea"
              rows="8"
              cols="50"
              class="form-control"
              v-model="newNote.content"
            ></textarea>
          </div>
          <button class="btn btn-danger mt-2">Add Note</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bugDetails",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
    this.$store.dispatch("getNotesByBugId", this.$route.params.id);
  },
  data() {
    return {
      newNote: {
        reportedBy: "",
        content: "",
        flagged: "pending",
        bug: this.$route.params.id
      }
    };
  },
  methods: {
    createNote() {
      let note = { ...this.newNote };
      this.$store.dispatch("createNote", note);
      this.newNote = {
        reportedBy: "",
        content: "",
        flagged: "pending",
        bug: this.$route.params.id
      };
      this.$store.dispatch("addActiveNote", note);
    },
    isClosed(data) {
      return data ? "Closed" : "Open";
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
            timer: 900
          });
          this.$store.dispatch("closeBug", id);
        }
      });
    }
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.activeNotes;
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