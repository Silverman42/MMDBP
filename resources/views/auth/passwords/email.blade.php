@extends('layouts.auth')

@section('content')
    <div class="mb-10">
        <h1 class="font-extrabold text-black text-2xl">Reset Password</h1>
        Please enter your email, and a password reset link will be sent to you shortly
    </div>
    @if (session('status'))
        <div class="rounded-md p-5 bg-green-400 mb-8" role="alert">
            <p class="text-white">{{ session('status') }}</p>
        </div>
    @endif
    <form action="{{ route('password.email') }}" method="POST">
        @csrf
        <div class="mb-10">
            <label class="block text-xs mb-1 items-center justify-between" :for="email">
                <p>Email Address</p>
            </label>
            <input type="email" name="email" value="{{ old('email') }}" placeholder="example@mail.com" class="appearance-none border-gray-400 block w-full border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-primaryBg-300 focus:border-primary-400 h-12" id="email">
            @error('email')
            <span class="text-red-500 text-xs" role="alert">{{$message}}</span>
            @enderror
        </div>
        <div>
            <x-button button-type="submit" bg-color="yellow" text-color="black">
                Send Password Reset Link
            </x-button>
        </div>
        <div class="text-sm text-center mt-3">
            <a href="{{ route('login') }}" class="text-yellow-600 hover:text-yellow-700">Login
            </a>to resume your activities
        </div>
    </form>
@endsection
