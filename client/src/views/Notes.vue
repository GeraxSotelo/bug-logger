<template>
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
</template>

<script>
import NoteComponent from "@/components/Note";
export default {
  name: "Notes",
  props: {
    bugData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {},
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
</style>