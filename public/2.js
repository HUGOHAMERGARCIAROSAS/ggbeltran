(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CombustibleComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CombustibleComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
var url = window.location.href;
var lastParam = url.split("/").slice(-1)[0];

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      combustible: [],
      documento: '',
      selectLugar: '',
      lugares: [],
      operacion: {
        orden_trabajo_id: lastParam,
        lugar_id: '',
        lugar: '',
        galones: '',
        kilometros: '',
        precio: '',
        nro_ticket: '',
        ticket: ''
      }
    };
  },
  methods: {
    addProduct: function addProduct() {
      var _this = this;

      var url = '/store-combustible'; //Ruta que hemos creado para enviar una tarea y guardarla

      console.log(this.operacion);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, this.operacion).then(function (_ref) {
        var data = _ref.data;

        if (data) {
          _this.limpiarData();

          _this.getCombustible();
        }

        if (!data) {
          toastr.error('No se registro la compra, error en servidor!');
        }
      })["catch"](function (error) {
        console.error(error.response.data);
      });
    },
    limpiarData: function limpiarData() {
      self = this;
      self.operacion.galones = '';
      self.operacion.lugar = '';
      self.operacion.kilometros = '';
      self.operacion.precio = '';
      self.operacion.nro_ticket = '';
      self.operacion.ticket = '';
      self.selectLugar = '';
    },
    changeProducto: function changeProducto(event) {
      var _this2 = this;

      var value = this.selectLugar;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/lugares-api-search/' + value).then(function (_ref2) {
        var data = _ref2.data;
        self = _this2;
        self.operacion.lugar_id = data.id;
        self.operacion.lugar = data.nombre;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getProductos: function getProductos() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/lista-lugares-text').then(function (_ref3) {
        var data = _ref3.data;
        _this3.lugares = data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getCombustible: function getCombustible() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/getAbastecimientoCombustible/' + lastParam).then(function (res) {
        _this4.combustible = res.data;
      });
    }
  },
  computed: {},
  created: function created() {
    this.getProductos();
    this.getCombustible();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CombustibleComponent.vue?vue&type=template&id=e26c5c3e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CombustibleComponent.vue?vue&type=template&id=e26c5c3e& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      "form",
      {
        attrs: { enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.addProduct($event)
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4" }, [
            _c("label", [_vm._v("Lugar")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selectLugar,
                    expression: "selectLugar"
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
                      _vm.selectLugar = $event.target.multiple
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
              _vm._l(_vm.lugares, function(item, index) {
                return _c(
                  "option",
                  { key: index, domProps: { value: item.id } },
                  [_vm._v(_vm._s(item.text))]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("label", [_vm._v("Galones")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.operacion.galones,
                  expression: "operacion.galones"
                }
              ],
              staticClass: " form-control",
              attrs: { type: "number" },
              domProps: { value: _vm.operacion.galones },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.operacion, "galones", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("label", [_vm._v("Kilometros")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.operacion.kilometros,
                  expression: "operacion.kilometros"
                }
              ],
              staticClass: " form-control",
              attrs: { type: "number" },
              domProps: { value: _vm.operacion.kilometros },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.operacion, "kilometros", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row", staticStyle: { "padding-top": "20px" } },
          [
            _c("div", { staticClass: "col-md-4" }, [
              _c("label", [_vm._v("Precio")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.operacion.precio,
                    expression: "operacion.precio"
                  }
                ],
                staticClass: " form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.operacion.precio },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.operacion, "precio", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("label", [_vm._v("N° Ticket")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.operacion.nro_ticket,
                    expression: "operacion.nro_ticket"
                  }
                ],
                staticClass: " form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.operacion.nro_ticket },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.operacion, "nro_ticket", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]
        ),
        _vm._v(" "),
        _vm._m(1)
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "table-responsive",
        staticStyle: { "padding-top": "20px" }
      },
      [
        _c(
          "table",
          {
            staticClass: "table table-bordered",
            attrs: { id: "tableAbastecimiento" }
          },
          [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "tbody",
              { attrs: { id: "bodytableAbastecimiento" } },
              _vm._l(_vm.combustible, function(item, index) {
                return _c("tr", { key: index }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.nombre))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.galones))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.kilometros))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.precio))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.nro_ticket))]),
                  _vm._v(" "),
                  _vm._m(3, true)
                ])
              }),
              0
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("label", [_vm._v("Ticket")]),
      _vm._v(" "),
      _c("input", { staticClass: " form-control", attrs: { type: "file" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: " align-center", staticStyle: { "padding-top": "20px" } },
      [
        _c(
          "button",
          { staticClass: "btn btn-sm btn-primary", attrs: { type: "submit" } },
          [_vm._v("AGREGAR")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Lugar")]),
        _vm._v(" "),
        _c("th", [_vm._v("Galones")]),
        _vm._v(" "),
        _c("th", [_vm._v("Kilometros")]),
        _vm._v(" "),
        _c("th", [_vm._v("Precio")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nro Ticket")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ticket")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("a", { staticClass: "btn btn-primary" }, [
        _c("i", { staticClass: " fa fa-download" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/CombustibleComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/CombustibleComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CombustibleComponent_vue_vue_type_template_id_e26c5c3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CombustibleComponent.vue?vue&type=template&id=e26c5c3e& */ "./resources/js/components/CombustibleComponent.vue?vue&type=template&id=e26c5c3e&");
/* harmony import */ var _CombustibleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CombustibleComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/CombustibleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CombustibleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CombustibleComponent_vue_vue_type_template_id_e26c5c3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CombustibleComponent_vue_vue_type_template_id_e26c5c3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CombustibleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CombustibleComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/CombustibleComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CombustibleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CombustibleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CombustibleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CombustibleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CombustibleComponent.vue?vue&type=template&id=e26c5c3e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/CombustibleComponent.vue?vue&type=template&id=e26c5c3e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CombustibleComponent_vue_vue_type_template_id_e26c5c3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CombustibleComponent.vue?vue&type=template&id=e26c5c3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CombustibleComponent.vue?vue&type=template&id=e26c5c3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CombustibleComponent_vue_vue_type_template_id_e26c5c3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CombustibleComponent_vue_vue_type_template_id_e26c5c3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);