<?php

namespace App\Models;

use App\Models\Traits\ProjectRelationships;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class project extends Model
{
    use  HasFactory, ProjectRelationships;

    protected $fillable = [
        'name',
        'description',
        'status',
        'due_date',
        'image',
        'created_by',
        'updated_by',
    ];

}
