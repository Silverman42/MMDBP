(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/UserInterface.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings/UserInterface.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'UserInterface',
  data: function data() {
    return {
      color_scheme: this.$page.auth.settings.color_scheme,
      auth_logo: '',
      dashboard_logo: ''
    };
  },
  methods: {
    setFileInput: function setFileInput(event, fileType) {
      this[fileType] = event;
    },
    updateUserInterface: function updateUserInterface() {
      var form = new FormData();
      form.append('color_scheme', this.color_scheme);

      if (this.auth_logo !== "") {
        form.append('auth_logo', this.auth_logo);
      }

      if (this.dashboard_logo !== "") {
        form.append('dashboard_logo', this.dashboard_logo);
      }

      this.$inertia.post(this.$route.relativePath('settings.user_interface'), form);
    }
  },
  updated: function updated() {
    if (this.$page.auth.alert_type === 'success') {
      setTimeout(function () {
        return window.location.reload();
      }, 800);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/UserInterface.vue?vue&type=template&id=c90c3eea&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings/UserInterface.vue?vue&type=template&id=c90c3eea& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "pb-8 md:w-7/12 mt-8" }, [
    _c("form", {
      attrs: { id: "user_interface_form" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.updateUserInterface($event)
        }
      }
    }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-12 reveal-left", staticStyle: { "--delay": "0.1s" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "reveal-up", staticStyle: { "--delay": "0.5s" } },
          [
            _c(
              "select-input",
              {
                attrs: {
                  form: "user_interface_form",
                  value: _vm.color_scheme,
                  label: "Choose a color scheme",
                  error: _vm.$page.errors.color_scheme
                },
                model: {
                  value: _vm.color_scheme,
                  callback: function($$v) {
                    _vm.color_scheme = $$v
                  },
                  expression: "color_scheme"
                }
              },
              _vm._l(_vm.$page.color_schemes, function(color, index) {
                return _c(
                  "option",
                  {
                    key: index,
                    staticClass: "capitalize",
                    domProps: { value: color }
                  },
                  [_vm._v(_vm._s(color))]
                )
              }),
              0
            )
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-12 reveal-left", staticStyle: { "--delay": "0.3s" } },
      [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "reveal-up", staticStyle: { "--delay": "1.3s" } },
          [
            _c("file-input", {
              attrs: {
                form: "user_interface_form",
                error: _vm.$page.errors.dashboard_logo || "",
                label:
                  "File should be 500kb max and should be one of the following formats : JPG, PNG, JPEG"
              },
              on: {
                input: function($event) {
                  return _vm.setFileInput($event, "dashboard_logo")
                }
              }
            })
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-12 reveal-left", staticStyle: { "--delay": "0.5s" } },
      [
        _vm._m(2),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "reveal-up", staticStyle: { "--delay": "2.1s" } },
          [
            _c("file-input", {
              attrs: {
                form: "user_interface_form",
                error: _vm.$page.errors.auth_logo || "",
                label:
                  "File should be 500kb max and should be one of the following formats : JPG, PNG, JPEG"
              },
              on: {
                input: function($event) {
                  return _vm.setFileInput($event, "auth_logo")
                }
              }
            })
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "flex justify-end reveal-up",
        staticStyle: { "--delay": "2.3s" }
      },
      [
        _c(
          "primary-btn",
          {
            attrs: {
              form: "user_interface_form",
              width: "w-full md:w-auto",
              type: "submit"
            }
          },
          [_vm._v("Update User Interface")]
        )
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
    return _c("div", { staticClass: "mb-5" }, [
      _c(
        "h2",
        {
          staticClass: "text-lg font-bold mb-3 reveal-up",
          staticStyle: { "--delay": "0.1s" }
        },
        [_vm._v("\n                Color Scheme Settings\n            ")]
      ),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "reveal-up", staticStyle: { "--delay": "0.3s" } },
        [
          _vm._v(
            "Changing the color scheme of the software interface to suite your company branding"
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-5" }, [
      _c(
        "h2",
        {
          staticClass: "text-lg font-bold mb-3 reveal-up",
          staticStyle: { "--delay": "0.9s" }
        },
        [_vm._v("\n                Dashboard Logo\n            ")]
      ),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "reveal-up", staticStyle: { "--delay": "1.1s" } },
        [
          _vm._v(
            "Please use an image type with a high contrast color for your dashboard logo as it will be used on a low contrast background"
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-5" }, [
      _c(
        "h2",
        {
          staticClass: "text-lg font-bold reveal-up mb-3",
          staticStyle: { "--delay": "1.7s" }
        },
        [_vm._v("\n                Authentication Logo\n            ")]
      ),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "reveal-up", staticStyle: { "--delay": "1.9s" } },
        [
          _vm._v(
            "Please use an image type with a low contrast color for your authentication page logo as it will be used in all authentication pages which have a high contrast background"
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Settings/UserInterface.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Settings/UserInterface.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserInterface_vue_vue_type_template_id_c90c3eea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserInterface.vue?vue&type=template&id=c90c3eea& */ "./resources/js/Pages/Settings/UserInterface.vue?vue&type=template&id=c90c3eea&");
/* harmony import */ var _UserInterface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserInterface.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Settings/UserInterface.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserInterface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserInterface_vue_vue_type_template_id_c90c3eea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserInterface_vue_vue_type_template_id_c90c3eea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Settings/UserInterface.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Settings/UserInterface.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Settings/UserInterface.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInterface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserInterface.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/UserInterface.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInterface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Settings/UserInterface.vue?vue&type=template&id=c90c3eea&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Settings/UserInterface.vue?vue&type=template&id=c90c3eea& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInterface_vue_vue_type_template_id_c90c3eea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserInterface.vue?vue&type=template&id=c90c3eea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/UserInterface.vue?vue&type=template&id=c90c3eea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInterface_vue_vue_type_template_id_c90c3eea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInterface_vue_vue_type_template_id_c90c3eea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);