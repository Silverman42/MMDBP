<template>
    <div>
        <div class="mb-5">
            <h3 class="text-lg font-bold">Emergency</h3>
            <p class="text-sm">Information about your emergency contact</p>
        </div>
        <form action="" @submit.prevent="submitForm" id="emergency"></form>
        <div class="mb-3">
            <text-input label="Name of Emergency Contact" v-model="emergency_name" :error="$page.errors.emergency_name || ''" form="emergency" />
        </div>
        <div class="mb-3">
            <text-input label="Emergency Phone Number" v-model="emergency_phone_number" :error="$page.errors.emergency_phone_number || ''" form="emergency" />
        </div>
        <div class="mb-3">
            <text-input label="Relationship with Emergency Contact" v-model="emergency_relationship" :error="$page.errors.emergency_relationship || ''" form="emergency" />
        </div>
        <div class="mb-10">
            <text-input label="Emergency Contact Email" v-model="emergency_email" :error="$page.errors.emergency_email || ''" form="emergency" />
        </div>
        <primary-btn type="submit" color="yellow" fontColor="text-black" width="w-full" form="emergency">Update Emergency</primary-btn>
    </div>
</template>

<script>
    export default {
        name: 'Emergency',
        data(){
            return {
                emergency_name: '',
                emergency_relationship: '',
                emergency_phone_number: '',
                emergency_email: ''
            }
        },
        methods:{
            assignDefaults(){
                this.emergency_name = this.$page.user.emergency_name || ''
                this.emergency_relationship = this.$page.user.emergency_relationship || ''
                this.emergency_email = this.$page.user.emergency_email || ''
                this.emergency_phone_number = this.$page.user.emergency_phone_number || ''
            },
            submitForm(){
                const {emergency_name,emergency_relationship,emergency_email,emergency_phone_number} = this
                this.$inertia.post(this.$route.relativePath('client.profile.update.emergency'),{emergency_name,emergency_relationship,emergency_email,emergency_phone_number})
            }
        },
        mounted(){
            this.assignDefaults()
        }
    }

</script>

<style>

</style>
