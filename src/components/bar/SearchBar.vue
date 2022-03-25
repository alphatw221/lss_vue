<template>
<v-container>
    <v-card>
        <v-container style="height: 5rem;">
            <v-row >
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
    watch: {
      searchColumn() {
        this.search();
      },
    },
    methods: {
      search() {
        this.eventBus.emit("searchTable", {searchColumn: this.searchColumn, keyword: this.keyword, pageSize: this.pageSize})
        
      },
    }
  }
</script>