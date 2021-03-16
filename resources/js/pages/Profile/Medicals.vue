<template>
    <div>
        <div class="mb-5">
            <h3 class="text-lg font-bold">Medicals</h3>
            <p class="text-sm">Your medical history and backlogs</p>
        </div>
        <form action="" @submit.prevent="submitForm" id="medicals"></form>
        <div class="mb-3 grid grid-cols-2 col-gap-2">
            <p class="col-start-1 col-end-3 text-xs">Height (ft)</p>
            <text-input type="number" form="medicals" v-model="height.number"/>
            <text-input type="number" form="medicals" v-model="height.decimal"/>
            <p v-if="$page.errors.height" class="col-start-1 col-end-3 text-xs text-red-500">{{$page.errors.height}}</p>
        </div>
        <div class="mb-3 grid grid-cols-2 col-gap-2">
            <p class="col-start-1 col-end-3 text-xs">Weight (kg)</p>
            <text-input type="number" form="medicals" v-model="weight.number"/>
            <text-input type="number" form="medicals" v-model="weight.decimal"/>
            <p v-if="$page.errors.weight" class="col-start-1 col-end-3 text-xs text-red-500">{{$page.errors.weight}}</p>
        </div>
        <div class="mb-3">
            <text-input type="number" form="medicals" :error="$page.errors.shoe_size" label="Shoe Size (European measurement)" v-model="shoeSize"/>
        </div>
        <div class="mb-3">
            <select-input label="Dress Size" :error="$page.errors.dress_size" :value="dressSize"
                v-model="dressSize" form="medicals">
                <option v-for="(size,index) in sizes" :key="index" :value="size">{{size}}</option>
            </select-input>
        </div>
        <div class="mb-3">
            <select-input label="Waist Size" :error="$page.errors.waist_size" :value="waistSize"
                v-model="waistSize" form="medicals">
                <option v-for="(size,index) in sizes" :key="index" :value="size">{{size}}</option>
            </select-input>
        </div>
        <div class="mb-3">
            <select-input label="Burst Size" :error="$page.errors.bust_size" :value="bustSize"
                v-model="bustSize" form="medicals">
                <option v-for="(size,index) in sizes" :key="index" :value="size">{{size}}</option>
            </select-input>
        </div>
        <div class="mb-3 grid grid-cols-3 col-gap-2">
            <div class="text-xs col-start-1 col-end-4">Skin Color</div>
            <div class="col-start-1 col-end-3">
                <select-input :error="$page.errors.skin_color" :value="skinColor"
                    v-model="skinColor" form="medicals">
                    <option v-for="(color,index) in colors" :key="index" :value="color">{{color}}</option>
                </select-input>
            </div>
            <div class="col-start-3 col-end-4 rounded-md" :style="{'background': colorMatch[skinColor]}"></div>
        </div>
        <div class="mb-3">
            <select-input label="Blood Type" :error="$page.errors.blood_type" :value="bloodType"
                    v-model="bloodType" form="medicals">
                    <option v-for="(type,index) in bloodTypes" :key="index" :value="type">{{type}}</option>
                </select-input>
        </div>
        <div class="mb-3">
            <span class="text-xs">Are you a smoker ?</span>
            <div class="flex flex-wrap">
                <radio-input value="1" name="canSmoke" @input="changeSmokeStatus($event)" :defaultValue="canSmoke" title="Yes" />
                <radio-input value="0" name="canSmoke" @input="changeSmokeStatus($event)" :defaultValue="canSmoke" title="No" />
            </div>
            <div v-if="$page.errors.can_smoke" class="mt-2">{{$page.errors.can_smoke || ''}}</div>
        </div>
        <div class="mb-3">
            <span class="text-xs">Are you a vegetarian ?</span>
            <div class="flex flex-wrap">
                <radio-input value="1" name="isVege" @input="changeAllergiestatus($event)" :defaultValue="isVegetarian" title="Yes" />
                <radio-input value="0" name="isVege" @input="changeVegeStatus($event)" :defaultValue="isVegetarian" title="No" />
            </div>
            <div v-if="$page.errors.is_vegetarian" class="mt-2">{{$page.errors.is_vegetarian || ''}}</div>
        </div>
        <div class="mb-3">
            <textarea-input v-model="dietaryNeeds" :error="$page.errors.dietary_needs" form="medicals" label="Please list your Dietary Needs, if any" />
        </div>
        <div class="mb-3">
            <textarea-input v-model="recentSickness" :error="$page.errors.recent_sickness" form="medicals" label="Please list your Recent Sickness, if any" />
        </div>
        <div class="mb-3">
            <textarea-input v-model="surgeries" :error="$page.errors.surgeries" form="medicals" label="Please list your Recent Surgeries, if any" />
        </div>
        <div class="mb-3">
            <textarea-input v-model="medications" :error="$page.errors.medications" form="medicals" label="Please list your Medications, if any" />
        </div>
        <div class="mb-10">
            <textarea-input v-model="allergies" :error="$page.errors.allergies" form="medicals" label="Please list your Allergies, if any" />
        </div>
        <primary-btn type="submit" form="medicals" width="w-full" color="yellow" fontColor="text-black">Update Medicals</primary-btn>
    </div>
</template>

<script>
    export default {
        name: 'Medicals',
        data(){
            return{
                height: {
                    number: 0,
                    decimal: 0
                },
                weight: {
                    number: 0,
                    decimal: 0
                },
                canSmoke: '1',
                isVegetarian: '0',
                shoeSize: 30,
                dressSize: 'l',
                bustSize: 'l',
                waistSize: 'l',
                skinColor: this.$page.user.skin_color || 'Pale White',
                recentSickness: '',
                surgeries: '',
                medications: '',
                dietaryNeeds: '',
                allergies: '',
                colorMatch: {
                    'Pale White': '#fed9c6',
                    'Fair': '#fcd3b5',
                    'Light Brown' : '#fcd3b5',
                    'Moderate Brown' : '#be825d',
                    'Dark Brown' : '#ba7959',
                    'Black': '#763e25'
                },
                sizes: ['xxl','xl','l','m','s'],
                colors: ['Pale White',"Fair","Light Brown","Moderate Brown","Dark Brown","Black"],
                bloodTypes: ['A+',"A-","B+","B-","O+","O-","AB+","AB-"],
                bloodType: 'A+'
            }
        },
        methods:{
            changeSmokeStatus(status){
                this.canSmoke = status
            },
            changeVegeStatus(status){
                this.isVegetarian = status
            },
            splitMeasurement(measurement = ''){
                let newMeasure = []
                newMeasure = `${measurement}`.split('.')
                return {
                    number: newMeasure[0] || 0,
                    decimal: newMeasure[1] || 0
                }
            },
            assignDefault(){
                this.height = this.splitMeasurement(this.$page.user.height)
                this.weight = this.splitMeasurement(this.$page.user.weight)
                this.canSmoke = this.$page.user.can_smoke === 1 ? '1' : '0'
                this.isVegetarian = this.$page.user.is_vegetarian === 1 ? '1' : '0'
                this.shoeSize = this.$page.user.shoe_size || 30
                this.dressSize = this.$page.user.dress_size || 'l'
                this.bustSize = this.$page.user.bust_size || 'l'
                this.waistSize = this.$page.user.waist_size || 'l'
                this.skinColor = this.$page.user.skin_color || 'Pale White'
                this.recentSickness = this.$page.user.recent_sickness || ''
                this.allergies = this.$page.user.allergies || ''
                this.surgeries = this.$page.user.surgeries || ''
                this.medications = this.$page.user.medications || ''
                this.dietaryNeeds = this.$page.user.dietary_needs || ''
                this.bloodType = this.$page.user.blood_type || 'A+'
            },
            submitForm(){
                const form = new FormData
                form.append('height',`${this.height.number}.${this.height.decimal}`)
                form.append('weight',`${this.weight.number}.${this.weight.decimal}`)
                form.append('can_smoke',this.canSmoke)
                form.append('is_vegetarian',this.isVegetarian)
                form.append('shoe_size',this.shoeSize)
                form.append('dress_size',this.dressSize)
                form.append('bust_size',this.bustSize)
                form.append('waist_size',this.waistSize)
                form.append('skin_color',this.skinColor)
                form.append('recent_sickness',this.recentSickness)
                form.append('allergies',this.allergies)
                form.append('surgeries',this.surgeries)
                form.append('medications',this.medications)
                form.append('dietary_needs',this.dietaryNeeds)
                form.append('blood_type',this.bloodType)
                this.$inertia.post(this.$route.relativePath('client.profile.update.medicals'),form)
            }
        },
        mounted(){
            this.assignDefault()
        },
        updated(){
        }
    }

</script>

<style>

</style>
