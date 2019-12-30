<template>
  <tr class="note">
    <td scope="row">
      <div>
        <p>{{noteData.reportedBy}}</p>
      </div>
    </td>
    <td>
      <p>{{noteData.content}}</p>
    </td>
    <td>
      <i class="fas fa-trash"></i>
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
  methods: {}
};
</script>

<style>
</style>