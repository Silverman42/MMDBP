<template>
    <div>
        <section class="mb-10">
            <title-board boardTitle="Invoice" boardText="Your payment information and status"
                :hostName="$page.auth.settings.app_url" boardImgLink="img/board_img/dashboard.svg" />
        </section>
        <section>
            <card-bg extend="mb-10">
                <invoice-comp :invoice="$page.invoice" :auth="$page.auth"/>
            </card-bg>
            <card-bg v-if="$page.directToProfile">
                <div class="flex flex-wrap justify-between">
                    <p class="w-full md:w-8/12 mb-3">Congratulations. You are now permitted to update your profile. Please update your profile to qualify for auditions</p>
                    <div class="w-full md:w-3/12 flex justify-end">
                        <inertia-link :href="$route.relativePath('client.profile.index')" class="inline-flex p-1 items-center text-yellow-500 hover:text-yellow-600">
                            <span class="mr-2">Update Profile</span>
                            <iconify-icon :icon="icons.arrow_right" />
                        </inertia-link>
                    </div>
                </div>
            </card-bg>
        </section>
    </div>
</template>
<script>
    import Layout from '../../Layout/ClientLayout'
    import arrow_right from "@iconify/icons-feather/arrow-right"
    export default {
        name: 'Invoice',
        layout: Layout,
        data(){
            return {
                icons:{
                    arrow_right
                }
            }
        },
        components:{
            InvoiceComp: () => import( /* webpackChunkName: "user_list_comps" */ './InvoiceComp')
        },

    }

</script>

<style>

</style>
