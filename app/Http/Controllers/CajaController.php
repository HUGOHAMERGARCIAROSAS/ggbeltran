<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cliente;
use App\Models\Ruta;
use App\Models\Order;
use App\User;
use App\Models\OrderControl;
use App\Models\Caja;
use App\Models\Vehiculo;
use DB;

class CajaController extends Controller
{
    public function index()
    {
        $orders = Order::select('orders.id','orders.cliente_id','moneda','orders.monto','estado', DB::raw("SUM(cajas.monto_pagar) as pendiente"))
                ->leftjoin('cajas', 'orders.id', '=', 'cajas.orden_trabajo_id')
                ->groupBy('orders.id','cliente_id','moneda','monto','estado')
                ->where('terceros_check','0')
                ->where('activo','1')
                ->get();

        return view('pages.caja.index')->with(compact('orders'));
    }
    public function pagos()
    {
        $orders = Order::select('orders.id','orders.cliente_id','moneda','orders.monto','estado', DB::raw("SUM(cajas.monto_pagar) as pendiente"))
                ->leftjoin('cajas', 'orders.id', '=', 'cajas.orden_trabajo_id')
                ->groupBy('orders.id','cliente_id','moneda','monto','estado')
                ->where('terceros_check','1')
                ->where('activo','1')
                ->get();
        return view('pages.pagos.index')->with(compact('orders'));
    }

    public function edit($id, Request $request)
    {
        $item = Order::findOrFail($id);
        return view('pages.caja.edit')->with(compact('item'));
    }

    public function store(Request $request){
        $caja = new Caja();
        $caja->cliente_id  = $request->cliente_id;
        $caja->monto  = $request->monto;
        $caja->forma_pago  = $request->forma_pago;
        $caja->nro_factura  = $request->nro_factura;
        $caja->monto_pagar  = $request->monto_pagar;
        $caja->saldo  = $request->saldo;
        $caja->user_insert  = $request->user_insert;
        $caja->orden_trabajo_id  = $request->orden_trabajo_id;
        $caja->tipo  = 1;
        if ($request->file('factura')) {
            $file = $request->file('factura');
            $name = 'factura_' . time() . '.' . $file->getClientOriginalExtension();
            $path = public_path() . '/factura'.'/'.'personal'.'/';
            $file->move($path, $name);
            $caja->factura = $name;
            }

        $caja->save();

        $orders = Order::select('orders.id','orders.monto as monto',
                 DB::raw("SUM(cajas.monto_pagar) as pendiente"))
                ->leftjoin('cajas', 'orders.id', '=', 'cajas.orden_trabajo_id')
                ->groupBy('orders.id','monto')
                ->where('orders.id',$request->orden_trabajo_id)
                ->get();
       
        if($orders[0]->monto - $orders[0]->pendiente == 0){
            $orders = Order::findOrFail($request->orden_trabajo_id);
            $orders->estado = 0;
            $orders->save();
        }

        return back();
    }
    public function storePago(Request $request){
        $caja = new Caja();
        $caja->cliente_id  = $request->cliente_id;
        $caja->monto  = $request->monto;
        $caja->forma_pago  = $request->forma_pago;
        $caja->nro_factura  = $request->nro_factura;
        $caja->monto_pagar  = $request->monto_pagar;
        $caja->saldo  = $request->saldo;
        $caja->user_insert  = $request->user_insert;
        $caja->orden_trabajo_id  = $request->orden_trabajo_id;
        $caja->tipo  = 2;
        if ($request->file('factura')) {
            $file = $request->file('factura');
            $name = 'factura_' . time() . '.' . $file->getClientOriginalExtension();
            $path = public_path() . '/factura'.'/'.'personal'.'/';
            $file->move($path, $name);
            $caja->factura = $name;
            }

        $caja->save();

        $orders = Order::select('orders.id','orders.monto as monto',
                 DB::raw("SUM(cajas.monto_pagar) as pendiente"))
                ->leftjoin('cajas', 'orders.id', '=', 'cajas.orden_trabajo_id')
                ->groupBy('orders.id','monto')
                ->where('orders.id',$request->orden_trabajo_id)
                ->get();
       
        if($orders[0]->monto - $orders[0]->pendiente == 0){
            $orders = Order::findOrFail($request->orden_trabajo_id);
            $orders->estado = 0;
            $orders->save();
        }

        return back();
    }
}
