<?php

use App\Http\Controllers\DashboardController;
use App\Http\Middleware\AuthMiddleware;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::middleware(AuthMiddleware::class)->get('/dashboard', DashboardController::class)->name('dashboard');

Route::get('/competition-info', function () {
    return Inertia::render('CompetitionInfo');
})->name('competitionInfo');

Route::get('/transportation-info', function () {
    return Inertia::render('TransportationInfo');
})->name('transportationInfo');

Route::get('/flow', function () {
    return Inertia::render('Flow');
})->name('flow');

Route::get('/test', function () {
    return Inertia::render('Test', ['message' => "Hi"]);
})->name('test');

require __DIR__.'/auth.php';
require __DIR__.'/announcements.php';
require __DIR__.'/registrations.php';
require __DIR__.'/comments.php';
require __DIR__.'/periods.php';