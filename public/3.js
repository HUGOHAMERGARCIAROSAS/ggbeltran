(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrearDetalleOtrosGastosComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CrearDetalleOtrosGastosComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var v_select2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-select2-component */ "./node_modules/v-select2-component/dist/Select2.esm.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
var url = window.location.href;
var lastParam = url.split("/").slice(-1)[0];


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Select2: v_select2_component__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      detallefacturacion: [],
      detalle: {
        id: lastParam,
        fecha: '',
        importe: '',
        file: '',
        tipo_gasto: '',
        gasts: '',
        gasto_operativo: ''
      },
      tipoComprobante: '',
      gastos: [],
      gasto_operativo: ''
    };
  },
  methods: {
    limpiarData: function limpiarData() {
      self = this;
      self.detalle.fecha = '';
      self.detalle.file = '';
      self.detalle.importe = '';
      self.tipoComprobante = '';
      self.gasto_operativo = '';
    },
    ObtenerGastos: function ObtenerGastos() {
      var _this = this;

      this.gastos.splice(0);

      if (this.tipoComprobante != 0) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/otrosGastos/gastosTipo/' + this.tipoComprobante).then(function (res) {
          var _iterator = _createForOfIteratorHelper(res.data),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var value = _step.value;

              _this.gastos.push({
                id: value.id,
                tipo: value.tipo,
                descripcion: value.descripcion
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
      }
    },
    cargarDocumento: function cargarDocumento(event) {
      this.cargarDocumento.file = event.target.files[0];
    },
    changeProducto: function changeProducto(event) {
      var _this2 = this;

      var value = this.gasto_operativo;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/gasto-api-search/' + value).then(function (_ref) {
        var data = _ref.data;
        self = _this2;
        console.log(data.descripcion);
        self.detalle.gasto_operativo = data.id;
        self.detalle.gasts = data.descripcion;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    guardarDetalleFacturacion: function guardarDetalleFacturacion() {
      self = this;
      self.detalle.tipo_gasto = this.tipoComprobante;
      Bus.$emit("DetalleFacturacion", self.detalle);
      self.closeModalDetalleFacturacion();
    },
    closeModalDetalleFacturacion: function closeModalDetalleFacturacion() {
      self = this;
      self.limpiarData();
      $('#OtrosGastosOrdenTrabajo').modal('hide');
    },
    mySelectEvent2: function mySelectEvent2(_ref2) {
      var id = _ref2.id,
          text = _ref2.text;
      console.log({
        id: id,
        text: text
      });
    }
  },
  created: function created() {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrearDetalleOtrosGastosComponent.vue?vue&type=template&id=a5ddb270&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CrearDetalleOtrosGastosComponent.vue?vue&type=template&id=a5ddb270& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      staticClass: "modal",
      attrs: {
        id: "OtrosGastosOrdenTrabajo",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-scrollable modal-lg ",
          attrs: { role: "document" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("label", [_vm._v("Fecha")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.detalle.fecha,
                        expression: "detalle.fecha"
                      }
                    ],
                    staticClass: "form-control form-control-sm",
                    attrs: { type: "date" },
                    domProps: { value: _vm.detalle.fecha },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.detalle, "fecha", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("label", [_vm._v("Importe")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.detalle.importe,
                        expression: "detalle.importe"
                      }
                    ],
                    staticClass: "form-control form-control-sm",
                    attrs: { type: "text" },
                    domProps: { value: _vm.detalle.importe },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.detalle, "importe", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row", staticStyle: { "padding-top": "20px" } },
                [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("label", [_vm._v("Tipo Gasto Operativo")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.tipoComprobante,
                            expression: "tipoComprobante"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { name: "tipoGasto", id: "tipoGasto" },
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
                              _vm.tipoComprobante = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                            function($event) {
                              return _vm.ObtenerGastos()
                            }
                          ]
                        }
                      },
                      [
                        _c("option", { attrs: { value: "0" } }, [
                          _vm._v("SELECCIONAR")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("CON COMPROBANTE")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2", selected: "" } }, [
                          _vm._v("SIN COMPROBANTE")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("label", [_vm._v("Gasto Operativo")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.gasto_operativo,
                            expression: "gasto_operativo"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { id: "gastos" },
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
                              _vm.gasto_operativo = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                            function($event) {
                              return _vm.changeProducto($event)
                            }
                          ]
                        }
                      },
                      _vm._l(_vm.gastos, function(gasto, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: gasto.id } },
                          [_vm._v(_vm._s(gasto.descripcion))]
                        )
                      }),
                      0
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("input", {
                    staticClass: "form-control form-auth-sm",
                    staticStyle: { "margin-top": "20px" },
                    attrs: { type: "file" },
                    on: {
                      change: function($event) {
                        return _vm.cargarDocumento($event)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Cancelar")]
              ),
              _vm._v(" "),
              _c(
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
                    "\n                      Guardar Detalle\n                  "
                  )
                ]
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
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("OTROS GASTOS")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/CrearDetalleOtrosGastosComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/CrearDetalleOtrosGastosComponent.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CrearDetalleOtrosGastosComponent_vue_vue_type_template_id_a5ddb270___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrearDetalleOtrosGastosComponent.vue?vue&type=template&id=a5ddb270& */ "./resources/js/components/CrearDetalleOtrosGastosComponent.vue?vue&type=template&id=a5ddb270&");
/* harmony import */ var _CrearDetalleOtrosGastosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CrearDetalleOtrosGastosComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/CrearDetalleOtrosGastosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CrearDetalleOtrosGastosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CrearDetalleOtrosGastosComponent_vue_vue_type_template_id_a5ddb270___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CrearDetalleOtrosGastosComponent_vue_vue_type_template_id_a5ddb270___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CrearDetalleOtrosGastosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CrearDetalleOtrosGastosComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/CrearDetalleOtrosGastosComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CrearDetalleOtrosGastosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CrearDetalleOtrosGastosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrearDetalleOtrosGastosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CrearDetalleOtrosGastosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CrearDetalleOtrosGastosComponent.vue?vue&type=template&id=a5ddb270&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/CrearDetalleOtrosGastosComponent.vue?vue&type=template&id=a5ddb270& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CrearDetalleOtrosGastosComponent_vue_vue_type_template_id_a5ddb270___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CrearDetalleOtrosGastosComponent.vue?vue&type=template&id=a5ddb270& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrearDetalleOtrosGastosComponent.vue?vue&type=template&id=a5ddb270&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CrearDetalleOtrosGastosComponent_vue_vue_type_template_id_a5ddb270___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CrearDetalleOtrosGastosComponent_vue_vue_type_template_id_a5ddb270___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);