<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Operacion;
use App\Models\OperacionDetalle;
use App\Models\Producto;
use App\Models\Proveedor;
use App\Models\TerciarioProveedor;
use Illuminate\Support\Facades\DB;


class OperacionController extends Controller
{

    public function index(){
        
        $operaciones = Operacion::get();
        return view('pages.operaciones.index')->with(compact('operaciones'));
    }

    public function compra(){
        $productos = Producto::
        where('activo', 1)
        ->get();
        $proveedores=TerciarioProveedor::where('tipo',2)->where('activo',1)->get();
        return view('pages.operaciones.compra')->with(compact('productos','proveedores'));
    }

    public function storeCompra(Request $request){
        try {
            DB::beginTransaction();
            $operacion = new Operacion();
            $operacion->tipo_operacion = 'COMPRA';//VENTA O COMPRA
            $operacion->cliente_proveedor = $request->cliente_proveedor;
            $operacion->fecha_emision = $request->fecha_emision;
            $operacion->operaciones_gravadas = $request->total - $request->igv;
            $operacion->igv = $request->igv;
            $operacion->total = $request->total;
            $operacion->save();
            

            foreach ($request->detalle_facturacion as $item) {
                $detalle_operacion = new OperacionDetalle();
                $detalle_operacion->operacion_id = $operacion->id;
                $detalle_operacion->producto_id = $item['id'];
                $detalle_operacion->cantidad = $item['cantidad'];
                $detalle_operacion->precio_unitario = $item['precio_unitario'];
                $detalle_operacion->importe = $item['importe'];
                $detalle_operacion->save();
            }
            DB::commit();
            return response()->json(true);
        }
        catch (\Exception $e) {
            DB::rollBack();
            return response()->json(false);
        }
    }
}
