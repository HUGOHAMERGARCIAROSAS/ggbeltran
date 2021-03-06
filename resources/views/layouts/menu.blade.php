<div id="left-sidebar" class="sidebar">
    <div class="sidebar-scroll">
        <div class="text-center facet_sidebar" style="padding: 20px 0 10px 0">
            <a href="{{route('/')}}"><img src="{{asset('loggo.png')}}" alt="TRB" class="img-responsive logo "></a>                
        </div>
        <div class="user-account">
            <img src="{{asset('img/use.jpg')}}" class="rounded-circle user-photo" alt="User Profile Picture">
            <div class="dropdown">
                <span>Bienvenido,</span>
                <a href="javascript:void(0);" class="dropdown-toggle user-name" data-toggle="dropdown"><strong>{{auth()->user()->name}}</strong></a>
                <ul class="dropdown-menu dropdown-menu-right account">
                    <li><a href="#"><i class="icon-user"></i>Mi perfil</a></li>
                    <li><a href="#"><i class="icon-envelope-open"></i>Mensajes</a></li>
                    <li><a href="#"><i class="icon-settings"></i>Ajustes</a></li>
                    <li class="divider"></li>
                    <li><a href="{{ route('logout') }}" onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();"><i class="icon-power"></i> {{ __('Salir') }}</a></li>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                </ul>
            </div>
        </div>
        <!-- Nav tabs -->
        <ul class="nav nav-tabs">
            <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#menu">Menu</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Chat"><i class="icon-book-open"></i></a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#setting"><i class="icon-settings"></i></a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#question"><i class="icon-question"></i></a></li>                
        </ul>             
        <!-- Tab panes -->
        <div class="tab-content p-l-0 p-r-0">
            <div class="tab-pane active" id="menu">
                <nav id="left-sidebar-nav" class="sidebar-nav">
                    <ul id="main-menu" class="metismenu">                            
                        <li>
                            <a href="#" class="has-arrow"><i class="icon-home"></i> <span>CLIENTES</span></a>
                            <ul>
                                @can('haveaccess','clientes.index')
                                <li class="active"><a href="{{route('clientes.index')}}">Listado de Clientes</a></li>
                                @endcan
                                <li class="active"><a href="{{route('terciarios.index')}}">Empresas Terciarias</a></li>
                                
                            </ul>
                        </li>
                        <li>
                            <a href="#Personal" class="has-arrow"><i class="icon-globe"></i> <span>PERSONAL</span></a>
                            <ul>
                                @can('haveaccess','roles.index')
                                <li class="active"><a href="{{route('roles.index')}}">Roles y Permisos</a></li>
                                @endcan
                                @can('haveaccess','users.index')
                                <li class="active"><a href="{{route('users.index')}}">Usuarios</a></li>
                                @endcan
                            </ul>
                        </li>
                        <li>
                            <a href="#Widgets" class="has-arrow"><i class="icon-puzzle"></i> <span>PROGRAMACI??N</span></a>
                            <ul>
                                <li class="active"><a href="{{route('unidades.index')}}">Unidades</a></li>
                                @can('haveaccess','rutas.index')
                                <li class="active"><a href="{{route('rutas.index')}}">Rutas</a></li>
                                @endcan
                                <li><a href="{{ route('gastos.index') }}">Gastos</a></li>
                                <li><a href="{{ route('lugares.index') }}">Lugares</a></li>
                                <li class="active"><a href="{{ route('productos.index') }}">Productos</a></li>
                                <li class="active"><a href="{{route('viajes.index')}}">Programaci??n de unidades</a></li>
                                
                            </ul>
                        </li>
                        <li>
                            <a href="#Widgets" class="has-arrow"><i class="icon-puzzle"></i> <span>COMPRAS</span></a>
                            <ul>
                                <li class="active"><a href="{{route('proproductos.index')}}">PROVEEDORES</a></li>
                                <li class="active"><a href="{{ route('productos.index') }}">PRODUCTOS</a></li>
                                <li class="active"><a href="{{ route('centro_Costos.index') }}">CENTRO DE COSTOS</a></li>
                                <li class="active"><a href="{{route('operaciones')}}">REGISTRO DE COMPRAS</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#Widgets" class="has-arrow"><i class="icon-puzzle"></i> <span>CAJA</span></a>
                            <ul>
                                <li class="active"><a href="{{route('cajas.index')}}">Cobros Pendientes</a></li>
                                <li class="active"><a href="/pagos">Pagos Pendientes</a></li>
                                <li class="active"><a href="{{ route('GastosOperativos.index') }}">Gastos Operativos</a></li>
                            </ul>
                        </li>   
                        <li>
                            <a href="#Widgets" class="has-arrow"><i class="icon-puzzle"></i> <span>ALMACEN</span></a>
                        </li>
                        <li>
                            <a href="#Authentication" class="has-arrow"><i class="icon-lock"></i> <span>UTILIDAD</span></a>
                        </li>
                        <li>
                            <a href="{{route('proveedores.index')}}" class="has-arrow"><i class="icon-folder"></i> <span>PROVEEDORES</span></a>
                        </li>
                        <li>
                            <a href="#" class="has-arrow"><i class="icon-globe"></i> <span>DOCUMENTOS</span></a>
                            <ul>
                                @can('haveaccess','documentosP.index')
                                <li class="active"><a href="{{route('documentosP.index')}}">Documento Personal</a></li>
                                @endcan
                                @can('haveaccess','documentosV.index')
                                <li class="active"><a href="{{route('documentosV.index')}}">Documento de Veh??culo</a></li>
                                @endcan
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="tab-pane p-l-15 p-r-15" id="Chat">
            </div>
            <div class="tab-pane p-l-15 p-r-15" id="setting">
            </div>
            <div class="tab-pane p-l-15 p-r-15" id="question">
            </div>                
        </div>          
    </div>
</div>