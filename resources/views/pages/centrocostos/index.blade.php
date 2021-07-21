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
                        <h2>CENTRO DE COSTOS</h2>
                    </div>
                    <div style="float: right">
                        <button type="button" class="btn btn-warning" style="height: 40px" data-toggle="modal" data-target="#registerArea">
                            <i class="fa fa-plus"></i> CENTRO DE COSTOS
                        </button>
                    </div>
                </div>
                <div class="header" style="padding-top: 25px">
                    <div class="buttons" style="float: right">
                        <a href=""  class="btn btn-warning"><i class="fa fa-download"></i> PDF</a>
                        <a href=""  class="btn btn-warning">
                            <i class="fa fa-download"></i> EXCEL</a>
                        <a href="#"  class="btn btn-warning" data-toggle="modal" data-target="#importExcel">
                            <i class="fa fa-upload"></i>
                            EXCEL</a>
                        
                    </div>                        
                </div>
                <div class="body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover js-basic-example dataTable table-custom">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Descripción</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($centroCostos as $key => $value)
                                    <tr>
                                        <td>{{ $key +1 }}</td>
                                        <td>{{ $value->descripcion }}</td>
                                        <td>
                                            <button type="button" class="btn btn-warning"  data-toggle="modal" data-target="#editarArea{{$item->id}}">
                                                <i class="fa fa-plus"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger"  data-toggle="modal" data-target="#eliminarArea{{$item->id}}">
                                                <i class="fa fa-trash"></i>
                                             </button>
                                    </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('pages.centrocostos.modals.register_area')
</div>
@endsection
@section('js')
@include('layouts.js')

@endsection