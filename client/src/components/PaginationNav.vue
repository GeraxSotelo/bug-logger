<template>
  <div class="pagination-nav">
    <div class="text-right">
      <button @click="prevList" :disabled="pageNumber==0">
        <i class="fas chevron fa-chevron-circle-left"></i>
      </button>
      <button @click="nextList" :disabled="pageNumber>=totalPages-1">
        <i class="fas chevron fa-chevron-circle-right"></i>
      </button>
    </div>
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
        <bug-component v-for="bug in paginatedBugs" :key="bug.id" :bugData="bug" />
      </tbody>
    </table>
  </div>
</template>

<script>
import BugComponent from "@/components/Bug";
export default {
  name: "PaginationNav",
  mounted() {
    // this.$store.dispatch("getAllBugs");
  },
  props: {
    bugList: {
      type: Array,
      required: true
    },
    listSize: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data() {
    return {
      pageNumber: 0
    };
  },
  methods: {
    nextList() {
      this.pageNumber++;
    },
    prevList() {
      this.pageNumber--;
    }
  },
  computed: {
    // bugs() {
    //   return this.$store.state.bugs;
    // },
    totalPages() {
      let total = this.bugList.length / this.listSize;
      return Math.ceil(total);
    },
    paginatedBugs() {
      let start = this.pageNumber * this.listSize;
      let end = start + this.listSize;
      return this.bugList.slice(start, end);
    }
  },
  components: {
    BugComponent
  }
};
</script>

<style>
button {
  background-color: transparent;
  border: none;
}
.chevron {
  font-size: 1.5em;
}
label {
  margin-bottom: 0.15rem;
}
</style>