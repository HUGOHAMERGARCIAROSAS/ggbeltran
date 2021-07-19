<template>
    <div class="modal fade xd2" id="modalDetalleFacturacion"  tabindex="10000" role="dialog"
         aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="fas fa-list mr-1"></i> Detalle de Venta</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-9">
                            <label>Código/Descripción</label>
                                <select id="2" class="form-control" v-model="selectProducto" @change="changeProducto($event)" @select="mySelectEvent2($event)" > 
                                        <option v-for="(item, index) in productos" :key="index" v-bind:value="item.id">{{item.text}}</option>
                                </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Cantidad</label>
                                <input type="number" class="form-control"
                                       v-model="detalle.cantidad"
                                         min="1"
                                 required>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Precio Compra</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">S/. </span>
                                    </div>
                                    <input type="text" class="form-control"
                                           v-model="detalle.precio_unitario"
                                     required>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Precio Total</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">S/. </span>
                                    </div>
                                    <input type="text" class="form-control"
                                           v-model="calcularImporteDetalleProducto" disabled required>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" v-if="selectProducto && detalle.precio_unitario>0"
                            class="btn btn-primary btn-pill"
                            @click="guardarDetalleFacturacion()"
                    >
                        Guardar Detalle
                    </button>
                    <button type="button" class="btn btn-secondary btn-pill"
                            data-dismiss="modal"
                            @click="closeModalDetalleFacturacion()"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
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
        data() {
            return {
                detallefacturacion: [],
                productos: [],
                
                selectProducto:'',
                detalle: {
                    id:'',
                    nombre: '',
                    cantidad: '',
                    precio_unitario: '',
                    importe: '',
                },            
            }
        },
        methods: {
            limpiarData() {
                self = this;
                self.detalle.cantidad = '';
                self.detalle.precio_unitario = '';
                self.detalle.importe = '';
                self.selectProducto = '';
            },
            changeProducto(event) {
                let value = this.selectProducto;
                axios.get('/productos-api-search/' + value ).then(({data}) => {
                    self = this;
                    self.detalle.id = data.id;
                    self.detalle.nombre = data.nombre;
                }).catch((error) => {
                    console.log(error);
                });
            },
            getProductos() {
                axios.get('/lista-productos-text').then(({data}) => {
                    this.productos = data;
                }).catch((error) => {
                    console.log(error);
                });
            },
            guardarDetalleFacturacion() {
                self = this;
                self.detalle.importe = parseFloat(this.calcularImporteDetalleProducto).toFixed(2);

                Bus.$emit("DetalleFacturacion", self.detalle);
                self.closeModalDetalleFacturacion();
            },
            
            closeModalDetalleFacturacion() {
                self = this;
                self.limpiarData();
                $('#modalDetalleFacturacion').modal('hide');
                 $("#modalNotaCredito").modal('show');
            },
             mySelectEvent2({id,  text}){
                console.log({id, text})
            },
        },
        created() {
            this.getProductos();
        },
        computed: {
            calcularImporteDetalleProducto() {
                return parseFloat((this.detalle.cantidad) * (this.detalle.precio_unitario)).toFixed(2);
            }
        }
    }
</script>
