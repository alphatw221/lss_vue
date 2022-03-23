<template>
   <v-app>
      <v-app-bar 
         density="compact" 
         prominent
         style="background: #c7ccdb;"
      >
         <v-app-bar-title style="font-weight: 500;font-size: 1.5rem">DashBoard</v-app-bar-title>

         <template v-slot:append>
            <v-avatar
                  class="ma-3"
                  size="35"
                  left
            >
               <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
            </v-avatar>
         </template>
      </v-app-bar>
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
   </v-app>
</template>

<script>
import AmountCard from '@/components/card/AmountCard.vue'

export default {
   components: {
      AmountCard
   },
   data() {
      return {
         transactionItems: { title: 6000, subtitle: 'Total Transactions', img: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png', style:'background: linear-gradient(45deg, #43A047, #1de9b6)' },
         contractItems: { title: 900, subtitle: 'Contracts due soon', img: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png', style:'background: linear-gradient(45deg, #8e24aa, #ff6e40)' },
         buyerItems: { title: 900, subtitle: 'Total Buyers', img: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png', style:'background: linear-gradient(45deg, #3949ab, #4fc3f7)' },
         campaignItems: { title: 900, subtitle: 'Total Campaign', img: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png', style:'background: linear-gradient(45deg, #bf360c, #f57c00)' },
      }
   },
}
</script>

<style scoped>
/* dashboard CSS */
h4.header.statistic_card_header {
  text-transform: none;
}
.card_size {
  padding: 3% 5% 1%;
}
</style>
