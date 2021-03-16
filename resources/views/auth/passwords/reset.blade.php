@extends('layouts.auth')
@section('title',config('app.name').'::Confirm Password')
@section('content')
    <div class="mb-10">

    </div>
    <h3 class="mb-8 text-2xl text-black font-bold">
        {{ __('Reset Password') }}
    </h3>
    <form method="POST" action="{{ route('password.update') }}">
        @csrf
        <input type="hidden" name="token" value="{{ $token }}">
        <div class="mb-3">
            <label class="block text-xs mb-1 items-center justify-between" for="password">
                <p>{{ __('E-Mail Address') }}</p>
            </label>
            <input value="{{ $email ?? old('email') }}" name="email" required autocomplete="email"
                   class="appearance-none block border-gray-400 w-full border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-primaryBg-300 focus:border-primary-400 h-12"
                   id="email" type="email">
            @error('email')
            <p class="text-red-500 text-xs italic" v-if="error !== null">{{$message}}</p>
            @enderror
        </div>
        <div class="mb-3">
            <label class="block text-xs mb-1  items-center justify-between" for="password">
                <p>{{ __('Password') }}</p>
            </label>
            <input value="" name="password" required autocomplete="new-password"
                   class="appearance-none border-gray-400 block w-full  border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-primaryBg-300 focus:border-primary-400 h-12"
                   id="password" type="password">
            @error('password')
            <p class="text-red-500 text-xs italic" v-if="error !== null">{{$message}}</p>
            @enderror
        </div>
        <div class="mb-10">
            <label class="block text-xs mb-1 items-center justify-between" id="password-confirm">
                <p>{{ __('Confirm Password') }}</p>
            </label>
            <input value="" name="password_confirmation" required autocomplete="new-password"
                   class="appearance-none border-gray-400 block w-full border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-primaryBg-300 focus:border-primary-400 h-12"
                   id="password-confirm" type="password">
        </div>
        <div class="mb-5">
            <x-button button-type="submit" bg-color="yellow" text-color="black">
                {{ __('Reset Password') }}
            </x-button>
        </div>
        <div class="text-sm mb-10 text-center mt-3">
            <a href="{{ route('login') }}" class="text-yellow-600 hover:text-yellow-700">Login
            </a>to resume your activities
        </div>
    </form>
@endsection
