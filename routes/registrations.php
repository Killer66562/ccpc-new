<?php

use App\Http\Controllers\RegistrationController;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Route::prefix("/registrations")->group(function () {
    Route::get('/', [RegistrationController::class, 'index'])->name('registrations.index');
    Route::get('/', [RegistrationController::class, 'create'])->name('registrations.create');
    Route::post('/', [RegistrationController::class, 'store'])->name('registrations.store');
    Route::put('/{Registration}', [RegistrationController::class, 'update'])->name('registrations.update');
    Route::delete('/{Registration}', [RegistrationController::class, 'destroy'])->name('registrations.destroy');
});