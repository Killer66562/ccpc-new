<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreResultRequest;
use App\Http\Requests\UpdateResultRequest;
use App\Models\Registration;
use App\Models\Result;
use Carbon\Carbon;
use DateTimeZone;
use Illuminate\Database\Query\Builder;
use Inertia\Inertia;

class ResultController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $query = Result::query()->with('person');

        $year = request()->query('year', null);
        if ($year !== null) {
            $year = (string)$year;
            $query = $query->whereHas('person', function ($builder) use ($year) {
                $builder->where('year', '=', $year);
            });
        }
        else {
            $year = (string)Carbon::now(new DateTimeZone('+0800'))->year;
            $query = $query->whereHas('person', function ($builder) use ($year) {
                $builder->where('year', '=', $year);
            });
        }
        
        $results = $query->orderBy('rank')->get();
        $people = Registration::query()->where('year', '=', $year)->get();
        $showForm = request()->user()?->hasRole('admin') ? true : false;
        return Inertia::render('Results', [
            'results' => $results, 
            'year' => $year, 
            'people' => $people, 
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
    public function store(StoreResultRequest $request)
    {
        //
        $data = $request->validated();
        Result::create($data);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Result $result)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Result $result)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateResultRequest $request, Result $result)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Result $result)
    {
        //
    }
}
