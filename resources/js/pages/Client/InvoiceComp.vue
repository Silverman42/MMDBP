<template>
    <div class="flex flex-wrap">
        <div class="w-full md:w-6/12 mb-6 md:mb-10 md:pr-2">
            <h6 class="text-2xl font-bold capitalize">{{auth.first_name}} {{auth.last_name}}</h6>
            <p class="text-xs">{{invoice.email}}</p>
        </div>
        <div class="w-full md:w-6/12 md:text-right md:mb-10 mb-6 md:pr-2">
            <h6 class="uppercase text-xs tracking-widest">Amount</h6>
            <p class="text-gray-900 text-3xl"><sup class="text-xs text-yellow-600">{{getCurrency}}
                </sup>{{invoice.amount|changeNumberFormat}}<sup class="text-xs text-yellow-600"> .00</sup></p>
        </div>
        <div class="w-full md:w-4/12 mb-6 md:pr-2">
            <h6 class="uppercase text-xs tracking-widest">Payment Status</h6>
            <p class="inline-block w-auto px-4 py-1 rounded-md"
                :class="{'bg-green-300' : paymentWasCompleted === true, 'bg-red-300' : paymentWasCompleted === false}">
                {{paymentWasCompleted === true ? 'Paid' : 'Unpaid'}}</p>
        </div>
        <div class="w-full md:w-4/12 mb-6 md:pr-2">
            <h6 class="uppercase text-xs tracking-widest">Payment Gateway</h6>
            <p class="text-gray-900">Paystack</p>
        </div>
        <div class="w-full md:w-4/12 mb-6 md:pr-2">
            <h6 class="uppercase text-xs tracking-widest">Transaction reference</h6>
            <p class="text-gray-900">{{invoice.reference_id}}</p>
        </div>
        <div class="w-full md:w-4/12 mb-6 md:pr-2">
            <h6 class="uppercase text-xs tracking-widest">Competition</h6>
            <p class="text-gray-900">Miss May Day Beauty Pageant <span
                    class="text-yellow-600">{{invoice.competitions.year}}</span></p>
        </div>
        <div class="w-full md:w-4/12 mb-6  md:pr-2">
            <h6 class="uppercase text-xs tracking-widest">Date of Payment</h6>
            <p class="text-gray-900">{{invoice.human_date_of_payment}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InvoiceComp',
        props:{
            invoice:{
                type: Object,
                default(){
                    return {}
                }
            },
            auth:{
                type: Object,
                default(){
                    return {}
                }
            }
        },
        computed:{
            getCurrency(){
                return ( this.invoice.currency === 'ngn' ? '₦' : '$')
            },
            paymentWasCompleted(){
                return (this.invoice.is_completed === 1 ? true : false)
            }
        },
        filters: {
            changeNumberFormat(number) {
                return (new Intl.NumberFormat('en-US').format(number))
            }
        }

    }

</script>

<style>
    
</style>
