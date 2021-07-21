<template>
            <div>
                <div class="row">
                    <div class="col-md-12">
                        <label for="">CHOFERES:</label>
                        <select v-model="user_id" name="user_id" id="" class="form-control">
                           <option v-for="(personal,index) in personales" :value="personal.id" :key="index">{{personal.nombre}}</option> 
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label for="">Tipo de Documento:</label>
                        <select v-model="tipo_documento" name="tipo_documento" id="" class="form-control">
                            <option selected value="DNI">DNI</option>
                            <option value="BREVETE">BREVETE</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="">Documento:</label>
                        <input v-model="nro_documento" type="text" class="form-control" name="documento">
                    </div>
                </div>   
                <div class="row">
                    <div class="col-md-6">
                        <label for="">Fecha de Emisión:</label>
                        <input type="date" v-model="fecha_Emision" class="form-control" name="fecha_emision">
                    </div>
                    <div class="col-md-6">
                        <label for="">Fecha de Vencimiento:</label>
                        <input type="date" v-model="fecha_vencimiento" class="form-control" name="fecha_vencimiento">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <label for="">Archivo:</label>
                        <input type="file" v-on:change="fileUpdate" class="form-control" name="archivos">
                    </div>
                </div>
                <div class="row" >
                    <div class="col-md-12" align="center">
                        <button class="btn btn-success btn-sm" v-on:click="agregar">Agregar</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                        <table class="table table-bordered border-primary">
                            <thead>
                                <tr>
                                    <th>Personal</th>
                                    <th>Tipo</th>
                                    <th>Nro Documento</th>
                                    <th>Documento</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(documento,index) in detalleDocumento" :key="index">
                                    <th>{{documento.nombrePersonal}}</th>
                                    <th>{{documento.tipo_documento}}</th>
                                    <th>{{documento.nro_documento}}</th>
                                    <th>{{documento.nombreFile}}</th>
                                    <th><button @click="eliminarDocumentoPersonal(documento,index)" type="button" class="btn btn-sm btn-danger"><i class="fa fa-remove"></i> </button></th>
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
   
    data(){
        return{
            personales: [],
            user_id:null,
            fecha_Emision:null,
            tipo_documento:null,
            nro_documento:null,
            fecha_vencimiento:null,
            detalleDocumento:[],
            file:null
        }
    },
    methods:{
        fileUpdate(e){
            this.file = e.target.files[0]
        },
        async agregar(){
            let formData = new FormData()
            formData.append('archivos',this.file)
            formData.append('user_id',this.user_id)
            formData.append('fecha_emision',this.fecha_Emision)
            formData.append('tipo_documento',this.tipo_documento)
            formData.append('documento',this.nro_documento)
            formData.append('fecha_vencimiento',this.fecha_vencimiento)
            var request ={
                url:'/saveDocumentopP',
                method:'post',
                data:formData
            }
            await axios(request).then((res)=>{
                    var namePersonal=null;
                        for(var personal of this.personales){
                                if(personal.id==this.user_id){
                                    namePersonal=personal.nombre;
                                }
                        }
                        var detalleDocumentoObject = {
                        user_id:this.user_id,
                        fecha_Emision: this.fecha_Emision,
                        tipo_documento:this.tipo_documento,
                        nro_documento:this.nro_documento,
                        fecha_vencimiento:this.fecha_vencimiento,
                        nombreFile:this.file.name,
                        id:res.data.id,
                        nombrePersonal:namePersonal
                    }
                    this.detalleDocumento.push(detalleDocumentoObject)
            }
            ).catch(e=>{

            })

        },
        async getPersonal(){
            await axios.get('/getPersonal')
            .then(res=>{
                    for(var value of res.data){
                        this.personales.push({
                            id:value.id,nombre:value.name
                        })
                    }
            })

        },
        async eliminarDocumentoPersonal(item,index){
            console.log(item);
            await axios.delete(`/documentosP/${item.id}`)
                .then(()=>{
                    this.detalleDocumento.splice(index,1);
                })     
        }


    },
    beforeCreate(){

    },
    created(){
        this.getPersonal();
    }
}

</script>
