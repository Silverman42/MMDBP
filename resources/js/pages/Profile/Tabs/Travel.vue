<template>
    <div>
        <div class="my-5 flex justify-between">
            <div class="mr-2">
                <h3 class="text-lg font-bold">Travel</h3>
                <p class="text-sm">Travel and flight information</p>
            </div>
            <div>
                <primary-btn :disabled="hasCompleted" color='yellow' @click="updateProfile" fontColor="text-black">Edit</primary-btn>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Departure Airport Code</h3>
                <p class="capitalize">{{user.departure_airport_code || 'none'}} </p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Passport Number</h3>
                <p class="uppercase">{{user.passport_number || '------'}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {Tabs} from "./Mixins"
    export default {
        name: 'Travel',
        mixins:[Tabs]
    }

</script>

<style>

</style>
