<template>
    <div>
        <form @submit.prevent="createUser" id="create-user"></form>
            <div class="mb-10 reveal-left" style="--delay: 0.3s">
                <h4 class="text-sm font-bold mb-4 border border-primaryBg-300 rounded-md inline-block p-2">Biodata</h4>
                <div class="mb-2">
                    <text-input form="create-user" :error="$page.errors.first_name || ''" v-model="biodata.first_name" label="First name" />
                </div>
                <div class="mb-2">
                    <text-input form="create-user" :error="$page.errors.last_name || ''" v-model="biodata.last_name" label="Last name" />
                </div>
                <div class="mb-2">
                    <text-input form="create-user" :error="$page.errors.email || ''" type="email" v-model="biodata.email" label="Email" />
                </div>
                <div class="mb-2">
                    <text-input type="password" :error="$page.errors.password || ''" v-model="biodata.password" form="create-user" label="Password" />
                </div>
                <div class="mb-2">
                    <text-input type="password" form="create-user" v-model="biodata.password_confirmation" label="Confirm Password" />
                </div>
            </div>

            <div class="mb-10 reveal-left" style="--delay: 0.5s">
                <h4 class="text-sm font-bold mb-4 border border-primaryBg-300 rounded-md inline-block p-2">Social</h4>
                <div class="mb-2">
                    <text-input v-model="social.facebook_url" :error="$page.errors.facebook_url || ''" form="create-user" label="Facebook URL">
                        <span class="italic text-gray-500 text-xs">Optional</span>
                    </text-input>
                </div>
                <div class="mb-2">
                    <text-input v-model="social.twitter_url" :error="$page.errors.twitter_url || ''" form="create-user" label="Twitter URL">
                        <span class="italic text-gray-500 text-xs">Optional</span>
                    </text-input>
                </div>
                <div class="mb-2">
                    <text-input v-model="social.phone_number" :error="$page.errors.phone_number || ''" type="number" form="create-user" label="Phone Number">
                        <span class="italic text-gray-500 text-xs">Optional</span>
                    </text-input>
                </div>
            </div>

            <div class="mb-10 reveal-left" style="--delay: 0.7s">
                <h4 class="text-sm font-bold mb-4 border border-primaryBg-300 rounded-md inline-block p-2">Avatar</h4>
                <file-input form="create-user" :error="$page.errors.avatar || ''" @input="changeAvatar($event)" label="Image should have a size of 800kb max and should be among the following file type: JPG, PNG" />
            </div>

            <div class="mb-10 reveal-left" style="--delay: 0.9s">
                <h4 class="text-sm font-bold mb-4 border border-primaryBg-300 rounded-md inline-block p-2">Roles</h4>
                <div class="flex items-center flex-wrap">
                    <radio-input value="super-admin" :defaultValue="roles" name="roles" @input="selectRole($event)" title="Super Admin" />
                    <radio-input value="admin" :defaultValue="roles" name="roles" @input="selectRole($event)" title="Admin" />
                </div>
                <p class="text-xs text-red-500" v-if="$page.errors.roles">
                    {{$page.errors.roles}}
                </p>
            </div>

            <div v-if="roles === 'admin'" class="mb-10 reveal-left" style="--delay: 1.1s">
                <h4 class="text-sm font-bold mb-4 border border-primaryBg-300 rounded-md inline-block p-2">Permissions</h4>
                <div class="mb-4">
                    <checkbox v-model="permissions.subjects" layout="widthFull">
                        <p class="ml-2 text-sm font-bold">Subjects</p>
                        <p class="ml-2 text-xs">Add, view, delete and update subjects</p>
                    </checkbox>
                    <p class="text-xs text-red-500" v-if="$page.errors.subjects">
                        {{$page.errors.subjects}}
                    </p>
                </div>
                <div class="mb-4">
                    <checkbox v-model="permissions.topics" layout="widthFull">
                        <p class="ml-2 text-sm font-bold">Topics</p>
                        <p class="ml-2 text-xs">Add, view, delete and update topics</p>
                    </checkbox>
                    <p class="text-xs text-red-500" v-if="$page.errors.topics">
                        {{$page.errors.topics}}
                    </p>
                </div>
                <div class="mb-4">
                    <checkbox v-model="permissions.questions" layout="widthFull">
                        <p class="ml-2 text-sm font-bold">Questions</p>
                        <p class="ml-2 text-xs">Add, view, delete and update questions</p>
                    </checkbox>
                    <p class="text-xs text-red-500" v-if="$page.errors.questions">
                        {{$page.errors.questions}}
                    </p>
                </div>
                <div class="mb-4">
                    <checkbox v-model="permissions.collections" layout="widthFull">
                        <p class="ml-2 text-sm font-bold">Collections</p>
                        <p class="ml-2 text-xs">Add, view, delete and update collections</p>
                    </checkbox>
                    <p class="text-xs text-red-500" v-if="$page.errors.collections">
                        {{$page.errors.collections}}
                    </p>
                </div>
                <div class="mb-4">
                    <checkbox v-model="permissions.users" layout="widthFull">
                        <p class="ml-2 text-sm font-bold">Users</p>
                        <p class="ml-2 text-xs">Add, view, delete and update users</p>
                    </checkbox>
                    <p class="text-xs text-red-500" v-if="$page.errors.users">
                        {{$page.errors.users}}
                    </p>
                </div>
                <div class="mb-4">
                    <checkbox v-model="permissions.settings" layout="widthFull">
                        <p class="ml-2 text-sm font-bold">Settings</p>
                        <p class="ml-2 text-xs">Add, view, delete and update settings</p>
                    </checkbox>
                    <p class="text-xs text-red-500" v-if="$page.errors.settings">
                        {{$page.errors.settings}}
                    </p>
                </div>
            </div>
            
            <div class="mb-10 reveal-left" style="--delay: 1.3s">
                <primary-btn width="w-full" type="submit" :loading="loading" form="create-user">Create User</primary-btn>
            </div>
    </div>
</template>

<script>
export default {
    name: 'CreateUser',
    watch:{
        $page:{
            handler(){
                this.loading = false
                if(this.$page.auth.alert_type === 'success'){
                    this.resetValues()
                    this.$emit('completeRegistration')
                }
            },
            deep:true
        }
    },
    data() {
        return {
            loading: false,
            roles: 'super-admin',
            biodata:{
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            social:{
                facebook_url: '',
                twitter_url: '',
                phone_number: ''
            },
            avatar:'',
            permissions:{
                subjects: true,
                topics: true,
                questions: true,
                collections: true,
                users: false,
                settings: false,
                profile: false,
            }
        }
    },
    methods: {
        selectRole(role){
            this.roles = role
        },
        changeAvatar(file){
            this.avatar = file
        },
        resetValues(){
            this.permissions = {
                subjects: true,
                topics: true,
                questions: true,
                collections: true,
                users: false,
                settings:false,
                profile:false,
            }
            this.social = {
                facebook_url: '',
                twitter_url: '',
                phone_number: ''
            }
            this.avatar = null
            this.roles = 'super-admin'
        },
        createUser(){
            this.loading = true
            console.log(this.permissions)
            const form = new FormData();
            form.append('avatar',this.avatar)
            form.append('roles',this.roles)
            for(let key of Object.entries(this.biodata)){
                form.append(key[0],this.biodata[key[0]])
            }
            for(let key of Object.entries(this.social)){
                form.append(key[0],this.social[key[0]])
            }
            for(let key of Object.entries(this.permissions)){
                form.append(key[0],this.permissions[key[0]])
            }
            this.$inertia.post(this.$route.relativePath('users.create'),form)
        }
    }
}
</script>

<style>

</style>