<template>
    
    <v-navigation-drawer
        class="deep-purple accent-4"
        dark
        permanent
    >
        <v-list>
            <v-list-item>
                <v-row >
                    <img :src="lss_icon" alt="" width="60" height="20"/>
                    <h6>LSS Admin Console</h6>
                </v-row>
            </v-list-item>

            <v-list-item :to="'/seller/dashboard'">
                <v-icon style="margin: 0 1.2rem 0 0.7rem;">mdi-widgets</v-icon>
                <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>

            <v-list-item :to="'/admin_console/user'">
                <v-icon style="margin: 0 1.2rem 0 0.7rem;">mdi-account-box</v-icon>
                <v-list-item-title>User</v-list-item-title>
            </v-list-item>

            <v-list-item :to="'/seller/subscription'">
                <img :src="subscription_icon" class="menu_icon"/>
                <v-list-item-title>User Subscription</v-list-item-title>
            </v-list-item>

            <v-list-item :to="'/admin_console/hello_world'">
                <img :src="order_icon" class="menu_icon"/>
                <v-list-item-title>Transactions</v-list-item-title>
            </v-list-item>

            <v-list-item :to="'/admin_console/hello_world'">
                <img :src="plan_icon" class="menu_icon"/>
                <v-list-item-title>Plans</v-list-item-title>
            </v-list-item>

            <v-list-item :to="'/admin_console/hello_world'">
                <img :src="plan_icon" class="menu_icon"/>
                <v-list-item-title>Licenses</v-list-item-title>
            </v-list-item>

            <v-list-item :to="'/admin_console/hello_world'">
                <img :src="seller_icon" class="menu_icon"/>
                <v-list-item-title>Seller</v-list-item-title>
            </v-list-item>

            <v-list-item :to="'/admin_console/hello_world'">
                <img :src="buyer_icon" class="menu_icon"/>
                <v-list-item-title>Buyer</v-list-item-title>
            </v-list-item>

            <v-list-item :to="'/seller/setting'">
                <img :src="setting_icon" class="menu_icon"/>
                <v-list-item-title>Setting</v-list-item-title>
            </v-list-item>
            
        </v-list>

        <template v-slot:append>
                <div class="pa-2">
                    <v-btn block>
                        Logout
                    </v-btn>
                </div>
        </template>
    </v-navigation-drawer>
</template>

<script>


export default {
  name: 'AdminConsoleNavigationDrawers',
  components: {
    
  },
  data: () => ({
    lss_icon: require("@/assets/lss-logo/logo_wh.png"),
    subscription_icon: require("@/assets/lss-icon/platform.png"),
    order_icon: require("@/assets/lss-icon/shopping_cart_plus_bk.png"),
    plan_icon: require("@/assets/lss-icon/live.png"),
    seller_icon: require("@/assets/lss-icon/regional.png"),
    buyer_icon: require("@/assets/lss-icon/buyer_wh.jpeg"),
    setting_icon: require("@/assets/lss-icon/settings.png"),

  }),
  computed:{

  },
  methods:{

  }
}
</script>

<style >
.v-navigation-drawer  {
  background-color: dimgrey;
}
.v-list{
  background-color: dimgrey;
}
.v-list .v-list-item {
    background-color: dimgrey;
    font-size: 1rem;
}
.v-list-item-title {
    font-size: 1rem;
}
.menu_icon {
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 1.2rem 0 0.7rem;
}

</style>