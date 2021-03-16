<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="//db.onlinewebfonts.com/c/860c3ec7bbc5da3e97233ccecafe512e?family=Circular+Std+Book" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" href="{{asset('css/transition.css')}}">
    <link rel="stylesheet" href="{{asset('css/color_schemes/'.settings()['color_scheme'].'.css')}}">
    <link rel="stylesheet" href="{{asset('css/ngprogress.css')}}">
    <meta name="theme-color" content="#000000">
    <link rel="icon" type="image/png" href="{{settings()['auth_logo']}}">
    <style>
        body{
            scroll-behavior : smooth
        }
    </style>
    <title>@yield('title')</title>
</head>
<body class="bg-primaryBg-300 text-gray-700 font-body">
    @routes
    @yield('content')
</body>
<script src="{{asset('js/axios.js')}}"></script>
<script src="{{asset('js/app.js')}}"></script>
</html>
