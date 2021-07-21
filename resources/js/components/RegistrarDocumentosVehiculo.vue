<template>
    <div>
                <div class="row">
                    <div class="col-md-12">
                        <label for="">VEHÍCULO:</label>
                        <select v-model="vehiculo_id" name="vehiculo_id" id="" class="form-control form-control-sm">
                            <option v-for="(vehiculo,index) in vehiculos" :value="vehiculo.id" :key="index" >{{vehiculo.placa}}</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label for="">Tipo de Documento:</label>
                        <select v-model="tipo_documento" name="tipo_documento" id="tipo_documento" class=" form-control form-control-sm" @change="TipoDocumento()" >
                            <option value="1" selected>Soat</option>
                            <option value="2">Revisión tecnica</option>
                            <option value="3">Bonificación Neumatica</option>
                            <option value="4">Tarjetas internacionales</option> 
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label  id="documento"></label>
                        <input v-model="nro_documento" type="text" class="form-control" name="documento">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <label for="">Fecha de Emisión:</label>
                        <input type="date" v-model="fechaemision" class="form-control" name="fecha_emision">
                    </div>
                    <div class="col-md-4">
                        <label for="">Fecha de Caducidad:</label>
                        <input type="date" v-model="fechacaducidad" class="form-control" name="fecha_vencimiento">
                    </div>
                    <div class="col-md-4">
                        <label for="">Fecha de Tramite</label>
                        <select name="fechaTramite" v-model="fechaTramite" id="fechaTramite" class=" form-control">
                            <option value="N">Seleccionar:</option>
                            <option value="Ene">Enero</option>
                            <option value="Feb">Febrero</option>
                            <option value="Mar">Marzo</option>
                            <option value="Abr">Abril</option>
                            <option value="May">Mayo</option>
                            <option value="Jun">Junio</option>
                            <option value="Jul">Julio</option>
                            <option value="Ago">Agosto</option>
                            <option value="Sep">Septiembre</option>
                            <option value="Oct">Octubre</option>
                            <option value="Nov">Noviembre</option>
                            <option value="Dic">Diciembre</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <label for="">Archivo:</label>
                        <input type="file" v-on:change="fileUpdate" class="form-control" name="archivos">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12" align="center">
                        <button class="btn btn-success btn-sm" v-on:click="agregar">Agregar</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Vehículo</th>
                                    <th>Tipo</th>
                                    <th>Nro Documento</th>
                                    <th>Documento</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(documento,index) in detalleDocumento" :key="index">
                                    <th>{{documento.placa}}</th>
                                    <th v-if="documento.tipo_documento==1" >Soat</th> 
                                    <th v-else-if="documento.tipo_documento==2" >Revisión tecnica</th>
                                     <th v-else-if="documento.tipo_documento==3" >Bonificación Neumatica</th>
                                      <th v-else-if="documento.tipo_documento==4" >Tarjetas internacionales</th>                                    
                                    <th>{{documento.nro_documento}}</th>
                                    <th>{{documento.nombreFile}}</th>
                                    <th><button @click="eliminarDocumento(documento,index)" type="button" class="btn btn-sm btn-danger"> <i class="fa fa-remove"></i> </button></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
    </div>
</template>
<script>
import axios from 'axios';

export default{
    data() {
        return{
            vehiculos:[],
            vehiculo_id:null,
            tipo_documento:1,
            nro_documento:null,
            fechaemision:null,
            fechacaducidad:null,
            fechaTramite:null,
            file:null,
            detalleDocumento:[]
        }
    },
    methods:{
        fileUpdate(e){
            this.file = e.target.files[0];
        },
        async  getVehiculos(){
            await axios.get('/getUnidades')
            .then(res=>{
                for(var vehiculo of res.data){
                    this.vehiculos.push({
                        id:vehiculo.id,placa:vehiculo.placa
                    })
                }
            })
        },
        TipoDocumento(){
        },
        async agregar(){
            let formData = new FormData()
            formData.append('archivos',this.file)
            formData.append('vehiculo_id',this.vehiculo_id)
            formData.append('tipo_documento',this.tipo_documento)
            formData.append('documento',this.nro_documento)
            formData.append('fecha_emision',this.fechaemision) 
            formData.append('fecha_vencimiento',this.fechacaducidad)
            formData.append('fechaTramite',this.fechaTramite)

            var request ={
                url:'/saveDocumentopV',
                method:'post',
                data:formData
            }
            await axios(request).then((res)=>{
                var placaVehiculo=null;
                for(var vehiculo of this.vehiculos){
                                if(vehiculo.id==this.vehiculo_id){
                                    placaVehiculo=vehiculo.placa;
                                }
                }
                var detalleDocumentoObject = {
                        vehiculo_id:this.vehiculo_id,
                        fecha_emision: this.fechaemision,
                        tipo_documento:this.tipo_documento,
                        nro_documento:this.nro_documento,
                        fecha_vencimiento:this.fechacaducidad,
                        nombreFile:this.file.name,
                        id:res.data.id,
                        placa:placaVehiculo
                    }
                    this.detalleDocumento.push(detalleDocumentoObject)
                    console.log(detalleDocumento);
            }).catch(e=>{
                
            })
        },
        async eliminarDocumento(item,index){
            console.log(item);
            await axios.delete(`/documentosV/${item.id}`)
                .then(()=>{
                    this.detalleDocumento.splice(index,1);
                })     
        }
    },
    beforeCreate(){

    },
    created(){
        this.getVehiculos();
    }
}
</script>
