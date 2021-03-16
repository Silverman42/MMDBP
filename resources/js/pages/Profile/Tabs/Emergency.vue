<template>
    <div>
        <div class="my-5 flex justify-between">
            <div class="mr-2">
                <h3 class="text-lg font-bold">Emergency</h3>
                <p class="text-sm">Information about your emergency call line</p>
            </div>
            <div>
                <primary-btn color='yellow' :disabled="hasCompleted" @click="updateProfile" fontColor="text-black">Edit</primary-btn>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Emergency name</h3>
                <p class="capitalize">{{user.emergency_name || 'None'}} </p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Emergency Phone number</h3>
                <p class="capitalize">{{user.emergency_phone_number || 'None'}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Emergency Personel Relationship</h3>
                <p class="capitalize">{{user.emergency_relationship || 'None'}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Emergency Perosnel Email</h3>
                <a :href="`mailto:${user.emergency_email || '#'}`"
                    class="underscore">{{user.emergency_email || 'None'}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {Tabs} from "./Mixins"
    export default {
        name: 'Emergency',
        mixins: [Tabs]
        
    }

</script>

<style>

</style>
