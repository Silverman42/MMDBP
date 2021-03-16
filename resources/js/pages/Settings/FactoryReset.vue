<template>
    <div class="pb-8 md:w-7/12 mt-8 reveal-left" style="--delay: 0.1s">
        <form @submit.prevent="activateFactoryReset" id="factory_reset_form"></form>
        <div class="mb-8">
            <h2 class="text-lg font-bold reveal-up mb-3" style="--delay: 0.1s">
                Factory Reset Settings
            </h2>
            <p class="reveal-up" style="--delay: 0.3s">Please be warned that this action is irreversible as all topics, subjects, questions and collections will be wiped off while all settings will be returned to their default state</p>
        </div>
        <div class="mb-8 reveal-up" style="--delay: 0.5s">
            <text-input label="Confirm your password" :error="$page.errors.password || ''" v-model="password" type="password" form="factory_reset_form"/>
        </div>
        <div class="flex justify-end reveal-up" style="--delay: 0.7s">
            <primary-btn color="red" form="factory_reset_form" width="w-full md:w-auto" type="submit">Activate Factory Reset</primary-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FactoryReset',
    data(){
        return{
            password: ''
        }
    },
    methods:{
        activateFactoryReset(){
            const vm = this
            this.$inertia.post(this.$route.relativePath('settings.factory_reset'),{password:vm.password})
        }
    },
    updated(){
        if(this.$page.auth.alert_type === 'success'){
            setTimeout(()=>window.location.reload(),800)
        }
    }
}
</script>

<style>

</style>