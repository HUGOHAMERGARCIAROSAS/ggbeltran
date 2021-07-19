<template>
    <div>
        <div class="row clearfix" >
            <div class="col-lg-12">
                <div class="card" style="background:white">
                    <form  v-on:submit.prevent="storeoperacion()">
                        <div class="header">
                            <div class="row">
                                    <div class="col-sm-6">
                                        <label>Proveedor: </label>
                                        <input type="text" class="form-control" v-model="operacion.cliente_proveedor" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label>F. de Emisión: </label>
                                        <input type="date" class="form-control" v-model="operacion.fecha_emision" required>
                                    </div>
                                </div> 
                                <hr>
                            <h5><strong>Lista de productos</strong></h5>
                            <div class="col-lg-12" align="right">
                                <button type="button" class="btn btn-success btn-elevate btn-pill"
                                        @click="abrirModalDetalleProducto()">Agregar Item
                                </button>
                            </div>
                        </div>
                        <div class="body table-responsive">
                            <table class="table table-hover" >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Precio</th>
                                        <th>Importe</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item,index) in detallefacturacion" :key="item.id">
                                        <th scope="row">{{ index+1 }}</th>
                                        <td v-text="item.nombre"></td>
                                        <td v-text="item.cantidad"></td>
                                        <td v-text="item.precio_unitario"></td>
                                        <td v-text="item.importe"></td>
                                        <td class="text-center">
                                            <button type="button"
                                                    class="btn btn-danger btn-elevate btn-circle btn-icon btn-sm"
                                                    @click="removeItemDetalleFacturacion(index)">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="form-group row">
                                <div class="offset-8 col-md-4">
                                    <div class="m-t-20">
                                        <p>Operaciones Gravadas:
                                            <span class="float-right" v-text="operacion.operaciones_gravadas"></span>
                                        </p>
                                        <p>IGV (18%): <span class="float-right" v-text="operacion.igv"></span></p>
                                        <p>Total: <span class="float-right" v-text="operacion.total"></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                                    <div class="col-sm-4"></div>
                                    <div class="col-sm-4" align="center" >
                                        <button v-if="detallefacturacion.length>0"
                                            type="submit" class="btn btn-dark btn-block">
                                            GUARDAR</button>
                                    </div>
                                    <div class="col-sm-4"></div>
                        </div>
                    </form>
                </div>
            </div>
            <facturacion-detalle-modal-compra-component></facturacion-detalle-modal-compra-component>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Select2 from 'v-select2-component';
    export default {
        components:{
            Select2
        },
        data(){
            return{
                
                detallefacturacion: [],
                detalleproducto: {
                    nombre: '',
                    cantidad: '',
                    precio_unitario: '',
                    importe: ''
                },
                operacion: {
                    cliente_proveedor: '',
                    fecha_emision: '',
                    operacion_gravadas: '',
                    igv: '',
                    total: '',
                    detalle_facturacion:[]
                }
            }
        },
            mounted() {
        
        },
        methods: {
            storeoperacion(){
                this.operacion.detalle_facturacion = this.detallefacturacion;
                // console.log(this.operacion);
                if(this.operacion.detalle_facturacion.length > 0 ){
                    axios.post('/store-compra',this.operacion).then(({data}) => {
                        if (data) {
                            window.location.href = '/operaciones';
                        }
                        if (!data) {
                            toastr.error('No se registro la compra, error en servidor!');
                        }
                    }).catch((error) => {
                        console.error(error.response.data); 
                    });
                }else{
                    toastr.error('No se ingreso ningún producto!');
                }
            },
            abrirModalDetalleProducto() {
                $('#modalDetalleFacturacion').modal('show');
            },
            myChangeEvent({id,text}){
                    let id_tercero = this.operacion.id_tercero;
                    axios.get(route('tercero',id_tercero)).then( (response) =>{             
                        this.tercero = response.data
                });
            },
            mySelectEvent({id,  text}){
                console.log({id, text})
            },
            agregarDetallefacturacion(data) {
                console.log(data);
                let existeProducto = false;
                this.detallefacturacion.forEach((element) => {
                    if (element.nombre === data.nombre) {
                        existeProducto = true;
                    }
                });

                if (existeProducto) {
                    toastr.error('Ese producto ya se encuentra agregado!');
                }

                if (!existeProducto) {
                    this.detallefacturacion.push(JSON.parse(JSON.stringify(data)));
                    this.calcularFacturacion();
                    this.operacion.detalle_facturacion = this.detalle_facturacion;
                    console.log(this.detallefacturacion);
                }
            },
            calcularOperacionesGravadas() {
                let operacionesGravadas = 0.00;
                this.detallefacturacion.forEach((element) => {
                    operacionesGravadas += parseFloat(element.importe/1.18);
                });

                return operacionesGravadas;
            },
            calcularTotal() {
                return this.calcularOperacionesGravadas() + this.calcularIgv();
            },
            calcularIgv() {
                let igv = 0.18;
                return this.calcularOperacionesGravadas() * igv;
            },
            calcularFacturacion() {
                this.operacion.operaciones_gravadas = parseFloat(this.calcularOperacionesGravadas()).toFixed(2);
                this.operacion.igv = parseFloat(this.calcularIgv()).toFixed(2);
                this.operacion.total = parseFloat(this.calcularTotal()).toFixed(2);
            },
            removeItemDetalleFacturacion(index) {
                this.detallefacturacion.splice(index, 1);
                toastr.info('Producto eliminado de la Compra!');
                this.calcularFacturacion();
            },
                
        },
        created(){
            Bus.$on("DetalleFacturacion", (data) => {
                this.agregarDetallefacturacion(JSON.parse(JSON.stringify(data)));
            });
        }
    }
</script>

