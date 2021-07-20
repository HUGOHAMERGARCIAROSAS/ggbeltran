(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/operaciones/FacturacionDetalleModalCompraComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/operaciones/FacturacionDetalleModalCompraComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var v_select2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-select2-component */ "./node_modules/v-select2-component/dist/Select2.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Select2: v_select2_component__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      detallefacturacion: [],
      productos: [],
      selectProducto: '',
      detalle: {
        id: '',
        nombre: '',
        cantidad: '',
        precio_unitario: '',
        importe: ''
      }
    };
  },
  methods: {
    limpiarData: function limpiarData() {
      self = this;
      self.detalle.cantidad = '';
      self.detalle.precio_unitario = '';
      self.detalle.importe = '';
      self.selectProducto = '';
    },
    changeProducto: function changeProducto(event) {
      var _this = this;

      var value = this.selectProducto;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/productos-api-search/' + value).then(function (_ref) {
        var data = _ref.data;
        self = _this;
        self.detalle.id = data.id;
        self.detalle.nombre = data.nombre;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getProductos: function getProductos() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/lista-productos-text').then(function (_ref2) {
        var data = _ref2.data;
        _this2.productos = data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    guardarDetalleFacturacion: function guardarDetalleFacturacion() {
      self = this;
      self.detalle.importe = parseFloat(this.calcularImporteDetalleProducto).toFixed(2);
      Bus.$emit("DetalleFacturacion", self.detalle);
      self.closeModalDetalleFacturacion();
    },
    closeModalDetalleFacturacion: function closeModalDetalleFacturacion() {
      self = this;
      self.limpiarData();
      $('#modalDetalleFacturacion').modal('hide');
      $("#modalNotaCredito").modal('show');
    },
    mySelectEvent2: function mySelectEvent2(_ref3) {
      var id = _ref3.id,
          text = _ref3.text;
      console.log({
        id: id,
        text: text
      });
    }
  },
  created: function created() {
    this.getProductos();
  },
  computed: {
    calcularImporteDetalleProducto: function calcularImporteDetalleProducto() {
      return parseFloat(this.detalle.cantidad * this.detalle.precio_unitario).toFixed(2);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/operaciones/FacturacionDetalleModalCompraComponent.vue?vue&type=template&id=a76a5840&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/operaciones/FacturacionDetalleModalCompraComponent.vue?vue&type=template&id=a76a5840& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade xd2",
      attrs: {
        id: "modalDetalleFacturacion",
        tabindex: "10000",
        role: "dialog",
        "aria-hidden": "true"
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-9" }, [
                  _c("label", [_vm._v("Código/Descripción")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectProducto,
                          expression: "selectProducto"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "2" },
                      on: {
                        change: [
                          function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.selectProducto = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          function($event) {
                            return _vm.changeProducto($event)
                          }
                        ],
                        select: function($event) {
                          return _vm.mySelectEvent2($event)
                        }
                      }
                    },
                    _vm._l(_vm.productos, function(item, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: item.id } },
                        [_vm._v(_vm._s(item.text))]
                      )
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Cantidad")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detalle.cantidad,
                          expression: "detalle.cantidad"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number", min: "1", required: "" },
                      domProps: { value: _vm.detalle.cantidad },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.detalle, "cantidad", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Precio Compra")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.detalle.precio_unitario,
                            expression: "detalle.precio_unitario"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", required: "" },
                        domProps: { value: _vm.detalle.precio_unitario },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.detalle,
                              "precio_unitario",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Precio Total")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.calcularImporteDetalleProducto,
                            expression: "calcularImporteDetalleProducto"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", disabled: "", required: "" },
                        domProps: { value: _vm.calcularImporteDetalleProducto },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.calcularImporteDetalleProducto =
                              $event.target.value
                          }
                        }
                      })
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _vm.selectProducto && _vm.detalle.precio_unitario > 0
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-pill",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.guardarDetalleFacturacion()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Guardar Detalle\n                "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary btn-pill",
                  attrs: { type: "button", "data-dismiss": "modal" },
                  on: {
                    click: function($event) {
                      return _vm.closeModalDetalleFacturacion()
                    }
                  }
                },
                [_vm._v("\n                    Cancelar\n                ")]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [
        _c("i", { staticClass: "fas fa-list mr-1" }),
        _vm._v(" Detalle de Venta")
      ]),
      _vm._v(" "),
      _c("button", {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("S/. ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("S/. ")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/operaciones/FacturacionDetalleModalCompraComponent.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/operaciones/FacturacionDetalleModalCompraComponent.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FacturacionDetalleModalCompraComponent_vue_vue_type_template_id_a76a5840___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FacturacionDetalleModalCompraComponent.vue?vue&type=template&id=a76a5840& */ "./resources/js/components/operaciones/FacturacionDetalleModalCompraComponent.vue?vue&type=template&id=a76a5840&");
/* harmony import */ var _FacturacionDetalleModalCompraComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FacturacionDetalleModalCompraComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/operaciones/FacturacionDetalleModalCompraComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FacturacionDetalleModalCompraComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FacturacionDetalleModalCompraComponent_vue_vue_type_template_id_a76a5840___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FacturacionDetalleModalCompraComponent_vue_vue_type_template_id_a76a5840___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/operaciones/FacturacionDetalleModalCompraComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/operaciones/FacturacionDetalleModalCompraComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/operaciones/FacturacionDetalleModalCompraComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacturacionDetalleModalCompraComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FacturacionDetalleModalCompraComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/operaciones/FacturacionDetalleModalCompraComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FacturacionDetalleModalCompraComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/operaciones/FacturacionDetalleModalCompraComponent.vue?vue&type=template&id=a76a5840&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/operaciones/FacturacionDetalleModalCompraComponent.vue?vue&type=template&id=a76a5840& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FacturacionDetalleModalCompraComponent_vue_vue_type_template_id_a76a5840___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FacturacionDetalleModalCompraComponent.vue?vue&type=template&id=a76a5840& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/operaciones/FacturacionDetalleModalCompraComponent.vue?vue&type=template&id=a76a5840&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FacturacionDetalleModalCompraComponent_vue_vue_type_template_id_a76a5840___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FacturacionDetalleModalCompraComponent_vue_vue_type_template_id_a76a5840___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);