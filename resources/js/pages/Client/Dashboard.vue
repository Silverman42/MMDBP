<template>
    <div>
        <section class="mb-10">
            <title-board boardTitle="Dashboard" boardText="Statistical data as at 20th September, 2020"
                :hostName="$page.auth.settings.app_url" boardImgLink="img/board_img/dashboard.svg" />
        </section>
        <section class="flex flex-wrap md:flex-no-wrap ">
            <div class="md:w-4/12 w-full mb-10 md:mr-10">
                <card-bg>
                    <h3 class="text-lg font-bold mb-6">Statistics</h3>
                    <div class="mb-5">
                        <h6 class="uppercase text-xs tracking-widest">Competition</h6>
                        <p class="text-gray-900">Miss May Day Pageant {{competitionData.year || '2020'}}</p>
                    </div>
                    <div v-if="$page.user.position !== null" class="flex justify-between items-center mb-5">
                        <h6 class="uppercase text-xs tracking-widest">Position</h6>
                        <p class="text-gray-900">{{$page.user.position}}</p>
                    </div>
                    <div class="flex justify-between items-center mb-5">
                        <div>
                            <h6 class="uppercase text-xs tracking-widest">Payment Status</h6>
                            <p class="text-gray-900">{{$page.user.has_paid === 1 ? 'Paid' : 'Unpaid'}}</p>
                        </div>
                        <span
                            class="inline-flex justify-center items-center rounded-full w-8 h-8"
                            :class="[($page.user.has_paid == 1 ? 'bg-yellow-200 text-yellow-500' : 'bg-red-200 text-red-500')]">
                            <iconify-icon :icon=" $page.user.has_paid ? icons.check : icons.fail"></iconify-icon>
                        </span>
                    </div>
                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <h6 class="uppercase text-xs tracking-widest">Profile stage</h6>
                            <p class="text-gray-900 capitalize">{{$page.user.profile_stage}}</p>
                        </div>
                        <div class="h-3 rounded-lg overflow-hidden bg-primaryBg-300">
                            <div :class="[`h-8 bg-${profileStage.color}-500`]" :style="{width: `${profileStage.width}%`}"></div>
                        </div>
                    </div>
                </card-bg>
            </div>
            <div class="md:w-9/12 w-full">
                <card-bg extend="mb-10">
                    <div class="mb-6">
                        <h3 class="text-lg font-bold">Registration Steps</h3>
                        <p class="text-sm">Below is a list of profile update steps which should be completed to enable
                            you
                            stand a chance of being accpted for the competition</p>
                    </div>
                    <step-detail :steps="profileSteps" />
                    <div v-if="$page.user.has_paid === 1" class="flex justify-end mt-6">
                        <inertia-link :href="$route.relativePath('client.profile.index')" class="inline-flex p-1 items-center text-yellow-500 hover:text-yellow-600">
                            <span class="mr-2">View Profile</span>
                            <iconify-icon :icon="icons.arrow_right" />
                        </inertia-link>
                    </div>
                </card-bg>
                <card-bg extend="mb-10" v-if="$page.user.has_paid === 0">
                    <form :action="$route.url('client.payment.initiate')" method="POST" id='payment'></form>
                    <input type="hidden" name="_token" :value="$page.token" form="payment">
                    <div class="rounded-md bg-auto bg-yellow-500 p-5 mb-5"
                        :style="{'background-image':`url(${$page.auth.settings.app_url}/img/background_1.svg)`}">
                        <div class="w-9/12">
                            <h3 class="text-2xl md:text-3xl mb-1 text-black font-bold">Please Make Payment</h3>
                            <p class="text-black text-sm">Paying for the contest gives you access to update your profile
                                which in turn increases your chances of being selected for the competition
                            </p>
                        </div>
                    </div>
                    <div class="mb-5">
                        <select-input name="nationality" form="payment" :value='selectedCountry' label="Nationality"
                            @input="selectCountry($event)">
                            <option v-for="(country,index) in countries" :key="index" :value="country.name">
                                {{country.name}}</option>
                        </select-input>
                    </div>
                    <div class="flex mb-5 justify-between items-center">
                        <h6 class="">Regisration Fee</h6>
                        <span
                            class="text-2xl text-black font-bold md:text-4xl">{{getCurrencySymbol}}{{getRegisterationFee|changeNumberFormat}}</span>
                    </div>
                    <div>
                        <primary-btn type='submit' form='payment' color='yellow' fontColor="text-black" width="w-full">
                            Pay and Update Profile</primary-btn>
                    </div>
                </card-bg>
                <card-bg v-if="$page.user.has_paid === 1" extend="mb-10">
                    <h3 class="text-lg font-bold mb-5">Payment Summary</h3>
                    <div class="flex flex-wrap mb-5">
                        <div class="w-full md:w-4/12 mb-4 md:pr-2">
                            <h6 class="uppercase text-xs tracking-widest">Payment Status</h6>
                            <p class="text-green-500">Paid</p>
                        </div>
                        <div class="w-full md:w-4/12 mb-4 md:pr-2">
                            <h6 class="uppercase text-xs tracking-widest">Amount</h6>
                            <p class="text-gray-900">{{transactionData.currency == 'ngn' ? '₦': '$'}}{{transactionData.amount|changeNumberFormat}}</p>
                        </div>
                        <div class="w-full md:w-4/12 mb-4 md:pr-2">
                            <h6 class="uppercase text-xs tracking-widest">Payment Gateway</h6>
                            <p class="text-gray-900">Paystack</p>
                        </div>
                        <div class="w-full md:w-4/12 mb-4 md:pr-2">
                            <h6 class="uppercase text-xs tracking-widest">Date of Payment</h6>
                            <p class="text-gray-900">{{transactionData.human_date_of_payment}}</p>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <inertia-link :href="$route.relativePath('client.invoice')" class="inline-flex p-1 items-center text-yellow-500 hover:text-yellow-600">
                            <span class="mr-2">View Invoice</span>
                            <iconify-icon :icon="icons.arrow_right" />
                        </inertia-link>
                    </div>
                </card-bg>
            </div>
        </section>
    </div>
</template>

<script>
    import Layout from '../../Layout/ClientLayout'
    import cRight from "@iconify/icons-feather/chevron-right";
    import check from "@iconify/icons-feather/check";
    import fail from "@iconify/icons-feather/x"
    import arrow_right from "@iconify/icons-feather/arrow-right"
    export default {
        name: "Dashboard",
        layout: Layout,
        components: {
            ProfileCard: () => import( /* webpackChunkName: "settings_page" */ '../../components/ProfileCard2'),
            StepDetail: () => import( /* webpackChunkName: "settings_page" */ '../../components/StepDetails')
        },
        data() {
            return {
                icons: {
                    cRight,
                    check,
                    fail,
                    arrow_right
                },
                countries: [],
                selectedCountry: 'Nigeria',
                profileSteps: {}
            }
        },
        computed: {
            profileStage(){
                if(this.$page.user.profile_stage === 'payment'){
                    return {
                        width: 30.33,
                        color: 'gray'
                    }
                }
                if(this.$page.user.profile_stage === 'audition'){
                    return {
                        width: 60.66,
                        color: 'yellow'
                    }
                }
                return {
                        width: 100,
                        color: 'green'
                    }
            },
            getCurrencySymbol() {
                return this.selectedCountry === 'Nigeria' ? '₦' : '$'
            },
            getRegisterationFee() {
                return this.selectedCountry === 'Nigeria' ? parseFloat(this.$page.auth.settings.naira_charge) : parseFloat(this.$page.auth.settings.dollar_charge)
            },
            transactionData(){
                return this.$page.user.transactions ? this.$page.user.transactions[0] : {}
            },
            competitionData(){
                return this.$page.user.competitions || {}
            }
        },
        filters: {
            changeNumberFormat(number, fractionUnit = 2) {
                return (new Intl.NumberFormat('en-US', {
                    minimumFractionDigits: 0
                }).format(number))
            }
        },
        methods: {
            async getCountries() {
                return await import('../../plugins/countries')
            },
            selectCountry(e) {
                this.selectedCountry = e
            }
        },
        mounted() {
            const vm = this
            vm.profileSteps = {
                'medicals' : vm.$page.user.has_completed_medicals,
                'emergency' : vm.$page.user.has_completed_emergency,
                'identity' : vm.$page.user.has_completed_identity,
                'travel' : vm.$page.user.has_completed_travel,
                'persona' : vm.$page.user.has_completed_persona,
                'social' : vm.$page.user.has_completed_social
            }
            this.getCountries().then((country) => {
                vm.countries = country.default
            })
        }
    }

</script>

<style>

</style>
