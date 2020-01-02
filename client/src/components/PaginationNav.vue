<template>
  <div class="pagination-nav">
    <div class="text-right">
      <ul class="pagination justify-content-end">
        <li class="page-item" :class="{'disabled':pageNumber==0}">
          <button @click="prevList" :disabled="pageNumber==0" class="page-link">
            <i class="fas chevron fa-chevron-circle-left"></i>
          </button>
        </li>
        <!-- <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#">
            2
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>-->
        <li class="page-item" :class="{'disabled':pageNumber>=totalPages-1}">
          <button @click="nextList" :disabled="pageNumber>=totalPages-1" class="page-link">
            <i class="fas chevron fa-chevron-circle-right"></i>
          </button>
        </li>
      </ul>
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
.pagination-nav button {
  padding: 0.45rem 0.7rem;
}
.chevron {
  font-size: 1.2rem;
}
label {
  margin-bottom: 0.15rem;
}
</style>