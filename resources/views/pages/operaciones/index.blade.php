@extends('layouts.layout')
@section('css')
@include('layouts.css')
@endsection
@section('content')
<div class="container-fluid">
    @include('layouts.welcome')
    <div class="row clearfix">
        <div class="col-lg-12">
            <div class="card" style="background: #FFFFFF">
                <div class="header" >
                    <div style="float: left">
                        <h2>COMPRAS</h2>
                    </div>
                    <div style="float: right">
                        <a href="{{route('nueva.compra')}}" type="button" data-toggle="tooltip" title="Ingresar Compra" data-placement="bottom"
                        class="btn-shadow mr-3 btn btn-success">
                        <i class="fa fa-plus"></i> Nueva Compra
                        </a>
                        {{-- <button type="button" class="btn btn-warning" style="height: 40px" data-toggle="modal" data-target="#registerProducto">
                            <i class="fa fa-plus"></i> NUEVO COMPRA
                        </button> --}}
                    </div>
                </div>
                <div class="body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover js-basic-example dataTable table-custom">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Cliente</th>
                                    <th>Operación Gravada</th>
                                    <th>IGV</th>
                                    <th>Total</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($operaciones as $key=>$xd)
                                <tr>
                                    <td>{{$key+1}}</td>
                                    <td>{{$xd->cliente_proveedor}}</td>
                                    <td>{{$xd->operaciones_gravadas}}</td>
                                    <td>{{$xd->igv}}</td>
                                    <td>{{$xd->total}}</td>
                                    <td>ver</td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('js')
@include('layouts.js')

@endsection