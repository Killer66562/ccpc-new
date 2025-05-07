<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $request = request();
        $page = $request->query('page');

        $data = User::query()->paginate(page: $page);
        foreach ($data->items() as $user) {
            $user->append('is_admin');
        }
        return Inertia::render('Users', ['data' => $data]);
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
    public function store(StoreUserRequest $request)
    {
        //
        $valid = $request->user()?->can('create', User::class);
        if (!$valid) {
            return redirect()->back()->withErrors([
                'message' => "You have no permission"
            ]);
        }

        $data = $request->validated();
        $isAdmin = $data['is_admin'];

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        if ($isAdmin) {
            $user->assignRole('admin');
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        //
        $valid = $request->user()?->can('update', $user);
        if (!$valid) {
            return redirect()->back()->withErrors([
                'message' => "You have no permission"
            ]);
        }

        $data = $request->validated();

        $email = $data['email'];
        $user_exists = User::whereNot('id', '=', $user->id)->where('email', '=', $email)->exists();
        if ($user_exists) {
            return redirect()->back()->withErrors([
                'message' => "This email has been taken"
            ]);
        }

        $isAdmin = $data['is_admin'];
        $password = $data['password'];

        //若密碼為空或長度為0則不更新密碼
        if($password === null || strlen($password) <= 0) {
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
            ]);
        }
        else {
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($password)
            ]);
        }

        if ($isAdmin) {
            if (!$user->hasRole('admin')) {
                $user->assignRole('admin');
            }
        }
        else {
            if ($user->hasRole('admin')) {
                //防呆 讓你拔不了自己帳號的管理員權限
                $ru = $request->user();
                if ($ru?->id !== $user->id) {
                    $user->removeRole('admin');
                }
            }
        }
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
        $ru = request()->user();
        $valid = $ru?->can('update', $user);
        if (!$valid) {
            return redirect()->back()->withErrors([
                'message' => "You have no permission"
            ]);
        }
        //防呆 讓你刪不了自己帳號
        if ($ru?->id !== $user->id ) {
            $user->delete();
        }
        return redirect()->back();
    }
}
