@extends('layouts.auth')

@section('content')
<div class="mb-10">
    <h1 class="font-extrabold text-black text-2xl">Sign In</h1>
    Question generation made easy just a click away
</div>
<form action="{{ route('login') }}" method="POST">
    @csrf
    <div class="mb-5">
        <label class="block text-xs mb-1 items-center justify-between" :for="email">
            <p>Email</p>
        </label>
        <input type="email" name="email" value="{{ old('email') }}" placeholder="example@mail.com" class="appearance-none  block w-full border border-gray-400 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-primaryBg-300 focus:border-primary-400 h-12" id="email">
        @error('email')
        <span class="text-red-500 text-xs" role="alert">{{$message}}</span>
        @enderror
    </div>
    <div class="mb-5">
        <label class="flex text-xs mb-1 items-center justify-between" for="password">
            <p>Password</p>
            <a href="{{ route('password.request') }}" class="text-primary-500 hover:text-primary-700">Forgotten password ?</a>
        </label>
        <input name="password" class="appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-primaryBg-300 focus:border-primary-400 h-12" id="password" type="password">
        @error('password')
        <span class="text-red-500 text-xs" role="alert">{{$message}}</span>
        @enderror
    </div>
    <div class="mb-10 flex items-center">
        <input type="checkbox" {{old('remember') ? 'checked' : ''}} type="checkbox" name="remember" id="remember_me">
        <label class="block ml-5  mb-1 items-center justify-between" for="remember_me">
            <p>Remember me</p>
        </label>
    </div>
    <div>
        <x-button button-type="submit" bg-color="yellow" text-color="black">
            Sign-In
        </x-button>
        <div class="text-center mt-3 text-xs">Do wish to register for {{settings()['app_name'] ?? 'this platform'}} ? <a class="text-yellow-600 hover:text-yellow-700" href="{{route('register')}}">Click here</a></div>
    </div>
</form>
@endsection
