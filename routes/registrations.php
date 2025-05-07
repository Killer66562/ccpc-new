<?php

use App\Http\Controllers\RegistrationController;
use Illuminate\Support\Facades\Route;

Route::prefix("/registrations")->group(function () {
    Route::get('/', [RegistrationController::class, 'index'])->name('registrations.index');
    Route::post('/', [RegistrationController::class, 'store'])->name('registrations.store');
    Route::put('/{registration}', [RegistrationController::class, 'update'])->name('registrations.update');
    Route::delete('/{registration}', [RegistrationController::class, 'destroy'])->name('registrations.destroy');
});