<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePeriodRequest;
use App\Http\Requests\UpdatePeriodRequest;
use App\Models\Period;
use Carbon\Carbon;
use DateTimeZone;
use Inertia\Inertia;

class PeriodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $periods = Period::all();
        $showForm = request()->user()?->hasRole('admin') ? true : false;
        return Inertia::render('Periods', [
            'periods' => $periods, 
            'showForm' => $showForm
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePeriodRequest $request)
    {
        //
        $valid = $request->user()?->can('create', Period::class) ? true : false;
        if (!$valid) {
            return redirect()->route('home')->withErrors([
                'message' => "You have no permission"
            ]);
        }
        $data = $request->validated();
        $starts_at = $data['starts_at'];
        $ends_at = $data['ends_at'];
        $data = [
            'starts_at' => Carbon::parse($starts_at), 
            'ends_at' => Carbon::parse($ends_at)
        ];
        Period::create($data);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Period $period)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Period $period)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePeriodRequest $request, Period $period)
    {
        //
        $valid = $request->user()?->can('update', $period) ? true : false;
        if (!$valid) {
            return redirect()->route('home')->withErrors([
                'message' => "You have no permission"
            ]);
        }
        $data = $request->validated();
        $starts_at = $data['starts_at'];
        $ends_at = $data['ends_at'];
        $data = [
            'starts_at' => Carbon::parse($starts_at), 
            'ends_at' => Carbon::parse($ends_at)
        ];
        $period->update($data);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Period $period)
    {
        //
        $valid = request()->user()?->can('delete', $period) ? true : false;
        if (!$valid) {
            return redirect()->route('home')->withErrors([
                'message' => "You have no permission"
            ]);
        }
        $period->delete();
        return redirect()->back();
    }
}
