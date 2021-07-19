(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/operaciones/CompraComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/operaciones/CompraComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
        detalle_facturacion: []
      }
    };
  },
  mounted: function mounted() {},
  methods: {
    storeoperacion: function storeoperacion() {
      this.operacion.detalle_facturacion = this.detallefacturacion; // console.log(this.operacion);

      if (this.operacion.detalle_facturacion.length > 0) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/store-compra', this.operacion).then(function (_ref) {
          var data = _ref.data;

          if (data) {
            window.location.href = '/operaciones';
          }

          if (!data) {
            toastr.error('No se registro la compra, error en servidor!');
          }
        })["catch"](function (error) {
          console.error(error.response.data);
        });
      } else {
        toastr.error('No se ingreso ningún producto!');
      }
    },
    abrirModalDetalleProducto: function abrirModalDetalleProducto() {
      $('#modalDetalleFacturacion').modal('show');
    },
    myChangeEvent: function myChangeEvent(_ref2) {
      var _this = this;

      var id = _ref2.id,
          text = _ref2.text;
      var id_tercero = this.operacion.id_tercero;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(route('tercero', id_tercero)).then(function (response) {
        _this.tercero = response.data;
      });
    },
    mySelectEvent: function mySelectEvent(_ref3) {
      var id = _ref3.id,
          text = _ref3.text;
      console.log({
        id: id,
        text: text
      });
    },
    agregarDetallefacturacion: function agregarDetallefacturacion(data) {
      console.log(data);
      var existeProducto = false;
      this.detallefacturacion.forEach(function (element) {
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
    calcularOperacionesGravadas: function calcularOperacionesGravadas() {
      var operacionesGravadas = 0.00;
      this.detallefacturacion.forEach(function (element) {
        operacionesGravadas += parseFloat(element.importe / 1.18);
      });
      return operacionesGravadas;
    },
    calcularTotal: function calcularTotal() {
      return this.calcularOperacionesGravadas() + this.calcularIgv();
    },
    calcularIgv: function calcularIgv() {
      var igv = 0.18;
      return this.calcularOperacionesGravadas() * igv;
    },
    calcularFacturacion: function calcularFacturacion() {
      this.operacion.operaciones_gravadas = parseFloat(this.calcularOperacionesGravadas()).toFixed(2);
      this.operacion.igv = parseFloat(this.calcularIgv()).toFixed(2);
      this.operacion.total = parseFloat(this.calcularTotal()).toFixed(2);
    },
    removeItemDetalleFacturacion: function removeItemDetalleFacturacion(index) {
      this.detallefacturacion.splice(index, 1);
      toastr.info('Producto eliminado de la Compra!');
      this.calcularFacturacion();
    }
  },
  created: function created() {
    var _this2 = this;

    Bus.$on("DetalleFacturacion", function (data) {
      _this2.agregarDetallefacturacion(JSON.parse(JSON.stringify(data)));
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/operaciones/CompraComponent.vue?vue&type=template&id=19c0868a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/operaciones/CompraComponent.vue?vue&type=template&id=19c0868a& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "row clearfix" },
      [
        _c("div", { staticClass: "col-lg-12" }, [
          _c(
            "div",
            { staticClass: "card", staticStyle: { background: "white" } },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.storeoperacion()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "header" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("label", [_vm._v("Proveedor: ")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.operacion.cliente_proveedor,
                              expression: "operacion.cliente_proveedor"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", required: "" },
                          domProps: { value: _vm.operacion.cliente_proveedor },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.operacion,
                                "cliente_proveedor",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("label", [_vm._v("F. de Emisión: ")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.operacion.fecha_emision,
                              expression: "operacion.fecha_emision"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "date", required: "" },
                          domProps: { value: _vm.operacion.fecha_emision },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.operacion,
                                "fecha_emision",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-12", attrs: { align: "right" } },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success btn-elevate btn-pill",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.abrirModalDetalleProducto()
                              }
                            }
                          },
                          [_vm._v("Agregar Item\n                            ")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "body table-responsive" }, [
                    _c("table", { staticClass: "table table-hover" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.detallefacturacion, function(item, index) {
                          return _c("tr", { key: item.id }, [
                            _c("th", { attrs: { scope: "row" } }, [
                              _vm._v(_vm._s(index + 1))
                            ]),
                            _vm._v(" "),
                            _c("td", {
                              domProps: { textContent: _vm._s(item.nombre) }
                            }),
                            _vm._v(" "),
                            _c("td", {
                              domProps: { textContent: _vm._s(item.cantidad) }
                            }),
                            _vm._v(" "),
                            _c("td", {
                              domProps: {
                                textContent: _vm._s(item.precio_unitario)
                              }
                            }),
                            _vm._v(" "),
                            _c("td", {
                              domProps: { textContent: _vm._s(item.importe) }
                            }),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-danger btn-elevate btn-circle btn-icon btn-sm",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.removeItemDetalleFacturacion(
                                        index
                                      )
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-trash" })]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c("div", { staticClass: "offset-8 col-md-4" }, [
                        _c("div", { staticClass: "m-t-20" }, [
                          _c("p", [
                            _vm._v(
                              "Operaciones Gravadas:\n                                        "
                            ),
                            _c("span", {
                              staticClass: "float-right",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.operacion.operaciones_gravadas
                                )
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("IGV (18%): "),
                            _c("span", {
                              staticClass: "float-right",
                              domProps: {
                                textContent: _vm._s(_vm.operacion.igv)
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Total: "),
                            _c("span", {
                              staticClass: "float-right",
                              domProps: {
                                textContent: _vm._s(_vm.operacion.total)
                              }
                            })
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-4" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4", attrs: { align: "center" } },
                      [
                        _vm.detallefacturacion.length > 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-dark btn-block",
                                attrs: { type: "submit" }
                              },
                              [
                                _vm._v(
                                  "\n                                        GUARDAR"
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" })
                  ])
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("facturacion-detalle-modal-compra-component")
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", [_c("strong", [_vm._v("Lista de productos")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Precio")]),
        _vm._v(" "),
        _c("th", [_vm._v("Importe")]),
        _vm._v(" "),
        _c("th", [_vm._v("Opciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/operaciones/CompraComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/operaciones/CompraComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompraComponent_vue_vue_type_template_id_19c0868a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompraComponent.vue?vue&type=template&id=19c0868a& */ "./resources/js/components/operaciones/CompraComponent.vue?vue&type=template&id=19c0868a&");
/* harmony import */ var _CompraComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompraComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/operaciones/CompraComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompraComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompraComponent_vue_vue_type_template_id_19c0868a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompraComponent_vue_vue_type_template_id_19c0868a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/operaciones/CompraComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/operaciones/CompraComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/operaciones/CompraComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompraComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompraComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/operaciones/CompraComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompraComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/operaciones/CompraComponent.vue?vue&type=template&id=19c0868a&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/operaciones/CompraComponent.vue?vue&type=template&id=19c0868a& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompraComponent_vue_vue_type_template_id_19c0868a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompraComponent.vue?vue&type=template&id=19c0868a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/operaciones/CompraComponent.vue?vue&type=template&id=19c0868a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompraComponent_vue_vue_type_template_id_19c0868a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompraComponent_vue_vue_type_template_id_19c0868a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);