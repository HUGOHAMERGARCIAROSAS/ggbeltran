<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Vehiculo;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Concerns\ToModel;
use App\Imports\UnidadesImport;
use App\Exports\UnidadesExport;
use App\Models\TerciarioProveedor;
use Maatwebsite\Excel\Concerns\WithHeadings;
use PDF;

class UnidadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $terceros = TerciarioProveedor::where('tipo','1')->where('activo','1')->get();
        $unidades = Vehiculo::get()->where('activo','1');
        return view('pages.unidades.index')->with(compact('unidades','terceros'));
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
        $unidad = new Vehiculo();
        $unidad->marca  = $request->marca;
        $unidad->placa  = $request->placa;
        $unidad->carga  = $request->carga;
        $unidad->created_at  = $request->created_at;
        $unidad->propio  = $request->propio;
        // $unidad->escala  = $request->escala;
        $unidad->anio_fabricacion  = $request->anio_fabricacion;
        $unidad->clase  = $request->clase;
        $unidad->modelo  = $request->modelo;
        $unidad->combustible  = $request->combustible;
        $unidad->carroceria  = $request->carroceria;
        $unidad->ejes  = $request->ejes;
        $unidad->color  = $request->color;
        $unidad->ruedas  = $request->ruedas;
        $unidad->num_motor  = $request->num_motor;
        $unidad->cilindro  = $request->cilindro;
        $unidad->num_serie_chasis  = $request->num_serie_chasis;
        $unidad->carreta  = $request->carreta;
        $unidad->tracto  = $request->tracto;
        $unidad->peso_seco  = $request->peso_seco;
        $unidad->peso_bruto  = $request->peso_bruto;
        $unidad->anio_modelo  = $request->anio_modelo;
        $unidad->empresa_id  = $request->empresa_id;
        $unidad->estado  = 1;
        $unidad->usuario_insert  = $request->usuario_insert;
        $unidad->activo  = 1;
        $unidad->save();
        return back();
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
        $unidad =  Vehiculo::findOrFail($id);
        $unidad->marca  = $request->marca;
        $unidad->placa  = $request->placa;
        $unidad->carga  = $request->carga;
        $unidad->created_at  = $request->created_at;
        $unidad->propio  = $request->propio;
        $unidad->escala  = $request->escala;
        $unidad->usuario_updated  = $request->usuario_updated;
        $unidad->save();
        return back();
    }

    public function update1(Request $request,$id)
    {
        $unidad = Vehiculo::findOrFail($id);
        $unidad->activo  = 0;
        $unidad->usuario_deleted  = $request->usuario_deleted;
        $unidad->save();
        return back();
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

    public function importExcel(Request $request)
    {
        $file = $request->file('file');
        Excel::import(new UnidadesImport,$file);
        return back()->with('message','Importacion completada');
    }

    public function exportExcel(){
        return Excel::download(new UnidadesExport,'unidades-list.xlsx');
    }

    public function exportPdf(){
        $unidades = Vehiculo::where('activo','1')->get();
        $pdf = PDF::loadView('pages.unidades.pdf_unidades',compact('unidades'));
        return $pdf->download('unidades-lista.pdf');
    }
    public function getVehiculos(){
        $unidades = Vehiculo::where('activo','1')->get();
        return $unidades;
    }
}
