<template>
  <div class="pagination-nav">
    <div class="text-right">
      <ul class="pagination justify-content-end">
        <li class="page-item" :class="{'disabled':pageNumber==0}">
          <button @click="prevList" :disabled="pageNumber==0" class="page-link">
            <i class="fas chevron fa-chevron-circle-left"></i>
          </button>
        </li>
        <!-- FIXME fix page numbers -->
        <li v-for="page in pageCount" class="page-item">
          <a class="page-link" href="#">{{page.num}}</a>
        </li>
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
      pageNumber: 0,
      pageCount: []
    };
  },
  methods: {
    nextList() {
      this.pageNumber++;
    },
    prevList() {
      this.pageNumber--;
    },
    pages(num) {
      let arr = [];
      for (let i = 1; i <= num; i++) {
        arr.push({ num: i });
      }
      this.pageCount = arr;
    }
  },
  computed: {
    totalPages() {
      let total = this.bugList.length / this.listSize;
      let rounded = Math.ceil(total);
      this.pages(rounded);
      return rounded;
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
.page-link {
  color: #222;
}
.chevron {
  font-size: 1.2rem;
}
label {
  margin-bottom: 0.15rem;
}
</style>