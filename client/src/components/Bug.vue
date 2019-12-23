<template>
  <div class="bug d-flex bd-highlight">
    <div class="p-2 bd-highlight">{{bugData.title}}</div>
    <div class="p-2 flex-grow-1 bd-highlight">{{bugData.reportedBy}}</div>
    <div class="p-2 bd-highlight">{{bugData.updatedAt}}</div>
  </div>
</template>

<script>
export default {
  name: "Bug",
  props: {
    bugData: {
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