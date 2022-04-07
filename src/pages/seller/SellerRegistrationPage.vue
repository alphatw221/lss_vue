<template>
<v-app>


    <v-container>
        <h1 class="text-center">
            Sign Up
        </h1>

        <v-timeline direction="horizontal" truncate-line="start" line-thickness=1 line-color="#777771">

            <v-timeline-item :hide-dot="true"></v-timeline-item>
            <v-timeline-item v-bind:dot-color="colors.basicInfoColor" :fill-dot="true" ><span>Basic Info</span> </v-timeline-item>
            <v-timeline-item v-bind:dot-color="colors.paymentColor" :fill-dot="true" > <span>Payment</span>  </v-timeline-item>
            <v-timeline-item v-bind:dot-color="colors.confirmationColor" :fill-dot="true" > <span>Confirmation</span> </v-timeline-item>
        </v-timeline>

        <v-tabs
          v-model="tab"
          v-show="false"
        >
          <v-tab value="basicInfo">Basic Info</v-tab>
          <v-tab value="payment">Payment</v-tab>
          <v-tab value="confirmation">confirmation</v-tab>
        </v-tabs>

        <v-window v-model="tab">
            <v-window-item value="basicInfo">
                <v-form v-model="formValid" ref="form1" lazy-validation>
                <v-row>
                    <v-col>
                        <label for="firstName">First Name</label><span class="star">*</span>
                        <v-text-field v-model="formData.firstName" :rules="generalRules" required
                            
                        ></v-text-field>
                    </v-col>

                    <v-col>
                        <label for="">Last Name</label><span class="star">*</span>
                        <v-text-field v-model="formData.lastName" :rules="generalRules" required
                            
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <label for="">Contact Number</label><span class="star">*</span>
                        <v-text-field  v-model="formData.contactNumber" :rules="generalRules" required
                            
                        ></v-text-field>
                    </v-col>
                    
                </v-row>

                <v-row>
                    <v-col>
                        <label for="email">Email</label><span class="star">*</span>
                        <v-text-field
                            v-model="formData.email"
                            :rules="emailRules"
                            required
                        ></v-text-field>
                    </v-col>
                    
                </v-row>

                <v-row>
                    <v-col>

                        <label for="password">Password</label><span class="star">*</span>

                        <v-text-field
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                            v-model="formData.password"
                            :rules="passwordRules"
                            :type="showPassword ? 'text' : 'password'"
                            required
                        ></v-text-field>

                    </v-col>
                    
                </v-row>

                <v-row>
                    <v-col>
                        <label for="confirmPassword">Confirm Password</label><span class="star">*</span>
                        <v-text-field
                            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showConfirmPassword = !showConfirmPassword"
                            v-model="confirmPassoword"
                            :rules="passwordMatchRules"
                            :type="showConfirmPassword ? 'text' : 'password'"
                            required
                        ></v-text-field>
                    </v-col>
                
                </v-row>


                <v-row>
                    <v-col>
                        <label for="">Country/Region</label><span class="star">*</span>
                        <v-select
                        v-model="formData.country"
                        :items="countries"
                        :rules="[v => !!v || 'Item is required']"
                        required>
                        </v-select>
                    </v-col>
                </v-row>


                <v-row>
                    <v-col>
                        <label for="">Plan</label><span class="star">*</span>
                        <v-select
                            v-model="formData.plan"
                            :items="plans"
                            :rules="[v => !!v || 'Item is required']"
                            :item-text="'text'"
                            :item-value="'value'"
                            return-object
                            required>
                        </v-select>
                    </v-col>
                </v-row>


                <v-row v-if="formData.plan=='Standard(USD 30.00/Month)' || formData.plan=='Premium(USD 60.00/Month)'">
                    <v-col>
                        <label for="">Subscription Period</label><span class="star">*</span>
                        <v-select
                            v-model="formData.period"
                            :items="periods"
                            :rules="[v => !!v || 'Item is required']"
                            required>
                        </v-select>
                    </v-col>
                </v-row>

                <v-row v-if="formData.plan=='Standard(USD 30.00/Month)' || formData.plan=='Premium(USD 60.00/Month)'">
                    <v-col>
                        <label for="">Do you have a LSS promo code?</label>
                        <v-checkbox
                            v-model="havePromoCode"
                            label="Yes,I have one!"
                        ></v-checkbox>

                    </v-col>
                </v-row>

                <v-row v-if="(formData.plan=='Standard(USD 30.00/Month)' || formData.plan=='Premium(USD 60.00/Month)') && havePromoCode" >
                    <v-col>
                        <label for="">Early Bird Promo Code</label>
                        <v-text-field
                            v-model="formData.promoCode"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-btn
                        style="float:right"
                        flat
                        color="error"
                        @click="toStep2"
                            >
                            Next
                        </v-btn>
                        

                    </v-col>
                </v-row>
                
                </v-form>

            </v-window-item>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------- -->
            
            <v-window-item value="payment">
                

                <form id="payment-form">
                <div id="payment-element">
                    <!-- Elements will create form elements here -->
                </div>
                <!-- <button id="submit">Submit</button> -->
                <!-- <v-btn
                id="submit"
                style="float:right"
                flat
                color="error">
                    Submit
                </v-btn> -->
                <button id="submit">Submit</button>
                <div id="error-message">
                    <!-- Display error message to your customers here -->
                </div>
                </form>


                <!-- <v-form v-model="formValid" ref="form2" lazy-validation>
                <v-row>
                    <v-col>
                        <label for="firstName">First Name</label><span class="star">*</span>
                        <v-text-field v-model="formData.firstName" :rules="generalRules" required
                            
                        ></v-text-field>
                    </v-col>

                    <v-col>
                        <label for="">Last Name</label><span class="star">*</span>
                        <v-text-field v-model="formData.lastName" :rules="generalRules" required
                            
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <label for="">Plan</label><span class="star">*</span>
                        <v-select
                            v-model="formData.plan"
                            :items="plans"
                            :rules="[v => !!v || 'Item is required']"
                            :item-text="'text'"
                            :item-value="'value'"
                            return-object
                            required>
                        </v-select>
                    </v-col>
                </v-row>



                <v-row>

                    <v-col>
                        <v-btn
                            style="float:left"
                            @click="toStep1"
                            color="grey"
                            plain
                            >
                            Previous
                        </v-btn>
                    </v-col>

                    <v-col >
                        <v-btn
                        style="float:right"
                        flat
                        color="error"
                        @click="toStep2"
                            >
                            Sign Up
                        </v-btn>
                    </v-col>
                </v-row>


            
                </v-form> -->

            </v-window-item>
        </v-window>

    </v-container>
  </v-app>
</template>

<script>

// import CustomSelect from '@/components/select/CustomSelect.vue'
import loadScript from '@/libs/loadScript.js'
import {seller_register} from '@/api/user'

export default {
    components:{
        // CustomSelect
    },
    mounted(){
        loadScript("https://js.stripe.com/v3/",()=>{
            alert('script loaded')
        })
    },
    data(){
        return{
            tab:null,
            formValid:true,
            showPassword:false,
            showConfirmPassword:false,
            havePromoCode:false,
            countries:['Australia','Cambodia','Canada','Hong Kong', 'Korea', 'Malaysia', 'Singapore', 'Taiwan', 'Thailand', 'United States', 'Vietnam'],
            plans:['Free Trial', 'Lite', 'Standard(USD 30.00/Month)', 'Premium(USD 60.00/Month)'],
            periods:['Monthly', 'Quarterly'],
            formData:{
                firstName:"",
                lastName:"",
                contactNumber:"",
                email:"",
                password:"",
                country:"",
                plan:"",
                period:"",
                promoCode:""
            },
            confirmPassoword:"",
            generalRules: [
                v => !!v || 'This field is required',
                v => (v && v.length <= 50) || 'This field must be less than 50 characters',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules:[
                v => !!v || 'Password is required',
                v => (v && v.length >= 8) || 'This field must be more than 8 characters',
                v => (v && v.length <= 50) || 'This field must be less than 50 characters',
            ],
            passwordMatchRules:[
                v => !!v || 'Confirm Password is required',
                v => v==this.formData.password||`Password dosen't match`
            ],
            completeColor:"#ed2225",
            incompleteColor:"#777771",
            colors:{
                basicInfoColor:"#ed2225",
                paymentColor:"#777771",
                confirmationColor:"#777771"
            }
        }
    },
    methods:{
        toStep2(){
            this.tab = "payment"
            this.colors.paymentColor = this.completeColor

            seller_register(this.formData).then(res=>{
                console.log(res)
                this.renderStripeElement(res.data.client_secret)
            }).catch(err =>{
                alert(err)
            })
            // this.tab = "payment"
            // this.colors.paymentColor = this.completeColor
            // console.log('next')
            // this.$refs.form.validate().then(
            //     res=>{
            //         if(res.valid){
            //             console.log('valid')
            //         }
            //     }
            // ).catch(
            //     err=>{
            //         alert(err)
            //     }
            // )
        },
        toStep1(){
            this.tab = "basicInfo"
            this.colors.paymentColor = this.incompleteColor
        },
        renderStripeElement(intentSecret){
            const stripe = window.Stripe('pk_test_51J2aFmF3j9D00CA0eWhxHiswrqFUfn5yNKDizVeCNA4cZBoH4TV3kRGoChos2MWNKb6kUs8w8cA2u5SheHGSeWIf00z9xRe0QZ');

            const options = {
            clientSecret: intentSecret,
            // Fully customizable with appearance API.
            appearance: {/*...*/},
            };

            // Set up Stripe.js and Elements to use in checkout form, passing the client secret obtained in step 2
            const elements = stripe.elements(options);

            // Create and mount the Payment Element
            const paymentElement = elements.create('payment');
            paymentElement.mount('#payment-element');


            const form = document.getElementById('payment-form');

            form.addEventListener('submit', async (event) => {
                console.log('submit')
                event.preventDefault();

                const {error} = await stripe.confirmPayment({
                    //`Elements` instance that was used to create the Payment Element
                    elements,
                    // confirmParams: {
                    // return_url: 'https://localhost:8080/#/registeration',
                    // },
                });

                if (error) {
                    // This point will only be reached if there is an immediate error when
                    // confirming the payment. Show error to your customer (for example, payment
                    // details incomplete)
                    const messageContainer = document.querySelector('#error-message');
                    messageContainer.textContent = error.message;
                } else {
                    console.log('testtest')
                    // Your customer will be redirected to your `return_url`. For some payment
                    // methods like iDEAL, your customer will be redirected to an intermediate
                    // site first to authorize the payment, then redirected to the `return_url`.
                    stripe.retrievePaymentIntent(intentSecret).then(({paymentIntent}) => {
                        const message = document.querySelector('#message')

                        // Inspect the PaymentIntent `status` to indicate the status of the payment
                        // to your customer.
                        //
                        // Some payment methods will [immediately succeed or fail][0] upon
                        // confirmation, while others will first enter a `processing` state.
                        //
                        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
                        switch (paymentIntent.status) {
                            case 'succeeded':
                            message.innerText = 'Success! Payment received.';
                            break;

                            case 'processing':
                            message.innerText = "Payment processing. We'll update you when payment is received.";
                            break;

                            case 'requires_payment_method':
                            message.innerText = 'Payment failed. Please try another payment method.';
                            // Redirect your user back to your payment page to attempt collecting
                            // payment again
                            break;

                            default:
                            message.innerText = 'Something went wrong.';
                            break;
                        }
                    });

                }
            });


        }
    }
    
}
</script>

<style>
h1{
    color: #060607;
    font-size: 40px;
    font-weight: 600;
    font-family: Sofia Pro;
}

label {
    color: #777771;
    font-size: 15px;
    font-family: Roboto;
    font-weight: bold;

}

button{
    background-color: #ed2225;
    color: #FFFFFF;
}
.star{
    color: #E04562;
    font-size: 15px;
    font-family: Roboto;
    font-weight: bold;
}
</style>