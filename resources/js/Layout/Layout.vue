<template>
    <div>
        <alert-container>
            <alert v-for="(alert,index) in alertList" @closeAlert="removeAlertSynchronously(index)" 
            :key="index" :color="alert.color || 'green'" :heading="alert.heading || ''" :message="alert.message || ''">
                {{removeAlertAsynchronously(index)}}
                <iconify-icon v-if="alert.type === 'success'" :icon="icons.success" />
                <iconify-icon v-else :icon="icons.error" />
            </alert>
        </alert-container>
        <header class=" bg-primary-500 pt-3 pb-24">
            <div class="xl:w-9/12 w-11/12 mx-auto">
                <div class="flex justify-between items-center py-4">
                    <div class="w-20 flex items-center">
                        <img class="w-10"
                            :src="`${$page.auth.settings.dashboard_logo}`"
                            :alt="`${$page.auth.settings.app_name} logo` ">
                        <p class="text-white ml-3 capitalize">{{$page.auth.settings.app_name}}</p>
                    </div>
                    <div class="flex items-center justify-end">
                        <div class="mr-3">
                            <a href="#" class="text-white" @click.prevent="logout">Logout</a>
                            <form method="POST" :action="$route.url('logout')" hidden id="logoutForm">
                                <input type="hidden" name="_token" :value="$page.auth.csrf_token">
                            </form>
                        </div>
                        <p class="text-white">
                            Profile
                        </p>
                    </div>
                </div>
                <nav class="w-full">
                    <ul class="list-none m-0 p-0 flex overflow-x-auto items-center py-4">
                        <li class="inline-block reveal-up" :style="{'--delay':'0.1s'}">
                            <inertia-link class="nav-link" :class="{'active' : $route.isCurrent('admin.dashboard')}"
                                :href="$route.relativePath('admin.dashboard')">Dashboard</inertia-link>
                        </li>
                        <li class="inline-block reveal-up" :style="{'--delay':'0.6s'}">
                            <inertia-link class="nav-link" :class="{'active' : $route.isCurrent('settings.view')}"
                                :href="$route.relativePath('settings.view')">Settings</inertia-link>
                        </li>
                        <li class="inline-block reveal-up" :style="{'--delay':'0.6s'}">
                            <inertia-link class="nav-link" :class="{'active' : $route.isCurrent('users.view')}"
                                :href="$route.relativePath('users.view')">Users</inertia-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <main style="margin-top: -5rem">
            <div class="xl:w-9/12 w-11/12 mx-auto pb-20">
                <slot />
            </div>
        </main>
    </div>
</template>

<script>
    import success from "@iconify/icons-feather/check";
    import error from "@iconify/icons-feather/x";
    export default {
        name: 'Layout',
        components: {
            Alert: () => import( /* webpackChunkName: "layout_comps" */ '../components/Alert'),
            AlertContainer: () => import( /* webpackChunkName: "layout_comps" */ '../components/AlertContainer')
        },
        data() {
            return {
                icons: {
                    success,
                    error
                },
                alertList: [],
                logo_link: 'img/dashboard_logo.svg'
            }
        },
        watch:{
            $page:{
                handler(){
                    this.pushNewAlert()
                },
                deep:true
            }
        },
        methods: {
            logout() {
                const form = document.querySelector('#logoutForm')
                form.submit()
            },
            removeAlertSynchronously(index){
                this.alertList.splice(index,1)
            },
            removeAlertAsynchronously(index){
                setTimeout(()=>{
                    this.alertList.splice(index,1)
                },3000)
            },
            pushNewAlert(){
                const vm = this
                let alertList = this.alertList
                if(this.$page.auth.alert_type !== null){
                    alertList.push({
                        type: vm.$page.auth.alert_type,
                        color: vm.$page.auth.alert_type === "success" ? 'green' : 'red',
                        message: vm.$page.auth.alert_message,
                        heading: vm.$page.auth.alert_heading
                    })
                    this.alertList = alertList
                }
            }
        },
    }

</script>

<style scoped>
    .nav-link {
        @apply text-primary-100 text-sm inline-block p-2 rounded-md;
        @apply transition-all ease-in-out duration-200;
    }

    .nav-link:hover,
    .nav-link:focus,
    .nav-link.active {
        @apply text-white bg-primary-600;
    }

</style>
