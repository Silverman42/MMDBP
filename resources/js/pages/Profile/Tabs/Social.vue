<template>
    <div>
        <div class="my-5 flex justify-between">
            <div class="mr-2">
                <h3 class="text-lg font-bold">Social</h3>
                <p class="text-sm">Social media links and contact</p>
            </div>
            <div>
                <primary-btn color='yellow' :disabled="hasCompleted" @click="updateProfile" fontColor="text-black">Edit</primary-btn>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Facebook handle</h3>
                <a target="_blank" class="hover:text-yellow-500"
                    :href="user.facebook_url || '#'">{{user.facebook_url || 'None'}} </a>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">twitter handle</h3>
                <a target="_blank" class="hover:text-yellow-500"
                    :href="user.facebook_url || '#'">{{user.facebook_url || 'None'}}</a>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Phone number</h3>
                <a target="_blank" class="hover:text-yellow-500"
                    :href="`tel:${user.phone_number || ''}`">{{user.phone_number || 'None'}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {Tabs} from "./Mixins"
    export default {
        name: 'Social',
        mixins:[Tabs]
    }

</script>

<style>

</style>
