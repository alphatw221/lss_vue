<template>
<v-container>
  <v-card>
    <v-container>
      <v-row>
        <v-col cols=2>

          <v-select
            v-model="pageSize"
            :items="[10, 20, 50]"
            @keyup="search"
            dense
            filled
            label="Page Size"
          ></v-select>

        </v-col>
        <v-spacer />
        <v-col cols=3>
          <v-select
            v-model="searchColumn"
            :items="searchColumns"
            label="Search Column"
            >
          </v-select>
        </v-col>
      
      <v-spacer/>
      <!-- <v-autocomplete
        v-model="searchColumn"
        :items="searchColumns"
        item-text="label"
        item-value="value"
        dense
        filled
        label="Search Column"
      ></v-autocomplete> -->

      <v-col cols=6>
        <v-text-field
          label="Search"
          placeholder=""
          @keyup="search"
          v-model="keyword"
        ></v-text-field>
      </v-col>

      </v-row>
      
    </v-container>
    <!-- <v-row> -->

        <!-- <label for="page_size">Page Size: </label>
        <select name="page_size" v-model="pageSize" >
            <option value=20>20</option>
            <option value=50>50</option>
            <option value=100>100</option>
        </select>

        <label for="search_column">Search Column: </label>
        <select v-model="searchColumn" style="margin-right: 1rem;">
          <option v-for="(column, index) in searchColumns" 
            :key="index"
            :value="column.value">
            {{ column.label }}
          </option>
        </select> -->

        <!-- <input v-model="keyword" @change="search" placeholder="Search"/> -->
        <!-- <v-text-field
          placeholder="Search"
          @change="search"
          v-model="keyword"
        ></v-text-field> -->

    <!-- </v-row> -->
  </v-card>
</v-container>
  
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
        page: 1,
        pageSize: 10,
        searchColumn: undefined,
        keyword: undefined,
      }
    },
    mounted() {
    },
    watch: {
      searchColumn() {
        this.search();
      },
    },
    methods: {
      search() {
        this.eventBus.emit("searchTable", {searchColumn: this.searchColumn, keyword: this.keyword, pageSize: this.pageSize})
        // console.log("search")
        // if (this.validSearch()) {
        //     const searchData = {
        //     column: this.searchColumn,
        //     keyword: this.keyword
        //   };
        //   this.$emit('on-search', searchData);
        // } else if (!this.keyword) {
        //   this.$emit('on-clear');
        // }
      },
      validSearch() {
        const hasSearchColumn = !!this.searchColumn;
        const hasKeyword = !!this.keyword;
        return hasSearchColumn && hasKeyword;
      },
    }
  }
</script>