<template>
    <div>
         <form v-on:submit.prevent="storeoperacion()" enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-lg-12" align="right">
                        <button type="button" class="btn btn-success btn-elevate btn-pill"
                                @click="abrirModalDetalleProducto()">Agregar Item
                        </button>
                    </div>
                    <div class="table-responsive" style="padding-top:10px">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Gasto Operativo</th>
                                    <th class="text-center">Monto</th>
                                    <th class="text-center">Opciones</th>
                                </tr>
                            </thead>
                            <tbody> 
                                <tr  v-for="(item,index) in detallefacturacion" :key="index">
                                    <th scope="row">{{ index+1 }}</th>
                                        <td v-text="item.gasts"></td>
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
                    </div>
                    <div class="row">
                                    <div class="col-sm-4"></div>
                                    <div class="col-sm-4" align="center" >
                                        <button 
                                            type="submit" class="btn btn-dark btn-block">
                                            GUARDAR</button>
                                    </div>
                                    <div class="col-sm-4"></div>
                        </div>
                </div>
            </div>
        </form>
        <crear-otros-gastos-detalle-component></crear-otros-gastos-detalle-component>
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
                operacion: {
                    detalle_facturacion:[]
                }
            }
        },
            mounted() {
        
        },
        methods: {
            storeoperacion(){
                this.operacion.detalle_facturacion = this.detallefacturacion;
                // console.log(this.detalle_facturacion);
                    axios.post('/store-otros-gastos',this.operacion).then(({data}) => {
                        // console.log(data);
                        if (data) {
                            window.location.href = '/ordenTrabajo';
                        }
                        if (!data) {
                            toastr.error('No se registro la compra, error en servidor!');
                        }
                    }).catch((error) => {
                        console.error(error.response.data); 
                    });
            },
            abrirModalDetalleProducto() {
                $('#OtrosGastosOrdenTrabajo').modal('show');
            },
            agregarDetallefacturacion(data) {
                this.detallefacturacion.push(JSON.parse(JSON.stringify(data)));
                this.detalle_facturacion = this.detalle_facturacion;
            },
            removeItemDetalleFacturacion(index) {
                this.detallefacturacion.splice(index, 1);
                toastr.info('Producto eliminado de la Compra!');
            },
                
        },
        created(){
            Bus.$on("DetalleFacturacion", (data) => {
                this.agregarDetallefacturacion(JSON.parse(JSON.stringify(data)));
            });
        }
    }
</script>