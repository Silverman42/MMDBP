<template>
    <div>
        <section>
            <!-- <div class="p-5 md:p-8 rounded-lg shadow-lg bg-primary-900" style="min-height: 8rem">
                <breadcrumb>
                    <a href="" class="text-primary-100 hover:text-white">Dashboard</a>
                    <b-seperator/>
                    <a href="" class="text-primary-100 hover:text-white">New Data</a>
                </breadcrumb> 
                <div>
                    <div class="w-56 md:w-6/12">
                        <h1 class="text-xl mb-2 text-white antialiased reveal-left" style="--delay: 0.1s">Dashboard</h1>
                        <p class="text-primary-100 text-sm reveal-left" style="--delay: 0.3s">Statistical data as at 20th September, 2020</p>
                    </div>
                </div>
            </div> -->
            <title-board boardTitle="Dashboard"
             boardText="Statistical data as at 20th September, 2020" 
             :hostName="$page.auth.settings.app_url" boardImgLink="img/board_img/dashboard.svg"/>
        </section>
    </div>
</template>

<script>
import Layout from '../Layout/Layout'
import cRight from "@iconify/icons-feather/chevron-right";
export default {
    name: "Dashboard",
    layout: Layout,
    data(){
        return {
            icons:{
                cRight
            }
        }
    },
    mounted() {

    }
}
</script>

<style>

</style>
