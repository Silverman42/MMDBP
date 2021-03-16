(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Identity.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Identity.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
//
//
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
  name: 'Identity',
  data: function data() {
    return {
      age: '',
      address: '',
      nationality: '',
      firstName: '',
      lastName: '',
      placeOfBirth: '',
      dateOfBirth: '',
      signature: '',
      avatar: '',
      countries: []
    };
  },
  methods: {
    changeAvatar: function changeAvatar(file) {
      this.avatar = file;
    },
    changeDateOfBirth: function changeDateOfBirth(value) {
      this.dateOfBirth = value;
    },
    changeSignature: function changeSignature(file) {
      this.signature = file;
    },
    getCountries: function getCountries() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../../../plugins/countries'"); e.code = 'MODULE_NOT_FOUND'; throw e; });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    assignDefaults: function assignDefaults() {
      this.firstName = this.$page.user.first_name || '';
      this.lastName = this.$page.user.last_name || '';
      this.age = this.$page.user.age || '';
      this.placeOfBirth = this.$page.user.placeOfBirth || '';
      this.nationality = this.$page.user.nationality || '';
      this.dateOfBirth = this.$page.user.dateOfBirth || '';
      this.address = this.$page.user.address || '';
    },
    submitForm: function submitForm() {
      var form = new FormData();
      form.append('first_name', this.firstName);
      form.append('last_name', this.lastName);
      form.append('age', this.age);
      form.append('place_of_birth', this.placeOfBirth);
      form.append('nationality', this.nationality);
      form.append('signature', this.signature);
      form.append('avatar', this.avatar);
      form.append('date_of_birth', this.dateOfBirth);
      form.append('address', this.address);
      this.$inertia.post(this.$route.relativePath('client.profile.update.identity'), form);
    }
  },
  mounted: function mounted() {
    var vm = this;
    this.getCountries().then(function (country) {
      vm.countries = country["default"];
    });
    this.assignDefaults();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Identity.vue?vue&type=template&id=378e83a6&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Identity.vue?vue&type=template&id=378e83a6& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c("form", {
        attrs: { action: "", id: "identity" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitForm($event)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-3" },
        [
          _c("text-input", {
            attrs: {
              label: "First Name",
              error: _vm.$page.errors.first_name,
              form: "identity"
            },
            model: {
              value: _vm.firstName,
              callback: function($$v) {
                _vm.firstName = $$v
              },
              expression: "firstName"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-3" },
        [
          _c("text-input", {
            attrs: {
              label: "Last Name",
              error: _vm.$page.errors.last_name,
              form: "identity"
            },
            model: {
              value: _vm.lastName,
              callback: function($$v) {
                _vm.lastName = $$v
              },
              expression: "lastName"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-3" },
        [
          _c(
            "select-input",
            {
              attrs: {
                label: "Nationality",
                error: _vm.$page.errors.nationality,
                value: _vm.nationality,
                form: "identity"
              },
              model: {
                value: _vm.nationality,
                callback: function($$v) {
                  _vm.nationality = $$v
                },
                expression: "nationality"
              }
            },
            _vm._l(_vm.countries, function(country, index) {
              return _c(
                "option",
                { key: index, domProps: { value: country.name } },
                [_vm._v("\n                " + _vm._s(country.name))]
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-3" },
        [
          _c("textarea-input", {
            attrs: {
              label: "Address",
              error: _vm.$page.errors.address,
              form: "identity"
            },
            model: {
              value: _vm.address,
              callback: function($$v) {
                _vm.address = $$v
              },
              expression: "address"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-3" },
        [
          _c("text-input", {
            attrs: {
              type: "number",
              label: "Age",
              error: _vm.$page.errors.age,
              form: "identity"
            },
            model: {
              value: _vm.age,
              callback: function($$v) {
                _vm.age = $$v
              },
              expression: "age"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-3" },
        [
          _c("text-input", {
            attrs: {
              type: "date",
              label: "Date of Birth",
              error: _vm.$page.errors.date_of_birth,
              form: "identity"
            },
            on: {
              input: function($event) {
                return _vm.changeDateOfBirth($event)
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-3" },
        [
          _c("text-input", {
            attrs: {
              label: "Place of Birth",
              error: _vm.$page.errors.place_of_birth,
              form: "identity"
            },
            model: {
              value: _vm.placeOfBirth,
              callback: function($$v) {
                _vm.placeOfBirth = $$v
              },
              expression: "placeOfBirth"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-3" },
        [
          _c("file-input", {
            attrs: {
              form: "identity",
              error: _vm.$page.errors.avatar || "",
              label: "Upload your Profile Picture"
            },
            on: {
              input: function($event) {
                return _vm.changeAvatar($event)
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-10" },
        [
          _c("file-input", {
            attrs: {
              form: "identity",
              error: _vm.$page.errors.signature || "",
              label: "Upload an Image of your signtaure"
            },
            on: {
              input: function($event) {
                return _vm.changeSignature($event)
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "primary-btn",
        {
          attrs: {
            type: "submit",
            form: "identity",
            color: "yellow",
            fontColor: "text-black",
            width: "w-full"
          }
        },
        [_vm._v("Update\n        Identity ")]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-5" }, [
      _c("h3", { staticClass: "text-lg font-bold" }, [_vm._v("Identity")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-sm" }, [
        _vm._v("Information used to identify contestant")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Profile/Identity.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Profile/Identity.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Identity_vue_vue_type_template_id_378e83a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Identity.vue?vue&type=template&id=378e83a6& */ "./resources/js/Pages/Profile/Identity.vue?vue&type=template&id=378e83a6&");
/* harmony import */ var _Identity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Identity.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/Identity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Identity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Identity_vue_vue_type_template_id_378e83a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Identity_vue_vue_type_template_id_378e83a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/Identity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/Identity.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Identity.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Identity.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Identity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/Identity.vue?vue&type=template&id=378e83a6&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Identity.vue?vue&type=template&id=378e83a6& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Identity_vue_vue_type_template_id_378e83a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Identity.vue?vue&type=template&id=378e83a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Identity.vue?vue&type=template&id=378e83a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Identity_vue_vue_type_template_id_378e83a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Identity_vue_vue_type_template_id_378e83a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);