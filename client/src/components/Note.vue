<template>
  <tr class="note">
    <td scope="row">
      <div>
        <p>{{noteData.reportedBy}}</p>
      </div>
    </td>
    <td class="note-content">
      <p>{{noteData.content}}</p>
    </td>
    <td>
      <p>{{noteData.flagged}}</p>
    </td>
    <td>
      <p>{{this.convertDate(noteData.updatedAt)}}</p>
    </td>
    <td>
      <i @click="deleteNote(noteData.id)" class="fas fa-trash"></i>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Note",
  props: {
    noteData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    convertDate(date) {
      let d = new Date(date);
      return d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
    },
    deleteNote(noteId) {
      Swal.fire({
        title: "Are you sure?",
        text: "This cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Deleted",
            showConfirmButton: false,
            timer: 800
          });
          this.$store.dispatch("deleteNote", {
            bugId: this.$route.params.id,
            noteId: noteId
          });
        }
      });
    }
  }
};
</script>

<style>
.table td {
  padding: 0.3em;
  vertical-align: middle;
}
td i {
  color: rgb(219, 0, 0);
  cursor: pointer;
  font-size: 1.3em;
}
.note-content {
  max-width: 40em;
}
</style>