<?php

use App\Http\Controllers\PeriodController;
use Illuminate\Support\Facades\Route;

Route::prefix("/periods")->group(function () {
    Route::get('/', [PeriodController::class, 'index'])->name('periods.index');
    Route::post('/', [PeriodController::class, 'store'])->name('periods.store');
    Route::put('/{period}', [PeriodController::class, 'update'])->name('periods.update');
    Route::delete('/{period}', [PeriodController::class, 'destroy'])->name('periods.destroy');
});