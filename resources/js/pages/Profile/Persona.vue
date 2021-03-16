<template>
    <div>
        <div class="mb-5">
            <h3 class="text-lg font-bold">Persona</h3>
            <p class="text-sm">Work and Educational information</p>
        </div>
        <form action="" @submit.prevent="submitForm" id="persona"></form>
        <div class="mb-3">
            <text-input label="Hobbies" v-model="hobbies" :error="$page.errors.hobbies || ''" form="persona" />
        </div>
        <div class="mb-3">
            <text-input label="Profession" v-model="profession" :error="$page.errors.profession || ''" form="persona" />
        </div>
        <div class="mb-3">
            <text-input label="Ambition" v-model="ambition" :error="$page.errors.ambition || ''" form="persona" />
        </div>
        <div class="mb-10">
            <select-input label="Educational Certificate" :value="educational_cert" @input="changeCertificates($event)" :error="$page.errors.educational_cert || ''" form="persona">
                <option v-for="(cert,index) in certificates" :key="index" :value="cert">
                    {{cert}}
                </option>
            </select-input>
        </div>
        <primary-btn form="persona" type="submit" color="yellow" fontColor="text-black" width="w-full">Update Persona</primary-btn>
    </div>
</template>

<script>
export default {
    name: 'Persona',
    data(){
        return{
            certificates: ['Secondary School Certificate',"Bachelor Degree","Master Degree (MSC)","Doctrorate Degree (PhD)"],
            educational_cert: 'Secondary School Certificate',
            ambition: '',
            hobbies: '',
            profession: ''
        }
    },
    methods:{
        changeCertificates(cert){
            this.educational_cert = cert
        },
        assignDefaults(){
            this.educational_cert = this.$page.user.educational_cert || ''
            this.hobbies = this.$page.user.hobbies || ''
            this.ambition = this.$page.user.ambition || ''
            this.profession = this.$page.user.profession || ''
        },
        submitForm(){
            const {educational_cert,hobbies,ambition,profession} = this
            this.$inertia.post(this.$route.relativePath('client.profile.update.persona'),{educational_cert,hobbies,ambition,profession})
        },
        mounted(){
            this.assignDefaults()
        }
    }
}
</script>

<style>

</style>