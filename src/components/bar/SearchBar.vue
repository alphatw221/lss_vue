<template>
  <div>

    <select v-model="searchColumn" style="margin-right: 1rem;">
      <option v-for="(column, index) in searchColumns" 
        :key="index"
        :value="column.value">
        {{ column.label }}
      </option>
    </select>

    <input v-model="keyword" @change="search" placeholder="Search"/>
  </div>
</template>

<script>
  export default {
    name: "SearchBar",
    props: {
      searchColumns: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        searchColumn: this.searchColumns[0].value,
        keyword: undefined,
      }
    },
    watch: {
      searchColumn() {
        this.search();
      },
    },
    methods: {
      search() {
        if (this.validSearch()) {
            const searchData = {
            column: this.searchColumn,
            keyword: this.keyword
          };
          this.$emit('on-search', searchData);
        } else if (!this.keyword) {
          this.$emit('on-clear');
        }
      },
      validSearch() {
        const hasSearchColumn = !!this.searchColumn;
        const hasKeyword = !!this.keyword;
        return hasSearchColumn && hasKeyword;
      },
    }
  }
</script>