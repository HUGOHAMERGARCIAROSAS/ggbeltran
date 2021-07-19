<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OperacionDetalle extends Model
{
    protected $table = 'operacion_detalles';

    protected $fillable = [
        'operacion_id',
        'producto_id',
        'cantidad',
        'precio_unitario',
        'importe'
    ];
    
    public function productos(){
        return $this->belongsToMany(Producto::class,'producto_id');
    }

    public function operacion(){
        return $this->belongsTo(Operacion::class,'operacion_id');
    }

}
