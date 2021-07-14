(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/register.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_jwt_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/jwt.ts */ "./resources/js/Services/jwt.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      name: '',
      email: '',
      website: '',
      password: ''
    };
  },
  methods: {
    click: function click() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var form, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Object.keys(_this.$refs).map(function (key) {
                  _this.$refs[key].children[1].classList.remove('is-valid');

                  _this.$refs[key].children[1].classList.remove('is-invalid');
                });
                _context.prev = 1;
                _context.next = 4;
                return _this.axios.post('api/register', {
                  name: _this.name,
                  email: _this.email,
                  website: _this.website,
                  password: _this.password
                });

              case 4:
                form = _context.sent;
                _Services_jwt_ts__WEBPACK_IMPORTED_MODULE_1__.default.login(form.data.data);

                _this.$router.push({
                  name: 'home'
                });

                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                data = _context.t0.response.data;
                Object.keys(_this.$refs).map(function (key) {
                  if (Object.keys(data.errors).includes(key)) {
                    _this.$refs[key].children[1].classList.remove('is-valid');

                    _this.$refs[key].children[1].classList.add('is-invalid');

                    _this.$refs[key].children[2].innerHTML = data.errors[key];
                  } else {
                    _this.$refs[key].children[1].classList.add('is-valid');

                    _this.$refs[key].children[1].classList.remove('is-invalid');
                  }

                  ;
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }))();
    }
  },
  created: function created() {
    if (_Services_jwt_ts__WEBPACK_IMPORTED_MODULE_1__.default.checkIfUserExists()) this.$router.push({
      name: 'home'
    });
  }
});

/***/ }),

/***/ "./resources/js/components/pages/register.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/register.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _register_vue_vue_type_template_id_5933d499___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=5933d499& */ "./resources/js/components/pages/register.vue?vue&type=template&id=5933d499&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _register_vue_vue_type_template_id_5933d499___WEBPACK_IMPORTED_MODULE_0__.render,
  _register_vue_vue_type_template_id_5933d499___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/register.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/register.vue?vue&type=template&id=5933d499&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/register.vue?vue&type=template&id=5933d499& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_5933d499___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_5933d499___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_5933d499___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=template&id=5933d499& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/register.vue?vue&type=template&id=5933d499&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/register.vue?vue&type=template&id=5933d499&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/register.vue?vue&type=template&id=5933d499& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container mt-5 row justify-content-md-center" },
    [
      _c("div", { staticClass: "col-6 text-center" }, [
        _c("div", { ref: "name", staticClass: "input-group mb-3" }, [
          _c(
            "span",
            {
              staticClass: "input-group-text",
              staticStyle: { "min-width": "100px" }
            },
            [_vm._v("Name")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.name,
                expression: "name"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              required: "",
              autocomplete: "name",
              autofocus: ""
            },
            domProps: { value: _vm.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.name = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "invalid-feedback" })
        ]),
        _vm._v(" "),
        _c("div", { ref: "email", staticClass: "input-group mb-3" }, [
          _c(
            "span",
            {
              staticClass: "input-group-text",
              staticStyle: { "min-width": "100px" }
            },
            [_vm._v("Email")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.email,
                expression: "email"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "email",
              required: "",
              autocomplete: "email",
              autofocus: ""
            },
            domProps: { value: _vm.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.email = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "invalid-feedback" })
        ]),
        _vm._v(" "),
        _c("div", { ref: "website", staticClass: "input-group mb-3" }, [
          _c(
            "span",
            {
              staticClass: "input-group-text",
              staticStyle: { "min-width": "100px" }
            },
            [_vm._v("Website")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.website,
                expression: "website"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              required: "",
              autocomplete: "website",
              autofocus: ""
            },
            domProps: { value: _vm.website },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.website = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "invalid-feedback" })
        ]),
        _vm._v(" "),
        _c("div", { ref: "password", staticClass: "input-group mb-3" }, [
          _c(
            "span",
            {
              staticClass: "input-group-text",
              staticStyle: { "min-width": "100px" }
            },
            [_vm._v("Password")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.password,
                expression: "password"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "password",
              required: "",
              autocomplete: "password",
              autofocus: ""
            },
            domProps: { value: _vm.password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.password = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "invalid-feedback" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row mb-0" }, [
          _c("div", { staticClass: "col-md-8 offset-md-4" }, [
            _c(
              "div",
              { staticClass: "btn btn-primary", on: { click: _vm.click } },
              [_vm._v(" register ")]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);