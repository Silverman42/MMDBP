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
                tabs: [
                    'profile-update', 'user-presence'
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
                userRole: '',
            }
        },
        methods: {

        },
        components: {
            ProfileCard: () => import( /* webpackChunkName: "user_list_comps" */ '../../components/ProfileCard2'),
        },
        mounted() {}
    }

</script>

<style>

</style>
