<template>
    <div class="section">
   <div id="card-stats" class="pt-0 mb-0">
      <div class="row">
         <div class="col s12 m6 l3">
            <div class="card gradient-45deg-green-teal gradient-shadow min-height-100 white-text animate fadeLeft">
               <div class="card_size">
                  <div class="row">
                     <div class="col s3">
                        <i class="material-icons background-round mt-5">attach_money</i>
                        <p> </p>
                     </div>
                     <div class="col s9 right-align">
                        <h5 class="mb-0 white-text">6,000</h5>
                        <p class="no-margin"> </p>
                        <p>Total Transactions</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="col s12 m6 l3">
            <div class="card gradient-45deg-purple-deep-orange gradient-shadow min-height-100 white-text animate fadeLeft">
               <div class="card_size">
                  <div class="row">
                     <div class="col s3">
                        <i class="material-icons background-round mt-5">pending_actions</i>
                     </div>
                     <div class="col s9 right-align">
                        <h5 class="mb-0 white-text">900</h5>
                        <p>Contracts due soon</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="col s12 m6 l3">
            <div class="card gradient-45deg-indigo-light-blue gradient-shadow min-height-100 white-text animate fadeRight">
               <div class="card_size">
                  <div class="row">
                     <div class="col s3">
                        <i class="material-icons background-round mt-5">people_alt</i>
                        <p></p>
                     </div>
                     <div class="col s9 right-align">
                        <h5 class="mb-0 white-text">900</h5>
                        <p class="no-margin"></p>
                        <p>Total Buyers</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="col s12 m6 l3">
            <div class="card gradient-45deg-deep-orange-orange gradient-shadow min-height-100 white-text animate fadeRight">
               <div class="card_size">
                  <div class="row">
                     <div class="col s5">
                        <i class="material-icons background-round mt-5">live_tv</i>
                        <p></p>
                     </div>
                     <div class="col s7 right-align">
                        <h5 class="mb-0 white-text">900</h5>
                        <p class="no-margin"></p>
                        <p>Total Campaign</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="sales-chart">
      <div class="row">
         <div class="col s12 l8">
            <h4 class="header statistic_card_header">New Accounts</h4>
            <div id="revenue-chart" class="card animate fadeUp">
               <div class="card-content">
                  <span class="purple-text small text-darken-1 ml-1"><i class="material-icons">keyboard_arrow_up</i> 15.58 %</span>
                  <a class='dropdown-trigger btn waves-effect waves-light btn gradient-shadow right' href='#' data-target='dropdown1'>Year</a>
                  <ul id='dropdown1' class='dropdown-content'>
                     <li><a href="#!">Year</a></li>
                     <li><a href="#!">Month</a></li>
                     <li><a href="#!">Week</a></li>
                  </ul>
                  <div class="row">
                     <div class="col s12">
                        <div class="yearly-revenue-chart">
                           <div class="sample-chart-wrapper"><canvas id="line-chart" height="400"></canvas></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="col s12 l4">
            <h4 class="header statistic_card_header">Total Accounts</h4>
            <div id="revenue-chart" class="card animate fadeUp">
               <div class="card-content">
                  <a class='dropdown-trigger btn waves-effect waves-light btn gradient-shadow right' href='#' data-target='dropdown1'>Year</a>
                  <ul id='dropdown1' class='dropdown-content'>
                     <li><a href="#!">Year</a></li>
                     <li><a href="#!">Month</a></li>
                     <li><a href="#!">Week</a></li>
                  </ul>
                  <div class="row">
                     <div class="col s12">
                        <div class="sample-chart-wrapper"><canvas id="polar-chart" height="350"></canvas></div>
                     </div>
                  </div>
               </div>
            </div>
         </div> 
      </div>
   </div>   
</div>
</template>

<script>
export default {
    data() {
        return {
            
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
