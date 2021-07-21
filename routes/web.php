<?php

use Illuminate\Support\Facades\Route;
use App\User;
use App\JhonatanPermission\Models\Role;
use App\JhonatanPermission\Models\Permission;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
if(version_compare(PHP_VERSION, '7.2.0', '>=')) {
    error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
}

Route::get('/', 'Auth\LoginController@showLoginForm')->name('/');
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');


// CLIENTES

Route::resource('/clientes', 'Admin\ClienteController')->names('clientes');
Route::put('clientes/delete/{id}', 'Admin\ClienteController@update1')->name('clientes.update1');
Route::post('import-list-excel', 'Admin\ClienteController@importExcel')->name('clientes.import.excel');
Route::get('export-list-excel', 'Admin\ClienteController@exportExcel')->name('clientes.export.excel');
Route::get('export-list-pdf', 'Admin\ClienteController@exportPdf')->name('clientes.export.pdf');

//RUTAS

Route::resource('rutas', 'Admin\RutasController');
Route::put('rutas/delete/{id}', 'Admin\RutasController@update1')->name('rutas.update1');
Route::post('iimport-list-excel', 'Admin\RutasController@importExcel')->name('rutas.import.excel');
Route::get('eexport-list-excel', 'Admin\RutasController@exportExcel')->name('rutas.export.excel');
Route::get('eexport-list-pdf', 'Admin\RutasController@exportPdf')->name('rutas.export.pdf');

//TARIFAS

Route::resource('tarifas', 'Admin\TarifasController');
Route::put('tarifas/delete/{id}', 'Admin\TarifasController@update1')->name('tarifas.update1');
Route::post('timport-list-excel', 'Admin\TarifasController@importExcel')->name('tarifas.import.excel');
Route::get('texport-list-excel', 'Admin\TarifasController@exportExcel')->name('tarifas.export.excel');
Route::get('texport-list-pdf', 'Admin\TarifasController@exportPdf')->name('tarifas.export.pdf');

//ROLES

Route::resource('/roles', 'Admin\RoleController')->names('roles');


//USUARIO
Route::resource('/users', 'Admin\UserController')->names('users');
Route::put('users/delete/{id}', 'Admin\UserController@update1')->name('users.update1');
Route::get('/getPersonal','Admin\UserController@GetPersonal');

//DOCUMENTOS DE PERSONAL

Route::resource('/documentosP', 'Admin\DocumentoPController')->names('documentosP');
Route::put('documentosP/delete/{id}', 'Admin\DocumentoPController@update1')->name('documentosP.update1');
Route::post('/saveDocumentopP','Admin\DocumentoPController@store');


//DOCUMENTOS DE VEHÍCULO
Route::resource('/documentosV', 'Admin\DocumentoVController')->names('documentosV');
Route::put('documentosV/delete/{id}', 'Admin\DocumentoVController@update1')->name('documentosV.update1');
Route::post('/saveDocumentopV','Admin\DocumentoVController@store');


//UNIDADES

Route::resource('/unidades', 'Admin\UnidadController')->names('unidades');
Route::put('/unidades/delete/{id}', 'Admin\UnidadController@update1')->name('unidad.update1');
Route::post('uimport-list-excel', 'Admin\UnidadController@importExcel')->name('unidades.import.excel');
Route::get('uexport-list-excel', 'Admin\UnidadController@exportExcel')->name('unidades.export.excel');
Route::get('uexport-list-pdf', 'Admin\UnidadController@exportPdf')->name('unidades.export.pdf');
Route::get('/getUnidades','Admin\UnidadController@getVehiculos');

//PROVEEDORES

Route::resource('/proveedores', 'Admin\ProveedorController')->names('proveedores');
Route::put('/proveedores/delete/{id}', 'Admin\ProveedorController@update1')->name('proveedores.update1');
Route::post('primport-list-excel', 'Admin\ProveedorController@importExcel')->name('proveedores.import.excel');
Route::get('prexport-list-excel', 'Admin\ProveedorController@exportExcel')->name('proveedores.export.excel');
Route::get('prexport-list-pdf', 'Admin\ProveedorController@exportPdf')->name('proveedores.export.pdf');


//ORDENES DE TRABAJO
Route::resource('/ordenTrabajo','OrdenTrabajoController')->names('viajes');
Route::post('/ordenTrabajo/orderControl', 'OrdenTrabajoController@createOrderControl')->name('ordenControl.store');
Route::put('/ordenTrabajo/delete/{id}', 'OrdenTrabajoController@updateEstado')->name('ordenTrabajo.updateEstado');

//CAJA
Route::resource('/caja','CajaController')->names('cajas'); 
Route::get('/pagos','CajaController@pagos');
Route::post('/pagos/store','CajaController@storePago')->name('pagos.store');
//ABASTECIMIENTO DE COMBUSTIBLE
Route::resource('combustible','CombustibleController')->names('abastecimientoCombustible');
Route::put('combustible/delete/{id}', 'CombustibleController@update1')->name('combustible.update1');
Route::post('/reporte-operaciones', 'OrdenTrabajoController@buscar')->name('reporte.operaciones.consultar');
Route::get('/abastecimientoCombustible/{id}','CombustibleController@index');

//CLIENTES VIGENTES
Route::get('clientesv-list-excel', 'HomeController@exportExcelCV')->name('clientes.vigentes.excel');
Route::get('clientesnv-list-excel', 'HomeController@exportExcelCNV')->name('clientes.novigentes.excel');
Route::get('clientesof-list-excel', 'HomeController@exportExcelOF')->name('ordenes.facturadas.excel');
Route::get('clientesnof-list-excel', 'HomeController@exportExcelNoOF')->name('ordenes.no.facturadas.excel');

//EMPRESAS TERCIARIAS 
Route::resource('terciarios','EmpresasTerciariasController')->names('terciarios');
Route::put('/terciarios/delete/{id}', 'EmpresasTerciariasController@update1')->name('terciario.update1');

//PROVEEDOR PRODUCTO
Route::resource('proproducto','ProveedorProductoController')->names('proproductos');
Route::put('/proveedor_producto/delete/{id}', 'ProveedorProductoController@update1')->name('proproductos.update1');
Route::get('proveedorProducto','ProveedorProductoController@getProveedorProductos');

//PRODUCTO
Route::resource('productos','ProductosController')->names('productos');
Route::put('/productos/delete/{id}', 'ProductosController@update1')->name('productos.update1');

//GASTOS
Route::resource('gastos','GastosController')->names('gastos');
Route::post('/gastosTipo','GastosController@TipoGastos');
Route::put('/gasto/delete/{id}', 'GastosController@update1')->name('gasto.updateEstado');
Route::get('gastos/eliminar/{id}','GastosController@update2');
Route::get('gastosAll','GastosController@gastosAll');
Route::get('otrosGastos/gastosTipo/{tipo}','GastosController@GastosxTipo');

//LUGAR 
Route::resource('lugar','LugarController')->names('lugares');
Route::post('/lugaresTipo','LugarController@TipoLugares');
Route::delete('/lugar/{id}', 'LugarController@destroy');

//GASTOS-OPERATIVOS
Route::resource('gastosOperativos','GastosOperativosController')->names('GastosOperativos');

//COMPRAS
Route::get('/operaciones', 'OperacionController@index')->name('operaciones');
Route::get('/nueva-compra', 'OperacionController@compra')->name('nueva.compra');
Route::post('/store-compra', 'OperacionController@storeCompra')->name('store.compra');
Route::get('/lista-productos-text', 'ProductosController@getProductosText')->name('lista-productos-text');
Route::get('/productos-api-search/{id}', 'ProductosController@searchProducto')->name('productos.api.search');


//ABASTECIMIENTO DE COMBUSTIBLE
Route::resource('/combustible','CombustibleController')->names('abastecimientoCombustible');
Route::put('combustible/delete/{id}', 'CombustibleController@update1')->name('combustible.update1');
Route::post('/reporte-operaciones', 'OrdenTrabajoController@buscar')->name('reporte.operaciones.consultar');
Route::get('/abastecimientoCombustible/{id}','CombustibleController@index');
Route::get('/lista-lugares-text', 'CombustibleController@getLugaresText')->name('lista-lugares-text');
Route::get('/lugares-api-search/{id}', 'CombustibleController@searchLugar')->name('lugares.api.search'); 
Route::post('/store-combustible', 'CombustibleController@storeCombustible')->name('store.combustible');
Route::get('/getAbastecimientoCombustible/{id}','CombustibleController@getDataCombustible');

//OTROS GASTOS OPERATIVOS
Route::get('/otrosGastos/{id}','OtrosGastosOperativosController@index');
Route::get('/gasto-api-search/{id}', 'OtrosGastosOperativosController@searchGasto')->name('gasto.api.search'); 
Route::post('/store-otros-gastos', 'OtrosGastosOperativosController@storeOtrosGastos')->name('store.otros.gastos'); 

///CENTRO DE COSTOS
Route::resource('/centroCostos','CentroCostosController')->names('centro_Costos');