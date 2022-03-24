<template>
   <v-app>
      <PageBar
         :barName="pageName"
      >
      </PageBar>
      <v-divider></v-divider>
      <v-main>
         <v-row>
            <v-col cols="3">
               <AmountCard
                  :item="transactionItems"
               ></AmountCard>
            </v-col>
            <v-col cols="3">
               <AmountCard
                  :item="contractItems"
               ></AmountCard>
            </v-col>
            <v-col cols="3">
               <AmountCard
                  :item="buyerItems"
               ></AmountCard>
            </v-col>
            <v-col cols="3">
               <AmountCard
                  :item="campaignItems"
               ></AmountCard>
            </v-col>
         </v-row>
      </v-main>
      <v-divider></v-divider>
      
      <v-row>
         <div style="height: 400px; width: 600px; display: flex; flex-direction: column; margin-left: 30px;">
            <vue3-chart-js
               :id="lineChart.id"
               :type="lineChart.type"
               :data="lineChart.data"
            ></vue3-chart-js>
         </div>
         <div style="height: 400px; width: 600px; display: flex; flex-direction: column; margin-left: 30px;">
            <vue3-chart-js
               :id="lineChart.id"
               :type="lineChart.type"
               :data="lineChart.data"
            ></vue3-chart-js>
         </div>
      </v-row>
      
      

   </v-app>
</template>

<script>
import AmountCard from '@/components/card/AmountCard.vue';
import PageBar from '@/components/bar/PageBar.vue';
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";


export default {
   components: {
      AmountCard,
      PageBar,
      Vue3ChartJs,
   },
   setup () {
      const lineChart = {
         id: 'line',
         type: 'line',
         data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
               {
                  label: 'My First Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1
               },
               {
                  label: 'My First Dataset',
                  data: [15, 29, 30, 21, 26, 15, 10],
                  fill: false,
                  borderColor: 'rgb(75, 100, 192)',
                  tension: 0.1
               },
            ]
         }
      }

      // const beforeRenderLogic = (event) => {
      //    //...
      //    //if(a === b) {
      //    //  event.preventDefault()
      //    //}
      // }

      return {
         lineChart,
         // beforeRenderLogic
      }
  },
   data() {
      return {
         pageName: 'DashBoard',
         transactionItems: { title: 6000, subtitle: 'Total Transactions', img: require("@/assets/lss-console-icon/dollar.png"), style:'background: linear-gradient(45deg, #43A047, #1de9b6)' },
         contractItems: { title: 900, subtitle: 'Contracts due soon', img: require("@/assets/lss-console-icon/contract.png"), style:'background: linear-gradient(45deg, #8e24aa, #ff6e40)' },
         buyerItems: { title: 900, subtitle: 'Total Buyers', img: require("@/assets/lss-console-icon/people.png"), style:'background: linear-gradient(45deg, #3949ab, #4fc3f7)' },
         campaignItems: { title: 900, subtitle: 'Total Campaign', img: require("@/assets/lss-console-icon/youtube.png"), style:'background: linear-gradient(45deg, #bf360c, #f57c00)' },
         
      }
   },
}
</script>

<style scoped>
.small {
   max-width: 600px;
   margin:  150px auto;
}
</style>
