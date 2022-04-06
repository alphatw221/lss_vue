<template>
   <v-app>
      <PageBar
         :barName="pageName"
      />
      <v-divider></v-divider>
      <v-main>
         <v-row>
            <v-col cols="3">
               <AmountCard
                  :item="transactionItems"
               />
            </v-col>
            <v-col cols="3">
               <AmountCard
                  :item="contractItems"
               />
            </v-col>
            <v-col cols="3">
               <AmountCard
                  :item="buyerItems"
               />
            </v-col>
            <v-col cols="3">
               <AmountCard
                  :item="campaignItems"
               />
            </v-col>
         </v-row>
      
         <v-divider></v-divider>
         
         <v-row>
            <LineChart
               :lineChart="lineChart"
            />
            
         </v-row>
      </v-main>
      
   </v-app>
</template>

<script>
import AmountCard from '@/components/card/AmountCard.vue';
import PageBar from '@/components/bar/PageBar.vue';
import LineChart from '@/components/chart/LineChart.vue'
import { axiosInstanceWithBearer } from "@/libs/axiosClient";
import { dealer_dashboard, dealer_campaign } from '@/api/dealer';

export default {
   components: {
      AmountCard,
      PageBar,
      LineChart,
   },
   data() {
      return {
         pageName: 'DashBoard',
         transactionItems: { title: 0, subtitle: 'Total Transactions', img: require("@/assets/lss-console-icon/dollar.png"), style:'background: linear-gradient(45deg, #43A047, #1de9b6)' },
         contractItems: { title: 0, subtitle: 'Contracts due soon', img: require("@/assets/lss-console-icon/contract.png"), style:'background: linear-gradient(45deg, #8e24aa, #ff6e40)' },
         buyerItems: { title: 0, subtitle: 'Total Buyers', img: require("@/assets/lss-console-icon/people.png"), style:'background: linear-gradient(45deg, #3949ab, #4fc3f7)' },
         campaignItems: { title: 0, subtitle: 'Total Campaign', img: require("@/assets/lss-console-icon/youtube.png"), style:'background: linear-gradient(45deg, #bf360c, #f57c00)' },
         lineChart: {
            data: {
               labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
               datasets: [
                  {
                     label: 'My First Dataset',
                     data: [65, 59, 80, 81, 56, 55, 40],
                     fill: false,
                     borderColor: 'rgb(75, 192, 192)',
                     tension: 0.3
                  },
                  {
                     label: 'My First Dataset',
                     data: [15, 29, 30, 21, 26, 15, 10],
                     fill: false,
                     borderColor: 'rgb(75, 100, 192)',
                     tension: 0.3
                  },
               ]
            }
         }
      }
   },
   computed: {
      // lineChart: () => {
      //    let lineChart = {
      //       data: {
      //          labels: [],
      //          datasets: []
      //       }
      //    }

      //    dealer_campaign()
      //    .then(
      //       response=>{
      //          lineChart.data.labels = response.data.labels
      //          lineChart.data.datasets = response.data.data_sets
      //          console.log(this.lineChart)
      //       }
      //    ).catch(
      //       error=>{
      //          console.log(error);
      //       }
      //    )
         
      //    return lineChart
      // }
   },
   setup() {
      // this.getDashboardCard()
   },
   mounted() {
      console.log(this.$store.state.role)
   },
   methods: {
      getDashboardCard() {
         dealer_dashboard()
         .then(
            response=>{
               this.transactionItems.title = this.addDecimalPoints(response.data.transaction.toString());
               this.contractItems.title = this.addDecimalPoints(response.data.contract_due_soon.toString());
               this.buyerItems.title = this.addDecimalPoints(response.data.buyers.toString());
               this.campaignItems.title = this.addDecimalPoints(response.data.campaigns.toString());
            }
         ).catch(
            error=>{
               console.log(error);
            }
         )
      },
      getCampaingLineChart() {
         dealer_campaign()
         .then(
            response=>{
               this.lineChart.data.labels = response.data.labels
               this.lineChart.data.datasets = response.data.data_sets
               console.log(this.lineChart)
            }
         ).catch(
            error=>{
               console.log(error);
            }
         )
      },
      addDecimalPoints(val) {
         val = val.replace(/\D/g, '');
         var inputValue = val.replace('.', '').split('').reverse().join(''); // reverse
         var newValue = '';
         for (var i = 0; i < inputValue.length; i++) {
               if (i % 3 == 0) {
                  newValue += ',';
               }
               newValue += inputValue[i];
         }
         val = newValue.split("").reverse().join("");
         if (val.at(-1) == ',') {
            val = val.slice(0, -1)
         }
         return val
      }
   },
}
</script>

<style scoped>
/* dashboard CSS */
.small {
   max-width: 600px;
   margin:  150px auto;
}
</style>
