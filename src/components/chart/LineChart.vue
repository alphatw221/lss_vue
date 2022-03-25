<template>

    <div class="line_chart">
        <vue3-chart-js
            id="line"
            type="line"
            :data="lineChart.data"
        ></vue3-chart-js>
    </div>

</template>
<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
   components: {
      Vue3ChartJs,
   },
   props: {
      lineChart: Object
   },
   data() {
      return {
         
      }
   },
   setup () {
      
   },
}
</script>

<style scoped>
.line_chart {
   height: 25rem; 
   width: 40rem; 
   display: flex; 
   flex-direction: column; 
   margin-left: 30px;
}
</style>
