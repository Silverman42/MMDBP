<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/',function(){
    return view('welcome');
})->name('home');


Route::get('dashboard', 'DashboardController')->middleware(['auth'])->name('dashboard');

/**
 * Client Based Routes
 */
Route::name('client.')
->prefix('client')
->namespace('Client')
->middleware([
    'auth',
    'role:client',
])
->group(base_path('routes/app/client.php'));

/**
 * Admin Based Routes
 */
Route::name('admin.')
->prefix('admin')
->middleware([
    'auth',
    'role:admin',
])
->group(base_path('routes/app/admin.php'));


/**
 * Settings routes
 */
Route::group(['prefix' => 'settings','middleware'=>['auth','role:admin']], function () {
    Route::get('/', 'Settings\GeneralController@view')->name('settings.view');
    Route::put('/update', 'Settings\GeneralController@update')->name('settings.update');
    Route::post('/update/user-interface', 'Settings\UserInterfaceController')->name('settings.user_interface');
    Route::post('/factory-reset', 'Settings\FactoryResetController')->name('settings.factory_reset');
});

/**
 * User routes
 */
Route::group(['prefix' => 'users', 'middleware'=>['auth','role:admin']], function () {
    Route::get('/', 'Users\ViewUsersController')->name('users.view');
    Route::get('/trash', 'Users\RecycleViewController')->name('users.recycle');
    Route::get('/{id}', 'Users\ResourceController@show')->name('users.show');
    Route::post('remove/{id}', 'Users\ResourceController@remove')->name('users.remove');
    Route::post('restore/{id}', 'Users\ResourceController@restore')->name('users.restore');
    Route::post('destory/{id}', 'Users\ResourceController@forceDestroy')->name('users.destroy');
    Route::post('deactivate/{id}', 'Users\ResourceController@deactivate')->name('users.deactivate');
    Route::post('activate/{id}', 'Users\ResourceController@activate')->name('users.activate');
    Route::post('/create', 'Users\CreateUserController')->name('users.create');
});

Route::group(['prefix' => 'client-profile','middleware'=>['auth','role:admin']], function () {
    Route::post('update/emergency','Users\UpdateClientController@updateEmergencyData')->name('client-profile.update.emergency');
    Route::post('update/medicals','Users\UpdateClientController@updateMedicalData')->name('client-profile.update.medicals');
    Route::post('update/social','Users\UpdateClientController@updateSocialData')->name('client-profile.update.social');
    Route::post('update/identity','Users\UpdateClientController@updateIdentityData')->name('client-profile.update.identity');
    Route::post('update/persona','Users\UpdateClientController@updatePersonaData')->name('client-profile.update.persona');
    Route::post('update/travel','Users\UpdateClientController@updateTravelData')->name('client-profile.update.travel');
});
Auth::routes();
