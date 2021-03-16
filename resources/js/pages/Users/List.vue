<template>
    <div>
        <!-- Create User Modal Start -->
        <modal :isOpen.sync="modalIsOpen">
            <div class="mb-10 reveal-left" style="--delay: 0.1s">
                <h3 class="text-lg font-extrabold">
                    Create New User
                </h3>
                <p class="text-sm">Create user biodata, avatar, password and permissions</p>
            </div>
            <create-user :actionURLPath="$route.relativePath('users.create')" @completeRegistration="refreshState" />
        </modal>
        <!--Create User Modal end-->

        <section class="mb-10">
            <title-board boardTitle="Users" boardText="Add, delete and manage users and user persmissions"
                :hostName="$page.auth.settings.app_url" boardImgLink="img/board_img/user.svg" />
        </section>
        <section
            class="rounded-md bg-white flex flex-col md:flex-row md:justify-between items-center shadow-sm p-8 md:p-12 reveal-up mb-10">
            <div class="w-auto inline-block">
                <h3 class="text-lg font-extrabold">New User</h3>
                <p class="text-sm">Create new users and grant them permissions</p>
            </div>
            <div class="w-full md:w-auto mt-3 md:mt-0 border">
                <primary-btn width="w-full md:w-auto" @click="openModal">Create New User</primary-btn>
            </div>
        </section>
        <section class="rounded-md bg-white shadow-sm px-2 py-8 md:p-12 reveal-up" style="--delay: 0.5s">
            <div class="mb-5 flex items-center mx-2">
                <form action="" @submit.prevent="searchUsers" id="user_search"></form>
                <div class="flex-grow mr-2">
                    <text-input type="search" v-model="searchText" form="user_search" />
                </div>
                <secondary-btn type="submit" form="user_search">
                    Search
                </secondary-btn>
                <dropdown>
                    <secondary-btn extraClass="ml-2" color="gray">
                        <iconify-icon :icon="icons.moreVertical" />
                    </secondary-btn>
                    <template slot="box">
                        <div class="inline-flex flex-col items-start">
                            <inertia-link :href="$route.relativePath('users.recycle')"
                                class="mb-2 text-xs flex items-center text-gray-500 hover:text-gray-700">
                                <iconify-icon :icon="icons.trash"></iconify-icon>
                                <p class="ml-2">Recycle Bin</p>
                            </inertia-link>
                            <div>
                                <inertia-link :href="$route.relativePath('users.view')"
                                    class="mb-2 text-xs flex items-center text-gray-500 hover:text-gray-700">
                                    <iconify-icon :icon="icons.refresh"></iconify-icon>
                                    <p class="ml-2">Refresh List</p>
                                </inertia-link>
                            </div>
                        </div>
                    </template>
                </dropdown>
            </div>
            <template v-if="getUsers.length > 0">
                <div class="flex flex-wrap justify-center mb-5">
                    <user-list v-for="(user,index) in getUsers " :delay="index" :key="index"
                        :is_active="user.is_active == 1 ? true : false"
                        :firstName="user.first_name" :lastName="user.last_name" :email="user.email"
                        :viewLink="$route.relativePath('users.show',user.id || 0)" :imageLink="user.avatar || ''"
                        @removeUser="removeUser(user.id)" @deactivateUser="deactivateUser(user.id)" @activateUser="activateUser(user.id)" />
                </div>
                <div class="flex items-center justify-end">
                    <secondary-btn v-if="previousLink !== null" extraClass="mr-2"
                        @click="paginate(currentPageNumber - 1)">Previous</secondary-btn>
                    <secondary-btn v-if="nextLink !== null" @click="paginate(currentPageNumber + 1)">Next
                    </secondary-btn>
                </div>
            </template>
            <template v-else>
                <div class="p-5 text-center">
                    <h4 class="text-lg font-extrabold mb-5">No user found</h4>
                    <inertia-link class="text-sm text-primary-400 hover:text-primary-600"
                        :href="$route.relativePath('users.view')">Reload list</inertia-link>
                </div>
            </template>
        </section>
    </div>
</template>

<script>
    import Layout from '../../Layout/Layout'
    import moreVertical from '@iconify/icons-feather/more-vertical'
    import trash from '@iconify/icons-feather/trash'
    import refresh from '@iconify/icons-feather/refresh-cw'

    export default {
        name: 'ViewUsers',
        layout: Layout,
        components: {
            Modal: () => import( /* webpackChunkName: "user_page" */ '../../components/Modal'),
            UserList: () => import( /* webpackChunkName: "user_page" */ '../../components/UserList'),
            CreateUser: () => import( /* webpackChunkName: "user_page" */ './UserModify'),
        },
        data() {
            return {
                modalIsOpen: false,
                icons: {
                    moreVertical,
                    trash,
                    refresh
                },
                searchText: ''
            }
        },
        computed: {
            getUsers() {
                return this.$page.user.data ? this.$page.user.data : []
            },
            nextLink() {
                return this.$page.user.next_page_url || null
            },
            previousLink() {
                return this.$page.user.prev_page_url || null
            },
            currentPageNumber() {
                return this.$page.user.current_page || 1
            }
        },
        methods: {
            paginate(pageNumber) {
                const vm = this
                vm.$inertia.visit(this.$route.relativePath('users.view'), {
                    method: 'get',
                    data: {
                        search: vm.searchText,
                        page: pageNumber
                    }
                })
            },
            openModal() {
                this.modalIsOpen = true
            },
            refreshState() {
                this.modalIsOpen = false
            },
            removeUser(userId) {
                const result = confirm("Are you sure you want to send this user to the recycle bin ?")
                if (result === true) {
                    this.$inertia.post(this.$route.relativePath('users.remove', userId))
                }
            },
            deactivateUser(userId) {
                const result = confirm("Are you sure you want to deactivate the user ?")
                if (result === true) {
                    this.$inertia.post(this.$route.relativePath('users.deactivate', userId))
                }
            },
            activateUser(userId) {
                console.log(userId)
                const result = confirm("Are you sure you want to activate the user ?")
                if (result === true) {
                    this.$inertia.post(this.$route.relativePath('users.activate', userId))
                }
            },
            searchUsers() {
                const vm = this
                vm.$inertia.visit(this.$route.relativePath('users.view'), {
                    method: 'get',
                    data: {
                        search: vm.searchText,
                        page: vm.currentPageNumber
                    }
                })
            }
        },
        mounted() {
            console.log(this.$inertia)
        }
    }

</script>

<style>

</style>
