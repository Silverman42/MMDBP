@extends('layouts.auth')
@section('title',config('app.name').'::Successful Password Reset')
@section('content')
    <h3 class="mb-2 text-2xl font-bold">
        {{ __('Password Reset Successful') }}
    </h3>
    <p class="text-sm mb-10">
        {{$message ?? ''}}
    </p>
    <div>
        <a href="{{route('login')}}" class="rounded-md h-12 px-5 bg-yellow-500 hover:bg-primary-700 flex items-center text-black justify-center w-full transition-all duration-300 ease-in-out"
           type="submit">
                <span>
                    {{ __('Proceed to Login') }}
                </span>
        </a>
    </div>
@endsection
