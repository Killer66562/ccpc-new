<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        //
        $user = $request->user();
        $comments = $user->comments;
        $registration = $user->registration;
        
        return Inertia::render('Dashboard', [
            'registration' => $registration, 
            'comments' => $comments
        ]);
    }
}
