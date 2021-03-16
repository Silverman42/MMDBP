<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware(['auth:api','user_active'])->get('/user', function (Request $request) {
//     return $request->user();
// });

/**
 * Auth routes for guests
 */
// Route::group(['middleware' => ['guest']], function () {
//     Route::post('register', 'CustomAuth\RegisterController')->name('auth.register');
//     Route::post('login', 'CustomAuth\LoginController')->name('auth.login');
//     Route::post('password_email', 'CustomAuth\ForgotPasswordController')->name('auth.password_email');
// });

// Route::group(['middleware' => ['auth:airlock']], function () {
//     Route::post('logout', 'CustomAuth\LogoutController');
//     Route::put('profile/update-biodata', 'Profile\BioDataController');
//     Route::put('profile/update-password', 'Profile\ChangePasswordController');
//     Route::get('profile/fetch-user', 'Profile\FetchUserController');
// });

/**
 * Admin Based Routes
 */
// Route::name('admin.')
// ->prefix('admin')
// ->namespace('Admin')
// ->middleware([
//     'auth:airlock',
//     'is_admin',
//     'user_active'
// ])
// ->group(base_path('routes/app/admin.php'));


/**
 * Client Based Routes
 */
// Route::name('client.')
// ->prefix('client')
// ->namespace('Client')
// ->middleware([
//     'auth:airlock',
//     'is_client',
//     'user_active'
// ])
// ->group(base_path('routes/app/client.php'));