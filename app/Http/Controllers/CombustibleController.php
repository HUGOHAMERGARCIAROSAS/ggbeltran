<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cliente;
use App\Lugar;
use App\Models\Ruta;
use App\Models\Order;
use App\User;
use App\Models\OrderControl;
use App\Models\Caja;
use App\Models\Vehiculo;
use App\Models\Combustible;
use DB;

class CombustibleController extends Controller
{
    public function index($id)
    {
       
        $order=Order::where('id',$id)->where('activo','1')->get();
        $combustibles = Combustible::select('combustibles.*', 'lugar.nombre')
        ->join('lugar', 'combustibles.lugar', '=', 'lugar.id')
        ->where('orden_trabajo_id',$id)->where('activo','1')
        ->get();
        // dd($combustibles);
        $lugar = Lugar::where('tipo','2')->get();
        return view('pages.ordenTrabajo.combustible')->with(compact('order','lugar','combustibles'));
       // return view('pages.combustible.index')->with(compact('combustibles','rutas','ordenes'));
       
    }
    public function getDataCombustible($id){
        return Combustible::select('combustibles.*', 'lugar.nombre')
                ->join('lugar', 'combustibles.lugar', '=', 'lugar.id')
                ->where('orden_trabajo_id',$id)->where('activo','1')
                ->get();

        return Combustible::where('orden_trabajo_id',$id)->where('activo','1')->get();
    }

    public function getLugaresText(){
        $lugares = DB::table('lugar')
        ->select('id as id','nombre AS text')
        ->where('estado', 1)
        ->get();
        return response()->json($lugares);
    }

    public function searchLugar($id){
        $lugar = Lugar::find($id);
        return response()->json($lugar);
    }


    public function storeCombustible(Request $request){
        try {
            DB::beginTransaction();
            $combustible = new Combustible();
            $combustible->lugar  = $request->lugar_id;
            $combustible->galones  = $request->galones;
            $combustible->precio  = $request->precio;
            $combustible->nro_ticket  = $request->nro_ticket;
            $combustible->orden_trabajo_id  = $request->orden_trabajo_id;
            $combustible->activo=1;
            $combustible->kilometros=$request->kilometros;
            if ($request->file('ticket')) {
            $file = $request->file('ticket');
            $name = 'ticket_' . time() . '.' . $file->getClientOriginalExtension();
            $path = public_path() . '/ticket'.'/'.'personal'.'/';
            $file->move($path, $name);
            $combustible->ticket = $name;
            }

            $combustible->save();
            DB::commit();
            return response()->json(true);
        }
        catch (\Exception $e) {
            DB::rollBack();
            return response()->json(false);
        }
    }

    public function update(Request $request,$id){
        $combustible = Combustible::findOrFail($id);
        $combustible->lugar  = $request->lugar;
        $combustible->galones  = $request->galones;
        $combustible->precio  = $request->precio;
        $combustible->nro_ticket  = $request->nro_ticket;
        $combustible->orden_trabajo_id  = $request->orden_trabajo_id;
        $combustible->activo=1;
        if ($request->file('ticket')) {
            // dd($request->file('archivos'));
            $file = $request->file('ticket');
            $name = 'ticket_' . time() . '.' . $file->getClientOriginalExtension();
            $path = public_path() . '/ticket'.'/'.'personal'.'/';
            $file->move($path, $name);
            $combustible->ticket = $name;
            }

        $combustible->save();
        return back();

    }

    public function update1(Request $request,$id)
    {
        // Gate::authorize('haveaccess','users.update1');
        $user = Combustible::findOrFail($id);
        $user->activo  = 0;
        // $user->usuario_deleted  = $request->usuario_deleted;
        $user->save();
        return back();
    }
}
