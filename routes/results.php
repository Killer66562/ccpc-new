<?php

use App\Http\Controllers\ResultController;
use Illuminate\Support\Facades\Route;

Route::prefix("/results")->group(function () {
    Route::get('/', [ResultController::class, 'index'])->name('results.index');
    Route::post('/', [ResultController::class, 'store'])->name('results.store');
    Route::put('/{period}', [ResultController::class, 'update'])->name('results.update');
    Route::delete('/{period}', [ResultController::class, 'destroy'])->name('results.destroy');
});