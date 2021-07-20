<div class="modal fade" id="registerTercero" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">REGISTRAR PROVEEDOR PRODUCTO</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form action="{{route('proproductos.store')}}" method="POST">
            {{ csrf_field() }}
            <div class="modal-body">
                <style>
                    .row{
                        padding-top: 10px;
                    }
                </style>
                <div class="row">
                    <div class="col-md-6">
                        <label for="">RUC/DNI:</label>
                        <input type="text" class="form-control" name="ruc">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <label for="">Razón Social:</label>
                        <input type="text" class="form-control" name="razon_social">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label for="">Teléfono 1:</label>
                        <input type="text" class="form-control" name="telefono2">
                    </div>
                    <div class="col-md-6">
                        <label for="">Teléfono 2:</label>
                        <input type="text" class="form-control" name="telefono">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <label for="">Dirección:</label>
                        <input type="text" class="form-control" name="direccion">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="submit" class="btn btn-primary">Guardar</button>
            </div>
        </form>
      </div>
    </div>
  </div>