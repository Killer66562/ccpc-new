<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAnnouncementRequest;
use App\Http\Requests\UpdateAnnouncementRequest;
use App\Models\Announcement;
use Inertia\Inertia;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $announcements = Announcement::all();
        $showForm = request()->user()?->hasRole('admin') ? true : false;
        return Inertia::render('Announcements', [
            'announcements' => $announcements, 
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
    public function store(StoreAnnouncementRequest $request)
    {
        //
        $valid = $request->user()?->can('create', Announcement::class) ? true : false;
        if (!$valid) {
            return redirect()->route('home')->withErrors([
                'message' => "You have no permission"
            ]);
        }
        $data = $request->validated();
        Announcement::create($data);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Announcement $announcement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Announcement $announcement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAnnouncementRequest $request, Announcement $announcement)
    {
        //
        $valid = $request->user()?->can('update', $announcement) ? true : false;
        if (!$valid) {
            return redirect()->route('home')->withErrors([
                'message' => "You have no permission"
            ]);
        }
        $data = $request->validated();
        $announcement->update($data);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Announcement $announcement)
    {
        //
        $valid = request()->user()?->can('delete', $announcement) ? true : false;
        if (!$valid) {
            return redirect()->route('home')->withErrors([
                'message' => "You have no permission"
            ]);
        }
        $announcement->delete();
        return redirect()->back();
    }
}
