<?php

use App\Http\Controllers\AnnouncementController;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Route::prefix("/announcements")->group(function () {
    Route::get('/', [AnnouncementController::class, 'index']);
    Route::post('/', [AnnouncementController::class, 'store']);
    Route::put('/{announcement}', [AnnouncementController::class, 'update']);
    Route::delete('/{announcement}', [AnnouncementController::class, 'destroy']);
});