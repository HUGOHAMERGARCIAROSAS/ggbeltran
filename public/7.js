(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrearOtrosGastosComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CrearOtrosGastosComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Select2: v_select2_component__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      detallefacturacion: [],
      operacion: {
        detalle_facturacion: []
      }
    };
  },
  mounted: function mounted() {},
  methods: {
    storeoperacion: function storeoperacion() {
      this.operacion.detalle_facturacion = this.detallefacturacion; // console.log(this.detalle_facturacion);

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/store-otros-gastos', this.operacion).then(function (_ref) {
        var data = _ref.data;

        // console.log(data);
        if (data) {
          window.location.href = '/ordenTrabajo';
        }

        if (!data) {
          toastr.error('No se registro la compra, error en servidor!');
        }
      })["catch"](function (error) {
        console.error(error.response.data);
      });
    },
    abrirModalDetalleProducto: function abrirModalDetalleProducto() {
      $('#OtrosGastosOrdenTrabajo').modal('show');
    },
    agregarDetallefacturacion: function agregarDetallefacturacion(data) {
      this.detallefacturacion.push(JSON.parse(JSON.stringify(data)));
      this.detalle_facturacion = this.detalle_facturacion;
    },
    removeItemDetalleFacturacion: function removeItemDetalleFacturacion(index) {
      this.detallefacturacion.splice(index, 1);
      toastr.info('Producto eliminado de la Compra!');
    }
  },
  created: function created() {
    var _this = this;

    Bus.$on("DetalleFacturacion", function (data) {
      _this.agregarDetallefacturacion(JSON.parse(JSON.stringify(data)));
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrearOtrosGastosComponent.vue?vue&type=template&id=9044d1ce&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CrearOtrosGastosComponent.vue?vue&type=template&id=9044d1ce& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "form",
        {
          attrs: { enctype: "multipart/form-data" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.storeoperacion()
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
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
                    [_vm._v("Agregar Item\n                    ")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "table-responsive",
                  staticStyle: { "padding-top": "10px" }
                },
                [
                  _c("table", { staticClass: "table table-bordered" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.detallefacturacion, function(item, index) {
                        return _c("tr", { key: index }, [
                          _c("th", { attrs: { scope: "row" } }, [
                            _vm._v(_vm._s(index + 1))
                          ]),
                          _vm._v(" "),
                          _c("td", {
                            domProps: { textContent: _vm._s(item.gasts) }
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
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(1)
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("crear-otros-gastos-detalle-component")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Gasto Operativo")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Monto")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Opciones")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-4" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-4", attrs: { align: "center" } }, [
        _c(
          "button",
          { staticClass: "btn btn-dark btn-block", attrs: { type: "submit" } },
          [_vm._v("\n                                        GUARDAR")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-4" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/CrearOtrosGastosComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/CrearOtrosGastosComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CrearOtrosGastosComponent_vue_vue_type_template_id_9044d1ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrearOtrosGastosComponent.vue?vue&type=template&id=9044d1ce& */ "./resources/js/components/CrearOtrosGastosComponent.vue?vue&type=template&id=9044d1ce&");
/* harmony import */ var _CrearOtrosGastosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CrearOtrosGastosComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/CrearOtrosGastosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CrearOtrosGastosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CrearOtrosGastosComponent_vue_vue_type_template_id_9044d1ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CrearOtrosGastosComponent_vue_vue_type_template_id_9044d1ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CrearOtrosGastosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CrearOtrosGastosComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/CrearOtrosGastosComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CrearOtrosGastosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CrearOtrosGastosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrearOtrosGastosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CrearOtrosGastosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CrearOtrosGastosComponent.vue?vue&type=template&id=9044d1ce&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/CrearOtrosGastosComponent.vue?vue&type=template&id=9044d1ce& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CrearOtrosGastosComponent_vue_vue_type_template_id_9044d1ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CrearOtrosGastosComponent.vue?vue&type=template&id=9044d1ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CrearOtrosGastosComponent.vue?vue&type=template&id=9044d1ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CrearOtrosGastosComponent_vue_vue_type_template_id_9044d1ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CrearOtrosGastosComponent_vue_vue_type_template_id_9044d1ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);