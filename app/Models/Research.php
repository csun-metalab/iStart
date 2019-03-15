<?php

namespace App\Models;

use App\Models\User;

use Illuminate\Database\Eloquent\Model;
 
class Research extends Model
{
    protected $table = 'research';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'research_id'
    ];

    public function user(){
        return $this->hasOne('App\Models\User', 'email', 'user_id');
    }
}