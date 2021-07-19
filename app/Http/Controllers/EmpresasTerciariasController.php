<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TerciarioProveedor;

class EmpresasTerciariasController extends Controller
{
    public function index()
    {
        $terceros = TerciarioProveedor::where('tipo','1')->where('activo','1')->get();
        return view('pages.terciarios.index')->with(compact('terceros'));
    }

    public function store(Request $request)
    {
        $tercero = new TerciarioProveedor();
        $tercero->razon_social  = $request->razon_social;
        $tercero->ruc  = $request->ruc;
        $tercero->tipo  = 1;
        $tercero->activo  = 1;
        $tercero->telefono  = $request->telefono;
        $tercero->direccion  = $request->direccion;
        $tercero->save();
        return back();

    }

    public function update(Request $request, $id)
    {
        $tercero = TerciarioProveedor::findOrFail($id);
        $tercero->razon_social  = $request->razon_social;
        $tercero->ruc  = $request->ruc;
        $tercero->tipo  = 1;
        $tercero->telefono  = $request->telefono;
        $tercero->direccion  = $request->direccion;

        $tercero->save();
        return back();
    }

    public function update1(Request $request,$id)
    {
        $tercero = TerciarioProveedor::findOrFail($id);
        $tercero->activo  = 0;
        $tercero->save();
        return back();
    }
}
