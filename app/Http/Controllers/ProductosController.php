<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;
use DB;

class ProductosController extends Controller
{
    public function index()
    {
        $productos = Producto::where('activo','1')->get();
        return view('pages.productos.index')->with(compact('productos'));
    }

    public function getProductosText(){
        $productos = DB::table('productos')
        ->select('id as id','nombre AS text')
        ->where('activo', 1)
        ->get();
        return response()->json($productos);
    }

    public function searchProducto($id){
        $producto = Producto::find($id);
        // $producto = $producto->load('nombre');
        return response()->json($producto);
    }

    public function store(Request $request)
    {
        $producto = new Producto();
        $producto->tipo  = $request->tipo;
        $producto->descripcion  = $request->descripcion;
        $producto->activo  = 1;
        $producto->nombre  = $request->nombre;
        $producto->save();
        return back();

    }

    public function update(Request $request, $id)
    {
        $producto = Producto::findOrFail($id);
        $producto->tipo  = $request->tipo;
        $producto->descripcion  = $request->descripcion;
        $producto->activo  = 1;
        $producto->nombre  = $request->nombre;

        $producto->save();
        return back();
    }

    public function update1(Request $request,$id)
    {
        $producto = Producto::findOrFail($id);
        $producto->activo  = 0;
        $producto->save();
        return back();
    }
    public function update2(Request $request)
    {
       dd($request);
    }
}
