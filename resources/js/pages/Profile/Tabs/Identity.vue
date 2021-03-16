<template>
    <div>
        <div class="my-5 flex justify-between">
            <div class="mr-2">
                <h3 class="text-lg font-bold">Identity</h3>
                <p class="text-sm">Information used to identify contestant</p>
            </div>
            <div>
                <primary-btn color='yellow' :disabled="hasCompleted" @click="updateProfile" fontColor="text-black">Edit</primary-btn>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Name</h3>
                <p class="capitalize">{{user.first_name}} {{user.last_name}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Nationality</h3>
                <p class="capitalize">{{user.nationality || 'No Nationality'}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Age</h3>
                <p class="capitalize">{{user.age || 'No age'}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Place of Birth</h3>
                <p class="capitalize">{{user.place_of_birth || 'No place of birth'}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Signature</h3>
                <img :src="user.signature || ''" class="w-full h-auto inline-block mt-1"
                    :alt="user.signature ? 'signature image' : 'No signature'">
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Address</h3>
                <p class="capitalize">{{user.address || 'No address'}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {Tabs} from "./Mixins"
    export default {
        name: 'Identity',
        mixins:[Tabs]
    }

</script>

<style>

</style>
