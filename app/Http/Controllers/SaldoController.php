<?php

namespace App\Http\Controllers;

use App\Saldo;
use Illuminate\Http\Request;

class SaldoController extends Controller
{
    public function store(Request $request)
    {
        $saldo=new Saldo();
        $saldo->deposito=$request->deposito;
        $saldo->tipo=$request->tipo;
        $saldo->orden_id=$request->orden_id;
        $saldo->cuenta=$request->cuenta;
        $saldo->save();
        return back();
    }
}
