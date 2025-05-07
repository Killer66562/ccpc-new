<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRegistrationRequest;
use App\Http\Requests\UpdateRegistrationRequest;
use App\Models\Registration;
use Carbon\Carbon;
use DateTimeZone;
use Exception;
use Inertia\Inertia;

class RegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        try {
            $year = Carbon::now(new DateTimeZone('+0800'))->year;
            $registrations = Registration::query()->where('year', '=', $year)->get();
        }
        catch (Exception $exception) {
            $registrations = [];
        }
        finally {
            $showForm = request()->user()?->hasRole('admin') ? true : false;
            return Inertia::render('Registrations', [
                'registrations' => $registrations, 
                'showForm' => $showForm
            ]);
        }
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
    public function store(StoreRegistrationRequest $request)
    {
        //
        $data = $request->validated();
        $year = Carbon::now(new DateTimeZone('+0800'))->year;
        $data = array_merge($data, ['year' => $year]);

        Registration::create($data);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Registration $registration)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Registration $registration)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRegistrationRequest $request, Registration $registration)
    {
        //
        $valid = request()->user()?->can('update', $registration) ? true : false;
        if (!$valid) {
            return redirect()->route('home')->withErrors([
                'message' => 'You have no permission'
            ]);
        }
        $data = $request->validated();
        $registration->update($data);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Registration $registration)
    {
        //
        $valid = request()->user()?->can('delete', $registration);
        if (!$valid) {
            return redirect()->route('home')->withErrors([
                'message' => 'You have no permission'
            ]);
        }
        $registration->delete();
        return redirect()->back();
    }
}
