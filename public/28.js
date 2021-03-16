(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/General.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings/General.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'General',
  data: function data() {
    return {
      general: {
        app_name: this.$page.auth.settings.app_name,
        app_email: this.$page.auth.settings.app_email,
        app_url: this.$page.auth.settings.app_url,
        color_scheme: this.$page.auth.settings.color_scheme,
        disable_client_profile_modification: this.$page.auth.settings.disable_client_profile_modification == 1 ? true : false,
        disable_client_registration: this.$page.auth.settings.disable_client_registration == 1 ? true : false,
        recieve_client_emails: this.$page.auth.settings.recieve_client_emails == 1 ? true : false,
        naira_charge: this.$page.auth.settings.naira_charge || 0,
        dollar_charge: this.$page.auth.settings.dollar_charge || 0
      }
    };
  },
  methods: {
    submitGeneralSetting: function submitGeneralSetting() {
      this.$inertia.put(this.$route.relativePath('settings.update'), this.general);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/General.vue?vue&type=template&id=3aab1e85&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings/General.vue?vue&type=template&id=3aab1e85& ***!
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
    {
      staticClass: "pb-8 md:w-7/12 mt-8 reveal-left",
      staticStyle: { "--delay": "0.1s" }
    },
    [
      _c("form", {
        attrs: { id: "general_settings_form" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitGeneralSetting($event)
          }
        }
      }),
      _vm._v(" "),
      _c("h2", { staticClass: "text-lg font-bold mb-8" }, [
        _vm._v("\n        General Settings\n    ")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "0.1s" } },
        [
          _c("text-input", {
            attrs: {
              error: _vm.$page.errors.app_name || "",
              form: "general_settings_form",
              label: "Application Name"
            },
            model: {
              value: _vm.general.app_name,
              callback: function($$v) {
                _vm.$set(_vm.general, "app_name", $$v)
              },
              expression: "general.app_name"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "0.3s" } },
        [
          _c("text-input", {
            attrs: {
              error: _vm.$page.errors.app_email || "",
              form: "general_settings_form",
              label: "Application Email"
            },
            model: {
              value: _vm.general.app_email,
              callback: function($$v) {
                _vm.$set(_vm.general, "app_email", $$v)
              },
              expression: "general.app_email"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "0.5s" } },
        [
          _c("text-input", {
            attrs: {
              error: _vm.$page.errors.app_url || "",
              form: "general_settings_form",
              label: "Application URL"
            },
            model: {
              value: _vm.general.app_url,
              callback: function($$v) {
                _vm.$set(_vm.general, "app_url", $$v)
              },
              expression: "general.app_url"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "0.5s" } },
        [
          _c("text-input", {
            attrs: {
              type: "number",
              error: _vm.$page.errors.naira_charge || "",
              form: "general_settings_form",
              label: "Payment Fee (Naira)"
            },
            model: {
              value: _vm.general.naira_charge,
              callback: function($$v) {
                _vm.$set(_vm.general, "naira_charge", $$v)
              },
              expression: "general.naira_charge"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "0.5s" } },
        [
          _c("text-input", {
            attrs: {
              type: "number",
              error: _vm.$page.errors.dollar_charge || "",
              form: "general_settings_form",
              label: "Payment Fee (Dollars)"
            },
            model: {
              value: _vm.general.dollar_charge,
              callback: function($$v) {
                _vm.$set(_vm.general, "dollar_charge", $$v)
              },
              expression: "general.dollar_charge"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "1s" } },
        [
          _c("switch-input", {
            attrs: {
              error: _vm.$page.errors.disable_client_profile_modification || "",
              label: "Disable Client Profile Modification"
            },
            model: {
              value: _vm.general.disable_client_profile_modification,
              callback: function($$v) {
                _vm.$set(
                  _vm.general,
                  "disable_client_profile_modification",
                  $$v
                )
              },
              expression: "general.disable_client_profile_modification"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "1.3s" } },
        [
          _c("switch-input", {
            attrs: {
              error: _vm.$page.errors.disable_client_registration || "",
              label: "Disable Client Modification"
            },
            model: {
              value: _vm.general.disable_client_registration,
              callback: function($$v) {
                _vm.$set(_vm.general, "disable_client_registration", $$v)
              },
              expression: "general.disable_client_registration"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "1.5s" } },
        [
          _c("switch-input", {
            attrs: {
              error: _vm.$page.errors.recieve_client_emails || "",
              label: "Recieve Client Emails"
            },
            model: {
              value: _vm.general.recieve_client_emails,
              callback: function($$v) {
                _vm.$set(_vm.general, "recieve_client_emails", $$v)
              },
              expression: "general.recieve_client_emails"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex justify-end reveal-up",
          staticStyle: { "--delay": "1.7s" }
        },
        [
          _c(
            "primary-btn",
            {
              attrs: {
                form: "general_settings_form",
                width: "w-full md:w-auto",
                type: "submit"
              }
            },
            [_vm._v("Save Changes")]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Settings/General.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Settings/General.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _General_vue_vue_type_template_id_3aab1e85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General.vue?vue&type=template&id=3aab1e85& */ "./resources/js/Pages/Settings/General.vue?vue&type=template&id=3aab1e85&");
/* harmony import */ var _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./General.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Settings/General.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _General_vue_vue_type_template_id_3aab1e85___WEBPACK_IMPORTED_MODULE_0__["render"],
  _General_vue_vue_type_template_id_3aab1e85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Settings/General.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Settings/General.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Settings/General.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./General.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/General.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Settings/General.vue?vue&type=template&id=3aab1e85&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Settings/General.vue?vue&type=template&id=3aab1e85& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_3aab1e85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./General.vue?vue&type=template&id=3aab1e85& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/General.vue?vue&type=template&id=3aab1e85&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_3aab1e85___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_3aab1e85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);