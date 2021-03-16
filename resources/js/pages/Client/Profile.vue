<template>
    <div>
        <modal :isOpen.sync="modalOpen">
            <identity-form v-if="tabName === 'identity'"></identity-form>
            <medicals-form v-if="tabName === 'medicals'"></medicals-form>
            <social-form v-if="tabName === 'social'"></social-form>
            <emergency-form v-if="tabName === 'emergency'"></emergency-form>
            <persona-form v-if="tabName === 'persona'"></persona-form>
            <travel-form v-if="tabName === 'travel'"></travel-form>
        </modal>
        <section class="mb-10">
            <title-board boardTitle="Profile" boardText="View and edit your profile data"
                :hostName="$page.auth.settings.app_url" boardImgLink="img/board_img/user.svg">
            </title-board>
        </section>
        <section class="flex flex-wrap md:flex-no-wrap justify-between">
            <div class="w-full mb-10 md:w-4/12 md:mr-10">
                <profile-card :firstName="$page.user.first_name || ''" :lastName="$page.user.last_name || ''"
                    :avatar="$page.user.avatar || ''" :active="$page.user.is_active == 1 ? true : false">
                    <a :href="$page.user.twitter_url || '#'" title="Twitter" class="mr-2 hover:text-primary-500"
                        target="_blank" rel="noopener noreferrer">
                        <iconify-icon width="15" :icon="icons.twitter" />
                    </a>
                    <a :href="$page.user.facebook_url || '#'" title="Facebook" class="mr-2 hover:text-primary-500"
                        target="_blank" rel="noopener noreferrer">
                        <iconify-icon width="15" :icon="icons.facebook" />
                    </a>
                    <a :href="`mailto:${$page.user.email || ''}`" title="phone" class="mr-2 hover:text-primary-500">
                        <iconify-icon width="15" :icon="icons.mail" />
                    </a>
                    <a :href="`tel:${$page.user.phone_number || ''}`" title="Phone" class="hover:text-primary-500">
                        <iconify-icon width="15" :icon="icons.phone" />
                    </a>
                </profile-card>
            </div>
            <div class="w-full md:flex-grow" style="--delay: 0.3s">
                <card-bg extend="mb-10">
                    <div class="mb-6">
                        <h3 class="text-lg font-bold">Profile Steps</h3>
                        <p class="text-sm">Below is a list of profile update steps which should be completed to enable
                            you
                            stand a chance of being accpted for the competition</p>
                    </div>
                    <step-detail :steps="profileSteps" />
                </card-bg>
                <card-bg extend="mb-10">
                    <tabs :tabs="tabs" defaultActiveTab="identity">
                        <template v-slot:tab-body-identity>
                            <identity-tab :user="$page.user" :hasCompleted="hasCompletedIdentity" @updateProfile="showUpdateView('identity')"></identity-tab>
                        </template>
                        <template v-slot:tab-body-medicals>
                            <medicals-tab :user="$page.user" :hasCompleted="hasCompletedMedicals" @updateProfile="showUpdateView('medicals')" ></medicals-tab>
                        </template>
                        <template v-slot:tab-body-social>
                            <social-tab :user="$page.user" :hasCompleted="hasCompletedSocial" @updateProfile="showUpdateView('social')"></social-tab>
                        </template>
                        <template v-slot:tab-body-emergency>
                            <emergency-tab :user="$page.user" :hasCompleted="hasCompletedEmergency" @updateProfile="showUpdateView('emergency')"></emergency-tab>
                        </template>
                        <template v-slot:tab-body-persona>
                            <persona-tab :user="$page.user" :hasCompleted="hasCompletedPersona" @updateProfile="showUpdateView('persona')"></persona-tab>
                        </template>
                        <template v-slot:tab-body-travel>
                            <travel-tab :user="$page.user" :hasCompleted="hasCompletedTravel" @updateProfile="showUpdateView('travel')"></travel-tab>
                        </template>
                    </tabs>
                </card-bg>
            </div>
        </section>
    </div>
</template>

<script>
    import Layout from '../../Layout/ClientLayout'
    import twitter from '@iconify/icons-feather/twitter'
    import facebook from '@iconify/icons-feather/facebook'
    import mail from '@iconify/icons-feather/mail'
    import phone from '@iconify/icons-feather/phone-call'
import Modal from '../../components/Modal.vue'
    export default {
        name: "Profile",
        layout: Layout,
        data() {
            return {
                tabs: [
                    'identity', 'medicals', 'social', 'emergency', 'persona', 'travel'
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
                modalOpen: false,
                tabName: ''
            }
        },
        methods: {
            showUpdateView(tabName){
                this.tabName = tabName
                this.modalOpen = true
            }
        },
        computed:{
            profileSteps(){
                return {
                    'medicals': this.$page.user.has_completed_medicals,
                    'emergency': this.$page.user.has_completed_emergency,
                    'identity': this.$page.user.has_completed_identity,
                    'travel': this.$page.user.has_completed_travel,
                    'persona': this.$page.user.has_completed_persona,
                    'social': this.$page.user.has_completed_social
                }
            },
            hasCompletedEmergency(){
                return this.$page.user.has_completed_emergency == 1 ? true : false
            },
            hasCompletedIdentity(){
                return this.$page.user.has_completed_identity == 1 ? true : false
            },
            hasCompletedMedicals(){
                return this.$page.user.has_completed_medicals == 1 ? true : false
            },
            hasCompletedPersona(){
                return this.$page.user.has_completed_persona == 1 ? true : false
            },
            hasCompletedSocial(){
                return this.$page.user.has_completed_social == 1 ? true : false
            },
            hasCompletedTravel(){
                return this.$page.user.has_completed_travel == 1 ? true : false
            }
        },
        components: {
            ProfileCard: () => import( /* webpackChunkName: "user_list_comps" */ '../../components/ProfileCard2'),
            IdentityTab: () => import( /* webpackChunkName: "profile_comps" */ '../Profile/Tabs/Identity'),
            MedicalsTab: () => import( /* webpackChunkName: "profile_comps" */ '../Profile/Tabs/Medicals'),
            EmergencyTab: () => import( /* webpackChunkName: "profile_comps" */ '../Profile/Tabs/Emergency'),
            SocialTab: () => import( /* webpackChunkName: "profile_comps" */ '../Profile/Tabs/Social'),
            TravelTab: () => import( /* webpackChunkName: "profile_comps" */ '../Profile/Tabs/Travel'),
            PersonaTab: () => import( /* webpackChunkName: "profile_comps" */ '../Profile/Tabs/Persona'),
            IdentityForm: () => import( /* webpackChunkName: "profile_comps" */ '../Profile/Identity'),
            MedicalsForm: () => import( /* webpackChunkName: "profile_comps" */ '../Profile/Medicals'),
            EmergencyForm: () => import( /* webpackChunkName: "profile_comps" */ '../Profile/Emergency'),
            SocialForm : () => import( /* webpackChunkName: "profile_comps" */ '../Profile/Social'),
            TravelForm: () => import( /* webpackChunkName: "profile_comps" */ '../Profile/Travel'),
            PersonaForm: () => import( /* webpackChunkName: "profile_comps" */ '../Profile/Persona'),
            StepDetail: () => import( /* webpackChunkName: "settings_page" */ '../../components/StepDetails'),
            Modal: () => import( /* webpackChunkName: "settings_page" */ '../../components/Modal')
        }
    }

</script>

<style>

</style>
