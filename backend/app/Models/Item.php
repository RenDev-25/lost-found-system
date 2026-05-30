<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Item extends Model
{
    protected $fillable = [
        'title', 'description', 'category',
        'status', 'location', 'date_reported', 'image', 'user_id',
    ];

    public function user(): BelongsTo   { return $this->belongsTo(User::class); }
    public function claims(): HasMany   { return $this->hasMany(Claim::class); }
}
