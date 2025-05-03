<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Models\Comment;
use Inertia\Inertia;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $comments = Comment::query()->orderByDesc('created_at')->get();
        $showForm = request()->user()?->hasRole('admin') ? true : false;
        return Inertia::render('Comments', [
            'comments' => $comments, 
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
    public function store(StoreCommentRequest $request)
    {
        //
        $data = $request->validated();
        Comment::create($data);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCommentRequest $request, Comment $comment)
    {
        //
        if (!$request->user()?->can('update', $comment)) {
            return redirect()->route('home');
        }
        $data = $request->validated();
        $comment->update($data);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
        if (request()->user()?->can('delete', $comment)) {
            return redirect()->route('home');
        }
        $comment->delete();
        return redirect()->back();
    }
}
