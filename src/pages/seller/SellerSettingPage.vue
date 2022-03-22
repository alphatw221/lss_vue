<template>
    <v-container>
      <v-card>

        <v-tabs
          v-model="tab"
          background-color="primary"
        >
          <v-tab value="platform">Platform</v-tab>
          <v-tab value="inventory">Inventory</v-tab>
          <v-tab value="payment">Payment</v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="platform">
              <BindFacebookPageWidgets/>

              <BindYoutubeChannelWidgets/>
            </v-window-item>

            <v-window-item value="inventory">
              Two
            </v-window-item>

            <v-window-item value="payment">
              Three
            </v-window-item>
          </v-window>
        </v-card-text>

      </v-card>

    
    </v-container>
</template>

<script>

import BindFacebookPageWidgets from '@/widgets/BindFacebookPageWidgets.vue'
import BindYoutubeChannelWidgets from '@/widgets/BindYoutubeChannelWidgets.vue'

export default {
  name: 'SellerSettingPage',
  mounted(){

  },
  components: {
    BindFacebookPageWidgets,
    BindYoutubeChannelWidgets
  },
  data(){
    return{
      tab:null
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>