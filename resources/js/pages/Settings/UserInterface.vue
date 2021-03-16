<template>
    <div class="pb-8 md:w-7/12 mt-8">
        <form @submit.prevent="updateUserInterface" id="user_interface_form"></form>
        <div class="mb-12 reveal-left" style="--delay: 0.1s">
            <div class="mb-5">
                <h2 class="text-lg font-bold mb-3 reveal-up" style="--delay: 0.1s">
                    Color Scheme Settings
                </h2>
                <p class="reveal-up" style="--delay: 0.3s">Changing the color scheme of the software interface to suite your company branding</p>
            </div>
            <div class="reveal-up" style="--delay: 0.5s">
                <select-input form="user_interface_form" :value="color_scheme" v-model="color_scheme" label="Choose a color scheme" :error="$page.errors.color_scheme">
                    <option class="capitalize" v-for="(color,index) in $page.color_schemes" :key="index" :value="color">{{color}}</option>
                </select-input>
            </div>
        </div>

        <div class="mb-12 reveal-left" style="--delay: 0.3s">
            <div class="mb-5">
                <h2 class="text-lg font-bold mb-3 reveal-up" style="--delay: 0.9s">
                    Dashboard Logo
                </h2>
                <p class="reveal-up" style="--delay: 1.1s">Please use an image type with a high contrast color for your dashboard logo as it will be used on a low contrast background</p>
            </div>
            <div class="reveal-up" style="--delay: 1.3s">
                <file-input form="user_interface_form" @input="setFileInput($event,'dashboard_logo')" :error="$page.errors.dashboard_logo || ''" label="File should be 500kb max and should be one of the following formats : JPG, PNG, JPEG"  />
            </div>
        </div>
        <div class="mb-12 reveal-left" style="--delay: 0.5s">
            <div class="mb-5">
                <h2 class="text-lg font-bold reveal-up mb-3" style="--delay: 1.7s">
                    Authentication Logo
                </h2>
                <p class="reveal-up" style="--delay: 1.9s">Please use an image type with a low contrast color for your authentication page logo as it will be used in all authentication pages which have a high contrast background</p>
            </div>
            <div class="reveal-up" style="--delay: 2.1s">
                <file-input form="user_interface_form" @input="setFileInput($event,'auth_logo')" :error="$page.errors.auth_logo || ''"  label="File should be 500kb max and should be one of the following formats : JPG, PNG, JPEG"  />
            </div>
        </div>
        <div class="flex justify-end reveal-up" style="--delay: 2.3s">
            <primary-btn form="user_interface_form" width="w-full md:w-auto" type="submit">Update User Interface</primary-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInterface',
    data(){
        return {
            color_scheme: this.$page.auth.settings.color_scheme,
            auth_logo: '',
            dashboard_logo: ''
        }
    },
    methods:{
        setFileInput(event,fileType){
            this[fileType] = event
        },
        updateUserInterface(){
            const form = new FormData()
            form.append('color_scheme',this.color_scheme)
            if(this.auth_logo !== ""){
                form.append('auth_logo',this.auth_logo)
            }
            if(this.dashboard_logo !== ""){
                form.append('dashboard_logo',this.dashboard_logo)
            }
            this.$inertia.post(this.$route.relativePath('settings.user_interface'),form)
        },
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