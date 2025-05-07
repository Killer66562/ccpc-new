<?php

namespace App\Http\Controllers;

use App\Models\Period;
use Carbon\Carbon;
use DateTimeZone;
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
        if (!$user) {
            return redirect()->route('home')->withErrors([
                'message' => "You have no permission"
            ]);
        }

        $current = Carbon::now(new DateTimeZone('+0800'));
        $inPeriod = Period::query()->where('starts_at', '<', $current)->where('ends_at', '>', $current)->first() ? true : false;
        $comments = $user->comments()->orderByDesc('id')->get();
        $registration = $user->registration;
        
        return Inertia::render('Dashboard', [
            'inPeriod' => $inPeriod, 
            'registration' => $registration, 
            'comments' => $comments
        ]);
    }
}
