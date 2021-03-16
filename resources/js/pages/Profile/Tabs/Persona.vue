<template>
    <div>
        <div class="my-5 flex justify-between">
            <div class="mr-2">
                <h3 class="text-lg font-bold">Persona</h3>
                <p class="text-sm">Work and Educational information</p>
            </div>
            <div>
                <primary-btn color='yellow' :disabled="hasCompleted" @click="updateProfile" fontColor="text-black">Edit</primary-btn>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Hobbies</h3>
                <p class="capitalize">{{user.hobbies || 'none'}} </p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Profession</h3>
                <p class="capitalize">{{user.profession || 'none'}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Educational Certificate</h3>
                <p class="capitalize">{{user.educational_cert || 'none'}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Ambition</h3>
                <p class="capitalize">{{user.ambition || 'none'}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {Tabs} from "./Mixins"
    export default {
        name: 'Persona',
        mixins:[Tabs]
    }

</script>

<style>

</style>
