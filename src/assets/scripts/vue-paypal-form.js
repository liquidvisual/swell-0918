/*
    VUE-PAYPAL-FORM.JS
    updated: 16.06.18

    DEPENDENCIES
        https://unpkg.com/vue/dist/vue.js
        https://unpkg.com/axios/dist/axios.min.js
        https://unpkg.com/vue-paypal-checkout/dist/vue-paypal-checkout.min.js
*/

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

Vue.config.productionTip = false;

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

Vue.component('vue-paypal-form', {
    props: {

    },
    template: `
        <!-- FORM CONTACT -->
        <form
            class="contact-form"
            name="Contact Form"
            novalidate
            @submit.prevent="validateBeforeSubmit">

            <!-- DISABLED MASK - for when PayPal returns and Axios is sending to server -->
            <div
                v-if="paypal.processing"
                class="disabled-mask">
            </div>

            <fieldset>

                <!-- NAME* -->
                <label class="form-group d-block">
                    <p class="mb-2">Full Name<small class="asterisk">*</small></p>

                    <input
                        class="form-control"
                        :class="{'is-invalid': errors.has('name') }"
                        name="name"
                        type="text"
                        v-model="form.fullName"
                        v-validate="'required|alpha_spaces'">

                    <small
                        v-show="errors.has('name')"
                        class="error shake animated">

                    <i class="fa fa-warning"></i>&nbsp;<span v-text="errors.first('name')"></span>
                    </small>
                </label>

                <!-- EMAIL* -->
                <label class="form-group d-block">
                    <p class="mb-2">Email<small class="asterisk">*</small></p>

                    <input
                        class="form-control"
                        :class="{'is-invalid': errors.has('email') && fields.email.touched }"
                        name="email"
                        v-model="form.email"
                        v-validate="'required|email'"
                        type="email">

                    <small
                        v-show="errors.has('email') && fields.email.touched"
                        class="error shake animated">

                        <i class="fa fa-warning"></i>&nbsp;<span v-text="errors.first('email')"></span>
                    </small>
                </label>

                <!-- PHONE -->
                <label class="form-group d-block">

                    <p class="mb-2">Phone<small class="asterisk">*</small></p>

                    <input
                        class="form-control"
                        :class="{'is-invalid': errors.has('phone') }"
                        name="phone"
                        type="tel"
                        v-model="form.phone"
                        v-validate="'required|numeric'">

                    <small
                        v-show="errors.has('phone')"
                        class="error shake animated">

                        <i class="fa fa-warning"></i>&nbsp; <span v-text="errors.first('phone')"></span>
                    </small>
                </label>

            </fieldset>
            <fieldset>
                <div class="row">
                    <div class="col-md-6">

                        <!-- PRODUCT -->
                        <label class="form-group d-block">

                            <p>Product<small class="asterisk">*</small></p>

                            <select
                                class="custom-select"
                                name="product"
                                v-validate="'required'"
                                v-model="form.product"
                                @change="setProduct(form.product)">

                                <option
                                    disabled
                                    selected
                                    value="">
                                        Choose one
                                </option>

                                <option
                                    v-for="(item, key) in products"
                                    :key="item.id"
                                    :value="item"
                                    v-text="item.name">
                                </option>

                            </select>
                        </label>

                    </div>
                    <div class="col-md-6">

                        <!-- QUANTITY -->
                        <label class="form-group d-block">

                            <p>Quantity<small class="asterisk">*</small></p>

                            <select
                                class="custom-select"
                                name="quantity"
                                v-validate="'required'"
                                v-model="form.quantity"
                                :disabled="!form.product">

                                <option
                                    disabled
                                    selected
                                    value="">
                                        Choose one
                                </option>

                                <option
                                    v-for="(item, index) in form.product.prices"
                                    :key="item.id"
                                    :value="item"
                                    v-text="item.name">
                                </option>

                            </select>
                        </label>

                    </div>

                    <!-- PRODUCT INFO -->
                    <div
                        v-if="form.quantity.description"
                        class="col mb-3">

                        <small class="text-muted">
                            <i class="fa fa-info-circle"></i>
                            <span v-text="form.quantity.description"></span>
                        </small>
                    </div>

                </div>
            </fieldset>
            <fieldset>

                <!-- MESSAGE -->
                <label class="form-group d-block">

                    <p>Comments</p>

                    <textarea
                        class="form-control"
                        name="message"
                        rows="4"
                        placeholder=""
                        :class="{'is-invalid': errors.has('message') }"
                        v-model="form.message"
                        v-validate="'max:2000'">
                    </textarea>

                    <small
                        v-show="errors.has('message')"
                        class="error shake animated">

                        <i class="fa fa-warning"></i>&nbsp;
                        <span v-text="errors.first('message')"></span>
                    </small>

                </label>

            </fieldset>
            <fieldset>

                <!-- TERMS & CONDITIONS -->
                <div class="form-group">
                    <label class="custom-control custom-checkbox mb-0">
                        <input
                            class="custom-control-input"
                            name="Terms and Conditions"
                            type="checkbox"
                            value="true"
                            v-validate="'required'"
                            v-model="form.termsAndConditionsAccepted">

                        <p class="custom-control-label mb-0">I agree to the
                            <a href="#" target="_blank">terms &amp; conditions.</a><small class="asterisk">*</small>
                        </p>

                    </label>

                    <small
                        v-show="errors.has('Terms and Conditions')"
                        class="error shake animated">

                        <i class="fa fa-warning"></i>&nbsp;
                        <span v-text="errors.first('Terms and Conditions')"></span>
                    </small>
                </div>

            </fieldset>

            <!-- * REQUIRED -->
            <p class="float-md-right">
                <small class="asterisk">*</small>
                <small class="text-muted" style="position: relative; top: -5px;">required to send</small>
            </p>

            <!-- SUBMIT - old: (errors.any() && !failures) v-if="errors.any() || !isComplete" -->
            <button
                :disabled="errors.any() || !isComplete || processing"
                type="submit"
                class="btn btn-primary mb-4">

                <div v-show="processing" class="spinner-border text-primary">Loading...</div>
                <span v-show="processing" class="text">Sending</span>
                <span v-show="!processing" class="text">Make Enquiry</span>
            </button>

            <!-- OR -->
            <b class="or-text text-muted mx-2">
                <span class="font-weight-light">-</span> OR
                <span class="font-weight-light">-</span>
            </b>

            <!-- PAYPAL BUTTON WRAPPER -->
            <div class="d-inline-block position-relative" style="width: 200px">

                <!-- BUTTON MASK -->
                <div
                    v-if="errors.any() || !isComplete || processing"
                    class="disabled-mask" >
                </div>

                <!-- PAYPAL CHECKOUT BUTTON -->
                <paypal-checkout
                    currency="AUD"
                    env="sandbox"
                    locale="en_AU"
                    :amount="String(form.quantity ? form.quantity.price : '')"
                    :button-style="paypal.buttonStyle"
                    :client="paypal"
                    @payment-authorized="paymentAuthorized"
                    @payment-completed="paymentCompleted"
                    @payment-cancelled="paymentCancelled">
                </paypal-checkout>
            </div>

        </form>
    </div>
    `,
});

//-----------------------------------------------------------------
// VUE INSTANCE
//-----------------------------------------------------------------

new Vue({
    el: '#vue-app',
});

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------


//==================================================
//
//==================================================