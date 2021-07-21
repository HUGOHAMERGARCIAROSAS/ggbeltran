<template>
    <div>
        <form @submit.prevent="addProduct" enctype="multipart/form-data">   
        <div class="row">
            <div class="col-md-4">
                <label>Lugar</label>
                 <select id="2" class="form-control" v-model="selectLugar" @change="changeProducto($event)" @select="mySelectEvent2($event)" > 
                                        <option v-for="(item, index) in lugares" :key="index" v-bind:value="item.id">{{item.text}}</option>
                                </select>
            </div>
            <div class="col-md-4">
                    <label>Galones</label>
                    <input type="number" class=" form-control" v-model="operacion.galones">                 
            </div>
            <div class="col-md-4">
                <label>Kilometros</label>
                <input type="number" class=" form-control" v-model="operacion.kilometros">
            </div>
            <div class="col-md-4">
                <!-- <input type="hidden" class=" form-control" v-model="operacion.orden_trabajo_id" value="10"> -->
            </div>
        </div>
        <div class="row" style="padding-top:20px">
            <div class="col-md-4">
                <label>Precio</label>
                <input type="text" class=" form-control" v-model="operacion.precio">                 
            </div>
            <div class="col-md-4">
                <label>N° Ticket</label>
                <input type="text" class=" form-control" v-model="operacion.nro_ticket">
            </div>
            <div class="col-md-4">
                <label>Ticket</label>
                <input type="file" class=" form-control">
            </div>
        </div>   
            <div class=" align-center" style="padding-top:20px">
                <button type="submit"  class="btn btn-sm btn-primary">AGREGAR</button>
            </div> 
        </form> 
        <div class="table-responsive" style="padding-top:20px">
    <table class="table table-bordered" id="tableAbastecimiento" >
        <thead>
            <tr>
                <th>#</th>
                <th>Lugar</th>
                <th>Galones</th>
                <th>Kilometros</th>
                <th>Precio</th> 
                <th>Nro Ticket</th> 
                <th>Ticket</th> 
                <th>Opciones</th>
            </tr>
        </thead>
        <tbody id="bodytableAbastecimiento">
           
                <tr v-for="(item, index) in combustible" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{item.nombre}}</td>
                    <td>{{item.galones}}</td>
                    <td>{{item.kilometros}}</td>
                    <td>{{item.precio}}</td>
                    <td>{{item.nro_ticket}}</td>
                    <td><a  class="btn btn-primary" >
                            <i class=" fa fa-download"></i>
                        </a>
                    </td>
                    <th>
                        <button @click="eliminar(item,index)" type="button" class="btn btn-sm btn-danger"><i class="fa fa-remove"></i> </button>
                    </th>
                    
                </tr>
        </tbody>
    </table>
</div>
    </div>
</template>
<script>
 const url = window.location.href;
const lastParam = url.split("/").slice(-1)[0];

import axios from 'axios'
export default {
     data(){
            return{
                combustible:[],
                documento:'',
                selectLugar:'',
                lugares: [],
                operacion: {
                    orden_trabajo_id:lastParam,
                    lugar_id: '',
                    lugar: '',
                    galones: '',
                    kilometros: '',
                    precio: '',
                    nro_ticket:'',
                    ticket:''
                }
            }
        },
        methods:{
            addProduct(){
                let url = '/store-combustible' //Ruta que hemos creado para enviar una tarea y guardarla
                console.log(this.operacion);
                 axios.post(url,this.operacion).then(({data}) => {
                        if (data) {
                                this.limpiarData();
                                this.getCombustible();
                        }
                        if (!data) {
                            toastr.error('No se registro la compra, error en servidor!');
                        }
                    }).catch((error) => {
                        console.error(error.response.data); 
                    });  
            },
            limpiarData() {
                self = this;
                self.operacion.galones = '';
                self.operacion.lugar = '';
                self.operacion.kilometros = '';
                self.operacion.precio = '';
                self.operacion.nro_ticket = '';
                self.operacion.ticket = '';
                self.selectLugar = '';
            },
            changeProducto(event) {
                let value = this.selectLugar;
                axios.get('/lugares-api-search/' + value ).then(({data}) => {
                    self = this;
                    self.operacion.lugar_id = data.id;
                    self.operacion.lugar = data.nombre;
                }).catch((error) => {
                    console.log(error);
                });
            },
            getProductos() {
                axios.get('/lista-lugares-text').then(({data}) => {
                    this.lugares = data;
                }).catch((error) => {
                    console.log(error);
                });
            },
            getCombustible(){
                 axios.get('/getAbastecimientoCombustible/'+lastParam).then(res=>{
                this.combustible = res.data;
                })
            },
            async eliminar(item,index){
                console.log(item.id);
                this.combustible.splice(index,1);
                //await axios.delete(`/otrosgGastos/${item.id}`)
                 //   .then(()=>{
                        
                 //   })     
            }
        },
        computed:{
        },
        created() {
            this.getProductos();
            this.getCombustible();
        },
}
</script>