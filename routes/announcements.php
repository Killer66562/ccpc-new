<?php

use App\Http\Controllers\AnnouncementController;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Route::prefix("/announcements")->group(function () {
    Route::get('/', [AnnouncementController::class, 'index'])->name('announcements.index');
    Route::post('/', [AnnouncementController::class, 'store'])->name('announcements.store');
    Route::put('/{announcement}', [AnnouncementController::class, 'update'])->name('announcements.update');
    Route::delete('/{announcement}', [AnnouncementController::class, 'destroy'])->name('announcements.destroy');
});