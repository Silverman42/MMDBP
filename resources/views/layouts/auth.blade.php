<!DOCTYPE html>
<html lang="en" theme="">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="//db.onlinewebfonts.com/c/860c3ec7bbc5da3e97233ccecafe512e?family=Circular+Std+Book" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" href="{{asset('css/color_schemes/'.settings()['color_scheme'].'.css')}}">
    <meta name="theme-color" content="#000000">
    <link rel="icon" type="image/png" href="{{settings()['auth_logo']}}">
    <title>@yield('title')</title>
    <style>
        html[theme='dark-mode'] {
            filter: invert(1) hue-rotate(180deg);
        }
    </style>
</head>
<body class="bg-primaryBg-200 text-gray-700 border-8 border-primary-500 font-body">
    <div class="min-h-screen mx-auto w-10/12 md:w-5/12 xl:w-4/12 pt-20">
        <div class="inline-flex mx-auto items-center mb-5 w-auto rounded-md border border-primaryBg-400 p-2">
            <img class="w-10" src="{{settings()['auth_logo']}}" alt="">
            <p class="ml-3 text-black font-bold capitalize">{{settings()['app_name']}}</p>
        </div>
        @yield('content')
    </div>
</body>
</html>
