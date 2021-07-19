<?php

namespace App\Http\Controllers;
use App\Models\OtrosGastos;
use App\Models\Ruta;
use App\Models\Order;
use App\Lugar;
use App\Gastos;
use App\Models\Combustible;
use DB;

use Illuminate\Http\Request;

class OtrosGastosOperativosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $order=Order::where('id',$id)->where('activo','1')->get();
        $combustibles = Combustible::select('combustibles.*', 'lugar.nombre')
        ->join('lugar', 'combustibles.lugar', '=', 'lugar.id')
        ->where('orden_trabajo_id',$id)->where('activo','1')
        ->get();
        // dd($combustibles);
        $lugar = Lugar::where('tipo','2')->get();
        return view('pages.ordenTrabajo.otrosGastos')->with(compact('order','lugar','combustibles'));
       // return view('pages.combustible.index')->with(compact('combustibles','rutas','ordenes'));
       
    }

    public function searchGasto($id){
        $gastos = Gastos::find($id);
        return response()->json($gastos);
    }

    public function storeOtrosGastos(Request $request){
        try {
            foreach ($request->detalle_facturacion as $item ) {
                $detalle_operacion = new OtrosGastos();
                $detalle_operacion->fecha = $item['fecha'];
                $detalle_operacion->tipo_gasto = $item['tipo_gasto'];
                $detalle_operacion->gasto_operativo = $item['gasto_operativo'];
                $detalle_operacion->importe = $item['importe'];
                $detalle_operacion->orden_trabajo_id = $item['id'];
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
