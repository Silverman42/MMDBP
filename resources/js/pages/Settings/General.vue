<template>
    <div class="pb-8 md:w-7/12 mt-8 reveal-left" style="--delay: 0.1s">
        <form @submit.prevent="submitGeneralSetting" id="general_settings_form"></form>
        <h2 class="text-lg font-bold mb-8">
            General Settings
        </h2>
        <div class="mb-6 reveal-up" style="--delay: 0.1s">
            <text-input v-model="general.app_name" :error="$page.errors.app_name || ''" form="general_settings_form"
                label="Application Name" />
        </div>
        <div class="mb-6 reveal-up" style="--delay: 0.3s">
            <text-input v-model="general.app_email" :error="$page.errors.app_email || ''" form="general_settings_form"
                label="Application Email" />
        </div>
        <div class="mb-6 reveal-up" style="--delay: 0.5s">
            <text-input v-model="general.app_url" :error="$page.errors.app_url || ''" form="general_settings_form"
                label="Application URL" />
        </div>
        <div class="mb-6 reveal-up" style="--delay: 0.5s">
            <text-input type="number" v-model="general.naira_charge" :error="$page.errors.naira_charge || ''" form="general_settings_form"
                label="Payment Fee (Naira)" />
        </div>
        <div class="mb-6 reveal-up" style="--delay: 0.5s">
            <text-input type="number" v-model="general.dollar_charge" :error="$page.errors.dollar_charge || ''" form="general_settings_form"
                label="Payment Fee (Dollars)" />
        </div>
        <div class="mb-6 reveal-up" style="--delay: 1s">
            <switch-input :error="$page.errors.disable_client_profile_modification || ''"
                v-model="general.disable_client_profile_modification" label="Disable Client Profile Modification" />
        </div>
        <div class="mb-6 reveal-up" style="--delay: 1.3s">
            <switch-input :error="$page.errors.disable_client_registration || ''"
                v-model="general.disable_client_registration" label="Disable Client Modification" />
        </div>
        <div class="mb-6 reveal-up" style="--delay: 1.5s">
            <switch-input :error="$page.errors.recieve_client_emails || ''" v-model="general.recieve_client_emails"
                label="Recieve Client Emails" />
        </div>
        <div class="flex justify-end reveal-up" style="--delay: 1.7s">
            <primary-btn form="general_settings_form" width="w-full md:w-auto" type="submit">Save Changes</primary-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'General',
        data(){
            return {
                general: {
                    app_name: this.$page.auth.settings.app_name,
                    app_email: this.$page.auth.settings.app_email,
                    app_url: this.$page.auth.settings.app_url,
                    color_scheme: this.$page.auth.settings.color_scheme,
                    disable_client_profile_modification: this.$page.auth.settings.disable_client_profile_modification == 1 ? true : false,
                    disable_client_registration: this.$page.auth.settings.disable_client_registration == 1 ? true : false,
                    recieve_client_emails: this.$page.auth.settings.recieve_client_emails == 1 ? true : false,
                    naira_charge: this.$page.auth.settings.naira_charge || 0,
                    dollar_charge: this.$page.auth.settings.dollar_charge || 0,
                }   
            }
        },
        methods: {
            submitGeneralSetting() {
                this.$inertia.put(this.$route.relativePath('settings.update'), this.general)
            },
        },
    }

</script>

<style>

</style>
