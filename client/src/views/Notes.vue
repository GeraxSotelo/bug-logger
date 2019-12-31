<template>
  <div>
    <table class="notes table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Message</th>
          <th scope="col">Status</th>
          <th scope="col">Last Modified</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <NoteComponent v-for="note in notes" :key="note.id" :noteData="note" />
      </tbody>
    </table>
    <button @click="createNote" class="btn btn-danger mt-2 mb-2">Add Note</button>
  </div>
</template>

<script>
import NoteComponent from "@/components/Note";
export default {
  name: "Notes",
  methods: {
    async createNote() {
      const value = await Swal.fire({
        title: "Multiple inputs",
        html:
          `<label>Name</label><input id="name" class="swal2-input">` +
          `<label>Message</label><textarea id="msg" class="swal2-input"></textarea>`,
        focusConfirm: false,
        showCancelButton: true,
        cancelButtonColor: "#d33"
      });
      let note = {
        reportedBy: document.querySelector("#name").value,
        content: document.querySelector("#msg").value,
        flagged: "pending",
        bug: this.$route.params.id
      };
      let dismiss = value.dismiss;
      if (note.reportedBy && note.content && !value.dismiss) {
        console.log(value.dismiss);
        this.$store.dispatch("createNote", note);
      } else if (
        (!note.reportedBy || !note.content) &&
        dismiss != "cancel" &&
        dismiss != "backdrop"
      ) {
        Swal.fire("Please fill out all fields");
      }
    }
  },
  computed: {
    notes() {
      return this.$store.state.activeNotes;
    }
  },
  components: {
    NoteComponent
  }
};
</script>

<style>
label {
  float: left;
}
</style>