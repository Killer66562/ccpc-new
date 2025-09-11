<?php

use App\Http\Controllers\AuthController;
use App\Http\Middleware\AuthMiddleware;
use App\Http\Middleware\GuestMiddleware;
use Inertia\Inertia;

Route::middleware(GuestMiddleware::class)->get('/login', function () {
    return Inertia::render('Login');
})->name('login');

Route::middleware(GuestMiddleware::class)->post('/login', [AuthController::class, 'login'])->name('auth.login');

Route::middleware(GuestMiddleware::class)->get('/register', function () {
    return Inertia::render('Register');
})->name('register');

Route::middleware(GuestMiddleware::class)->post('/register', [AuthController::class, 'register'])->name('auth.register');

Route::middleware(AuthMiddleware::class)->post('/logout', [AuthController::class, 'logout'])->name('auth.logout');