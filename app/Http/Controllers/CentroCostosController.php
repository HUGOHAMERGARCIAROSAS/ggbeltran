<?php

namespace App\Http\Controllers;

use App\CentroCostos;
use Illuminate\Http\Request;

class CentroCostosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $centroCostos=CentroCostos::where('estado',1)->get();
        return view('pages.centrocostos.index')->with(compact('centroCostos'));
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
        $area=new CentroCostos();
        $area->descripcion=$request->descripcion;
        $area->estado=1;
        $area->save();
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CentroCostos  $centroCostos
     * @return \Illuminate\Http\Response
     */
    public function show(CentroCostos $centroCostos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CentroCostos  $centroCostos
     * @return \Illuminate\Http\Response
     */
    public function edit(CentroCostos $centroCostos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CentroCostos  $centroCostos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CentroCostos $centroCostos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CentroCostos  $centroCostos
     * @return \Illuminate\Http\Response
     */
    public function destroy(CentroCostos $centroCostos)
    {
        //
    }
}
