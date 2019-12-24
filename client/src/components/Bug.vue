<template>
  <tr class="bug">
    <th scope="row">
      <router-link :to="{name: 'bugDetails', params: {id: bugData.id}}">
        <div class="table-div">{{bugData.title}}</div>
      </router-link>
    </th>
    <td>
      <router-link :to="{name: 'bugDetails', params: {id: bugData.id}}">
        <div class="table-div">{{bugData.reportedBy}}</div>
      </router-link>
    </td>
    <td class="green-text" :class="{'red-text':bugData.closed}">
      <div class="table-div">{{this.isClosed(bugData.closed)}}</div>
    </td>
    <td>
      <div class="table-div">{{this.convertDate(bugData.updatedAt)}}</div>
    </td>
  </tr>
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
  methods: {
    convertDate(date) {
      let d = new Date(date);
      return d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
    },
    isClosed(data) {
      if (data) {
        return "Closed";
      } else {
        return "Open";
      }
    }
  }
};
</script>

<style>
a {
  color: white;
}
a:hover {
  color: white;
  text-decoration: none;
}
.green-text {
  color: green;
}
.red-text {
  color: red;
}
.table td,
.table th {
  padding: 0;
}
.table-div {
  padding: 0.75rem;
}
</style>