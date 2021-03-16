<template>
    <div>
        <div class="my-5 flex justify-between">
            <div class="mr-2">
                <h3 class="text-lg font-bold">Medicals</h3>
                <p class="text-sm">Your medical history and backlogs</p>
            </div>
            <div>
                <primary-btn color='yellow' :disabled="hasCompleted" @click="updateProfile" fontColor="text-black">Edit</primary-btn>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Height</h3>
                <p class="capitalize">{{user.height ? `${user.height} ft` : 'No height'}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Weight</h3>
                <p class="capitalize">{{user.weight ? `${user.weight} kg` : `No weight`}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Shoe Size</h3>
                <p class="capitalize">{{user.shoe_size ? `${user.shoe_size}` : 'No shoe size'}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Dress Size</h3>
                <p class="uppercase">{{user.dress_size ? `${user.dress_size}` : 'No dress size'}}
                </p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Bust Size</h3>
                <p class="uppercase">{{user.bust_size ? `${user.bust_size}` : `No bust size`}}
                </p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Waist Size</h3>
                <p class="uppercase">
                    {{user.waist_size ? `${user.waist_size}` : `No waist size`}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Skin Color</h3>
                <p class="capitalize">{{user.skin_color ? `${user.skin_color}` : `No skin color`}}
                </p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Blood Type</h3>
                <p class="capitalize">{{user.blood_type ? `${user.blood_type}` : `No blood type`}}
                </p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Vegetarian Status</h3>
                <p class="capitalize">{{user.is_vegetarian == 1 ? `Positive` : `Negative`}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Smoking Habit</h3>
                <p class="capitalize">{{user.can_smoke == 1 ? `Positive` : `Negative`}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Allergies</h3>
                <p class="capitalize">{{user.allergies ? `${user.allergies}` : `No Allergies`}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Surgeries</h3>
                <p class="capitalize">{{user.surgeries ? `${user.surgeries}` : `No Surgeries`}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Dietary needs</h3>
                <p class="capitalize">
                    {{user.dietary_needs ? `${user.dietary_needs}` : `No Dietary needs`}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Recent sickness</h3>
                <p class="capitalize">
                    {{user.recent_sickness ? `${user.recent_sickness}` : `No Recent Sickness`}}</p>
            </div>
            <div class="break-words">
                <h3 class="uppercase text-xs tracking-widest">Medications</h3>
                <p class="capitalize">
                    {{user.medications ? `${user.medications}` : `No medications`}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {Tabs} from "./Mixins"
    export default {
        name: 'Medicals',
        mixins:[Tabs]
    }

</script>

<style>

</style>
