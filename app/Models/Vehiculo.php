<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vehiculo extends Model
{
    protected $table = 'vehículo';
    protected $fillable = [
        'placa','marca','carga','escala',
        'created_at','updated_at','usuario_insert',
        'usuario_updated','usuario_deleted','propio',
        'estado','activo','anio_fabricacion','clase',
        'modelo','combustible','carroceria','ejes',
        'color','ruedas','num_motor','cilindro','num_serie_chasis',
        'carreta','tracto','peso_seco','peso_bruto','anio_modelo',
        'empresa_id'
    ];
}