<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OtrosGastos extends Model
{
    protected $table = 'otros_gastos';

    protected $fillable = [
        'fecha',
        'tipo_gasto',
        'gasto_operativo',
        'importe',
        'file',
        'orden_trabajo_id'
    ];

    public function setRegistrationFromAttribute($value)
    {
        $this->attributes['fecha'] =  Carbon::parse($value);
    }
}

