<template>
    <div>
        <section class="mb-10">
            <title-board boardTitle="Show Users" boardText="View and edit user information"
                :hostName="$page.auth.settings.app_url" boardImgLink="img/board_img/user.svg">
                <breadcrumb>
                    <inertia-link :href="$route.relativePath('users.view')" class="text-primary-100 hover:text-white">
                        User</inertia-link>
                    <b-seperator />
                    <a href="#" class="hover:text-white">Show Users</a>
                </breadcrumb>
            </title-board>
        </section>
        <section class="flex flex-wrap md:flex-no-wrap justify-between">
            <div class="w-full mb-10 md:w-4/12 md:mr-10">
                <profile-card :firstName="$page.user.first_name || ''" :lastName="$page.user.last_name || ''"
                    :avatar="$page.user.avatar || ''" :active="$page.user.is_active == 1 ? true : false">
                    <a :href="$page.user.twitter || '#'" title="Twitter" class="mr-2 hover:text-primary-500"
                        target="_blank" rel="noopener noreferrer">
                        <iconify-icon width="15" :icon="icons.twitter" />
                    </a>
                    <a :href="$page.user.facebook || '#'" title="Facebook" class="mr-2 hover:text-primary-500"
                        target="_blank" rel="noopener noreferrer">
                        <iconify-icon width="15" :icon="icons.facebook" />
                    </a>
                    <a :href="`mailto:${$page.user.email || ''}`" title="phone" class="mr-2 hover:text-primary-500">
                        <iconify-icon width="15" :icon="icons.mail" />
                    </a>
                    <a :href="`tel:${$page.user.phone || ''}`" title="Phone" class="hover:text-primary-500">
                        <iconify-icon width="15" :icon="icons.phone" />
                    </a>
                </profile-card>
            </div>
            <div class="w-full md:flex-grow px-2 py-8 md:p-12 rounded-md bg-white shadow-sm reveal-left"
                style="--delay: 0.3s">
                <tabs :tabs="tabs" defaultActiveTab="profile-update">
                    <template v-slot:tab-body-profile-update>
                        <section class=" pt-8">
                            <update-user buttonTitle="Update Profile" :permissionSet="permissions" :socialSet="social"
                            :biodataSet="biodata" :userRole="userRole" :canResetValues="false"
                            @completeRegistration="refreshState" />
                        </section>
                    </template>
                    <template v-slot:tab-body-user-presence>
                        <section v-if="$page.user.is_active == 1" class=" pt-8">
                            <h3 class="text-md font-extrabold">Deactivate User</h3>
                            <p class="text-sm"><span class="capitalize">{{$page.user.first_name}}</span> will not be permitted to access any of the functionalities of this software after deactivation</p>
                            <div class="mt-8 flex justify-end">
                                <secondary-btn color="red" @click="deactivateUser($page.user.id)" extraClass="w-full md:w-auto">Deactivate User</secondary-btn>
                            </div>
                        </section>
                        <section v-if="$page.user.is_active == 0" class=" pt-8">
                            <h3 class="text-md font-extrabold">Activate User</h3>
                            <p class="text-sm"><span class="capitalize">{{$page.user.first_name}}</span> will be allowed to access all of the software's permitted functionalities after activation</p>
                            <div class="mt-8 flex justify-end">
                                <secondary-btn color="primary" @click="activateUser($page.user.id)" extraClass="w-full md:w-auto">Activate User</secondary-btn>
                            </div>
                        </section>
                        <section class="pt-12">
                            <h3 class="text-md font-extrabold">Remove User</h3>
                            <p>All of <span class="capitalize">{{$page.user.first_name}}</span>'s data will be moved to recycle bin. In other words, <span class="capitalize">{{$page.user.first_name}}</span> will not be allowed to access this application</p>
                            <div class="mt-8 flex justify-end">
                                <secondary-btn color="red" @click="removeUser($page.user.id)" extraClass="w-full md:w-auto">Remove User</secondary-btn>
                            </div>
                        </section>
                    </template>
                </tabs>
            </div>
        </section>
    </div>
</template>

<script>
    import Layout from '../../Layout/Layout'
    import twitter from '@iconify/icons-feather/twitter'
    import facebook from '@iconify/icons-feather/facebook'
    import mail from '@iconify/icons-feather/mail'
    import phone from '@iconify/icons-feather/phone-call'
    export default {
        name: "ShowUsers",
        layout: Layout,
        data() {
            return {
                tabs:[
                    'profile-update','user-presence'
                ],
                icons: {
                    twitter,
                    facebook,
                    mail,
                    phone
                },
                biodata: {
                    first_name: this.$page.user.first_name || '',
                    last_name: this.$page.user.last_name || '',
                    email: this.$page.user.email
                },
                social: {
                    facebook_url: this.$page.user.facebook_url,
                    twitter_url: this.$page.user.twitter_url,
                    phone_number: this.$page.user.phone_number,
                },
                permissions: {
                    'modify-subjects': false,
                    'modify-topics': false,
                    'modify-questions': false,
                    'modify-collection': false,
                    'modify-users': false,
                    'modify-settings': false,
                },
                userRole: 'admin',
            }
        },
        methods: {
            refreshState() {

            },
            deactivateUser(userId) {
                const result = confirm("Are you sure you want to deactivate the user ?")
                if (result === true) {
                    this.$inertia.post(this.$route.relativePath('users.deactivate', userId))
                }
            },
            activateUser(userId) {
                const result = confirm("Are you sure you want to activate the user ?")
                if (result === true) {
                    this.$inertia.post(this.$route.relativePath('users.activate', userId))
                }
            },
            removeUser(userId) {
                const result = confirm("Are you sure you want to send this user to the recycle bin ?")
                if (result === true) {
                    this.$inertia.post(this.$route.relativePath('users.remove', userId),{
                        'should_redirect' : 1
                    })
                }
            }
        },
        components: {
            ProfileCard: () => import( /* webpackChunkName: "user_list_comps" */ '../../components/ProfileCard2'),
            UpdateUser: () => import( /* webpackChunkName: "user_page" */ './UserModify')
        },
        mounted(){
            const permissions= this.$page.user.permissions;
            for (const permission of permissions) {
                   this.$set(this.permissions,permission.name,true)
            }
        }
    }

</script>

<style>

</style>
