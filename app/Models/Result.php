<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    /** @use HasFactory<\Database\Factories\ResultFactory> */
    use HasFactory;

    protected $fillable = [
        'rank', 
        'registration_id'
    ];

    public function person() {
        return $this->belongsTo(Registration::class, 'registration_id', 'id');
    }

    public function getPersonAttribute() {
        return $this->person()->first();
    }
}
