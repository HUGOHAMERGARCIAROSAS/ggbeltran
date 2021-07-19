<template>
    <div class="modal" id="OtrosGastosOrdenTrabajo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-lg " role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">OTROS GASTOS</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6">
                        <label>Fecha</label>
                        <input class="form-control form-control-sm" type="date" v-model="detalle.fecha">
                    </div>
                    <div class="col-md-6">
                        <label>Importe</label>
                        <input class="form-control form-control-sm" type="text" v-model="detalle.importe">
                    </div>
                </div>
                <div class="row" style="padding-top:20px">
                    <div class="col-md-6">
                        <label>Tipo Gasto Operativo</label>
                        <select  @change="ObtenerGastos()" v-model="tipoComprobante" class="form-control form-control-sm" name="tipoGasto" id="tipoGasto">
                            <option value="0">SELECCIONAR</option>
                            <option value="1">CON COMPROBANTE</option>
                            <option value="2" selected>SIN COMPROBANTE</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label>Gasto Operativo</label>
                        <select class="form-control form-control-sm" v-model="gasto_operativo" id="gastos" @change="changeProducto($event)">
                            <option v-for="(gasto,index) in gastos" :value="gasto.id"  :key="index" >{{gasto.descripcion}}</option>
                        </select>
                    </div>
                </div>
                <div class="row" >
                    <div class="col-md-12">
                        <input type="file" class="form-control form-auth-sm" style="margin-top: 20px" @change="cargarDocumento($event)">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button"
                            class="btn btn-primary btn-pill"
                            @click="guardarDetalleFacturacion()"
                    >
                        Guardar Detalle
                    </button>
            </div>
      </div>
    </div>
  </div>
</template>
<script>
const url = window.location.href;
const lastParam = url.split("/").slice(-1)[0];
    import axios from 'axios'
     import Select2 from 'v-select2-component';

    export default {
         components:{
            Select2
        },
        data() {
            return {
                detallefacturacion: [],
                detalle: {
                    id:lastParam,
                    fecha: '',
                    importe: '',
                    file:'',
                    tipo_gasto:'',
                    gasts:'',
                    gasto_operativo:''
                },   
                tipoComprobante:'',
                gastos:[],
                gasto_operativo:''  
            }
        },
        methods: {
            limpiarData() {
                self = this;
                self.detalle.fecha = '';
                self.detalle.file = '';
                self.detalle.importe = '';
                self.tipoComprobante = '';
                self.gasto_operativo= '';
            },
            ObtenerGastos(){
            this.gastos.splice(0);
            if(this.tipoComprobante!=0){
                axios.get('/otrosGastos/gastosTipo/'+this.tipoComprobante)
                    .then(res=>{
                        for(var value of res.data){
                            this.gastos.push({
                                id:value.id,tipo:value.tipo,descripcion:value.descripcion
                            })
                        }
                })
                }  
            },
            cargarDocumento(event){
                this.cargarDocumento.file = event.target.files[0];
            },
            changeProducto(event) {
                let value = this.gasto_operativo;
                axios.get('/gasto-api-search/' + value ).then(({data}) => {
                    self = this;
                    console.log(data.descripcion);
                    self.detalle.gasto_operativo = data.id;
                    self.detalle.gasts = data.descripcion;
                }).catch((error) => {
                    console.log(error);
                });
            },
            guardarDetalleFacturacion() {
                self = this;
                self.detalle.tipo_gasto = this.tipoComprobante;
                Bus.$emit("DetalleFacturacion", self.detalle);
                self.closeModalDetalleFacturacion();
            },
            
            closeModalDetalleFacturacion() {
                self = this;
                self.limpiarData();
                $('#OtrosGastosOrdenTrabajo').modal('hide');
            },
             mySelectEvent2({id,  text}){
                console.log({id, text})
            },
        },
        created() {
        },
        computed: {
        }
    }
</script>
