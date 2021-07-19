@extends('layouts.layout')
@section('css')
@include('layouts.css')
@endsection
@section('content')
<div class="container-fluid">
    @include('layouts.welcome')
    <div class="row mb-2">
        <div class="col-sm-6">
          <h2 class="m-0">PROGRAMACIÓN DE UNIDAD {{str_pad($order[0]->id, 6, "0", STR_PAD_LEFT)}}</h2>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="{{ url('home') }}">Inicio</a></li>
            <li class="breadcrumb-item active"><a href="{{route('viajes.index')}}">Programación de unidades</a></li>
          </ol>
        </div>
      </div>
    <div class="row clearfix">
        <div class="col-lg-12">
            <div class="card" style="background: #FFFFFF">
                <div class="header" >
                    <div style="float: left">
                        <h2>ABASTECIMIENTO DE COMBUSTIBLE</h2>
                    </div>
                    <div style="float: right">
                       
                    </div>
                </div>
                <div class="body">
                    <div id='app'>
                        <crear-combustible-component></crear-combustible-component>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</div>
@endsection
@section('js')
@include('layouts.js')
<script src="{{ asset('js/app.js') }}"></script>
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
<link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet">
@endsection