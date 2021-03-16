<?php

use Illuminate\Support\Facades\Route;
/**
 * Dashboard route
 */
Route::get('dashboard', 'DashboardController')->name('dashboard');

Route::group(['prefix' => 'payment'], function () {
    Route::post('initiate','PaymentController@redirectToGateway')->middleware(['disallow_paid_client'])->name('payment.initiate');
    Route::get('callback','PaymentController@handleGatewayCallback')->name('payment.callback');
});

Route::group(['prefix' => 'profile','middleware'=>'allow_paid_client'], function () {
    Route::get('view','Profile\ViewController')->name('profile.index');
    Route::post('update/emergency','Profile\UpdateController@updateEmergencyData')->name('profile.update.emergency');
    Route::post('update/medicals','Profile\UpdateController@updateMedicalData')->name('profile.update.medicals');
    Route::post('update/social','Profile\UpdateController@updateSocialData')->name('profile.update.social');
    Route::post('update/identity','Profile\UpdateController@updateIdentityData')->name('profile.update.identity');
    Route::post('update/persona','Profile\UpdateController@updatePersonaData')->name('profile.update.persona');
    Route::post('update/travel','Profile\UpdateController@updateTravelData')->name('profile.update.travel');
});


Route::get('invoice','InvoiceController')->middleware(['allow_paid_client'])->name('invoice');