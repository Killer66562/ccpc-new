<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Carbon\Carbon;
use DateTimeZone;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function registrations() {
        return $this->hasMany(Registration::class, 'user_id', 'id');
    }

    public function comments() {
        return $this->hasMany(Comment::class, 'user_id', 'id');
    }

    public function getCommentsAttribute() {
        return $this->comments()->get();
    }

    public function getRegistrationAttribute() {
        $year = Carbon::now(new DateTimeZone('+0800'))->year;
        return $this->registrations()->where('year', '=', $year)->first();
    }

    public function getIsAdminAttribute() {
        return $this->hasRole('admin');
    }

    protected function isAdmin(): Attribute

    {

        return new Attribute(
            get: fn() => $this->hasRole('admin')
        );
    }
}
