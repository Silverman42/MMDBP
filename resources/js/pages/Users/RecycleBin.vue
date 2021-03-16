<template>
    <div>
        <!-- Create User Modal Start -->
        <modal :isOpen.sync="modalIsOpen">
            <div class="mb-10 reveal-left" style="--delay: 0.1s">
                <h3 class="text-lg font-extrabold">
                    Modify Recycled Users
                </h3>
                <p class="text-sm">Restore or permanently delete the data of recycled users</p>
            </div>
            <div class="mb-10 reveal-left" style="--delay: 0.3s">
                <h3 class="text-sm font-extrabold">
                    Restore User
                </h3>
                <div class="text-xs mb-5">Restore all user data and permissions</div>
                <div class="flex justify-end">
                    <secondary-btn @click="restoreUser(clickedUserId)">Restore User</secondary-btn>
                </div>
            </div>
            <div class="mb-10 reveal-left" style="--delay: 0.3s">
                <h3 class="text-sm font-extrabold">
                     Delete User
                </h3>
                <div class="text-xs mb-5">Permanently remove user data from database</div>
                <div class="flex justify-end">
                    <secondary-btn color="red" @click="deleteUser(clickedUserId)">Delete User</secondary-btn>
                </div>
            </div>
        </modal>
        <!--Create User Modal end-->

        <section class="mb-10">
            <title-board boardTitle="User Recyle Bin" boardText="Recycle Bin for all deleted users"
                :hostName="$page.auth.settings.app_url" boardImgLink="img/board_img/user.svg">
                <breadcrumb>
                    <inertia-link :href="$route.relativePath('users.view')" class="text-primary-100 hover:text-white">
                        User</inertia-link>
                    <b-seperator />
                    <a href="#" class="hover:text-white">Users Recycle bin</a>
                </breadcrumb>
            </title-board>
        </section>
        <section class="rounded-md bg-white shadow-sm px-2 py-8 md:p-12 reveal-up" style="--delay: 0.5s">
            <div class="mb-5 flex items-center mx-2">
                <form action="" id="user_serch"></form>
                <div class="flex-grow mr-2" form="user_search">
                    <text-input type="search" />
                </div>
                <secondary-btn type="submit" extraClass="mr-2" form="user_search">
                    Search
                </secondary-btn>
                <secondary-btn color="gray">
                    <iconify-icon :icon="icons.refresh"></iconify-icon>
                </secondary-btn>
            </div>
            <template v-if="getUsers.length > 0">
                <div class="flex flex-wrap justify-center mb-5">
                    <user-card v-for="(user,index) in getUsers " :delay="index" :key="index"
                        :firstName="user.first_name" :lastName="user.last_name" :email="user.email"
                        @clickUser="openModal(user.id || 0)" @restoreUser="restoreUser(user.id || 0)"
                        @deleteUser="deleteUser(user.id || 0)" :imageLink="user.avatar || '' " />
                </div>
                <div class="flex items-center justify-end">
                    <secondary-btn extraClass="mr-3">Previous</secondary-btn>
                    <primary-btn>Next</primary-btn>
                </div>
            </template>
            <template v-else>
                <div class="p-5 text-center">
                    <h4 class="text-lg font-extrabold mb-5">No user found</h4>
                    <inertia-link class="text-sm text-primary-400 hover:text-primary-600" :href="$route.relativePath('users.recycle')">Reload list</inertia-link>
                </div>
            </template>
        </section>
    </div>
</template>

<script>
    import Layout from '../../Layout/Layout'
    import moreVertical from '@iconify/icons-feather/more-vertical'
    import refresh from '@iconify/icons-feather/refresh-cw'

    export default {
        name: 'RecycleBin',
        layout: Layout,
        components: {
            Modal: () => import( /* webpackChunkName: "user_page" */ '../../components/Modal'),
            UserCard: () => import( /* webpackChunkName: "user_page" */ '../../components/TrashUserList'),
        },
        data() {
            return {
                modalIsOpen: false,
                icons: {
                    moreVertical,
                    refresh
                },
                clickedUserId: ''
            }
        },
        computed: {
            getUsers() {
                return this.$page.user.data ? this.$page.user.data : []
            }
        },
        methods: {
            openModal(userId) {
                this.modalIsOpen = true
                this.clickedUserId = userId
            },
            restoreUser(userId) {
                const result = confirm('Are you sure you wish to restore this user ?')
                if (result === true) {
                    this.$inertia.post(this.$route.relativePath('users.restore', userId))
                }
            },
            deleteUser(userId) {
                const result = confirm('Are you sure you wish to permanently delete this user ?')
                if (result === true) {
                    this.$inertia.post(this.$route.relativePath('users.destroy', userId))
                }
            }
        }
    }

</script>

<style>

</style>
