<template>
    <div>
        <section class="mb-10">
            <title-board boardTitle="Settings"
                :boardText="`Customize the user interface and functionalities of ${$page.auth.settings.app_name}`"
                :hostName="$page.auth.settings.app_url" boardImgLink="img/board_img/settings.svg" />
        </section>
        <section class="rounded-md bg-white shadow-lg p-6 md:p-12 reveal-up" style="--delay: 0.5s">
            <tabs :tabs="tabs" defaultActiveTab="general">
                <template v-slot:tab-body-general>
                    <general />
                </template>
                <template v-slot:tab-body-user-interface>
                    <user-interface/>
                </template>
                <template v-slot:tab-body-factory-reset>
                    <factory-reset/>
                </template>
            </tabs>
        </section>
    </div>
</template>

<script>
    import Layout from '../../Layout/Layout'
    export default {
        name: 'ViewSettings',
        layout: Layout,
        components:{
            General: () => import( /* webpackChunkName: "settings_page" */ './General'),
            UserInterface: () => import( /* webpackChunkName: "settings_page" */ './UserInterface'),
            FactoryReset: () => import( /* webpackChunkName: "settings_page" */ './FactoryReset')
        },
        data() {
            return {
                tabs: [
                    'general', 'user-interface', 'factory-reset'
                ],
                general: {
                    app_name: this.$page.auth.settings.app_name,
                    app_email: this.$page.auth.settings.app_email,
                    app_url: this.$page.auth.settings.app_url,
                    color_scheme: this.$page.auth.settings.color_scheme,
                    disable_collection_modification: this.$page.auth.settings.disable_collection_modification == 1 ?
                        true : false,
                    disable_question_modification: this.$page.auth.settings.disable_question_modification == 1 ? true :
                        false,
                    disable_topic_modification: this.$page.auth.settings.disable_topic_modification == 1 ? true : false,
                    disable_subject_modification: this.$page.auth.settings.disable_subject_modification == 1 ? true :
                        false,
                    recieve_user_emails: this.$page.auth.settings.recieve_user_emails == 1 ? true : false
                },
            }
        },
        methods: {
            submitGeneralSetting() {
                this.$inertia.put(this.$route.relativePath('settings.update'), this.general)
            },
        }
    }

</script>

<style>


</style>
