@extends('layouts.auth')

@section('content')
<div class="mb-10">
    <h1 class="font-extrabold text-black text-2xl">Register</h1>
    <p class="text-sm">
        You will be redirected to your profile page where you could complete your registeration shortly after paying your registration fee
    </p>  
</div>
<form action="{{url('/register')}}" method="POST" class="mb-10">
    @csrf
    <div class="flex justify-between flex-wrap md:flex-no-wrap">
        <div class="w-full md:w-6/12 mb-5 md:mr-2">
            <x-input name="first_name" id="first_name" label="First Name" error-name="first_name" placeholder="Anita" />
        </div>
        <div class="w-full md:w-6/12 mb-5">
            <x-input name="last_name" id="last_name" label="Last Name" error-name="last_name" placeholder="James" />
        </div>
    </div>
    <div class="mb-5">
        <x-input name="email" id="email" label="Email" error-name="email" type="email" placeholder="example@mail.com" />
    </div>
    <div class="flex justify-between flex-wrap md:flex-no-wrap">
        <div class="w-full md:w-6/12 mb-5 md:mr-2">
            <x-input name="password" id="password" label="Password" type="password" error-name="password" />
        </div>
        <div class="w-full md:w-6/12 mb-5">
            <x-input name="password_confirmation" id="password_confirmation" type="password" label="Confirm Password" />
        </div>
    </div>
    {{-- <div class="mb-10 flex justify-between items-center">
        <p class=" text-sm font-extrabold">Registration <br> Fee</p>
        <p class="text-yellow-500 text-lg lg:text-4xl font-extrabold text-right" id="reg_fee">$ 10,000</p>
    </div> --}}
    <div>
        <x-button button-type="submit" bg-color="yellow" text-color="black">
            Pay and Complete Registeration
        </x-button>
        <div class="text-center mt-3 text-xs">Are you already registered ? <a class="text-yellow-600 hover:text-yellow-700" href="{{route('login')}}">Sign in here</a></div>
    </div>
</form>
<div class=" w-40 mx-auto p-2 border rounded-md mb-16">
    <p class="text-xs text-center">Payments powered by</p>
    <img src="img/paystack.svg" class="w-full" alt="Paystack logo">
</div>
<script>
    window.naira_charge = {{settings()['naira_charge']}}
    window.dollar_charge = {{settings()['dollar_charge']}}
</script>
{{-- <script defer src="{{asset('js/countries.js')}}"></script>
<script defer src="{{asset('js/register.js')}}"></script> --}}
@endsection
