<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Operacion extends Model
{
    protected $table = 'operacions';

    protected $fillable = [
        'tipo_operacion', //VENTA O COMPRA
        'cliente_proveedor',
        'fecha_emision',
        'operaciones_gravadas',
        'igv',
        'total'
    ];
}
