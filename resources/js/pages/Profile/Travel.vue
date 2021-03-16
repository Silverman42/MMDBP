<template>
    <div>
        <div class="mb-5">
            <h3 class="text-lg font-bold">Travel</h3>
            <p class="text-sm">Travel and flight information</p>
        </div>
        <form @submit.prevent="submitTravelForm" id="travel_new"></form>
        <div class="mb-3">
            <text-input label="Depature Airport Code" v-model="departure_airport_code" :error="$page.errors.departure_airport_code || ''" form="travel_new" />
        </div>
        <div class="mb-10">
            <text-input label="Passport Number" v-model="passport_number" :error="$page.errors.passport_number || ''" form="travel_new" />
        </div>
        <primary-btn form="travel_new" type="submit" color="yellow" fontColor="text-black" width="w-full">Update Travel</primary-btn>
    </div>
</template>

<script>
export default {
    name: 'Travel',
    data(){
        return {
             departure_airport_code: '',
             passport_number: ''
        }
    },
    methods:{
        submitTravelForm(){
            const {departure_airport_code,passport_number} = this
            this.$inertia.post(this.$route.relativePath('client.profile.update.travel'),{departure_airport_code, passport_number})
        },
        assignDefault(){
            this.departure_airport_code = this.$page.user.departure_airport_code || ''
            this.passport_number = this.$page.user.passport_number || ''
        }
    },
    mounted(){
        this.assignDefault()
    }
}
</script>

<style>

</style>