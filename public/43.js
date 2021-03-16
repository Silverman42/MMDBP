(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Emergency.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Emergency.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Emergency',
  data: function data() {
    return {
      emergency_name: '',
      emergency_relationship: '',
      emergency_phone_number: '',
      emergency_email: ''
    };
  },
  methods: {
    assignDefaults: function assignDefaults() {
      this.emergency_name = this.$page.user.emergency_name || '';
      this.emergency_relationship = this.$page.user.emergency_relationship || '';
      this.emergency_email = this.$page.user.emergency_email || '';
      this.emergency_phone_number = this.$page.user.emergency_phone_number || '';
    },
    submitForm: function submitForm() {
      var emergency_name = this.emergency_name,
          emergency_relationship = this.emergency_relationship,
          emergency_email = this.emergency_email,
          emergency_phone_number = this.emergency_phone_number;
      this.$inertia.post(this.$route.relativePath('client.profile.update.emergency'), {
        emergency_name: emergency_name,
        emergency_relationship: emergency_relationship,
        emergency_email: emergency_email,
        emergency_phone_number: emergency_phone_number
      });
    }
  },
  mounted: function mounted() {
    this.assignDefaults();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Emergency.vue?vue&type=template&id=794958b2&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Emergency.vue?vue&type=template&id=794958b2& ***!
  \***************************************************************************************************************************************************************************************************************/
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
        attrs: { action: "", id: "emergency" },
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
              label: "Name of Emergency Contact",
              error: _vm.$page.errors.emergency_name || "",
              form: "emergency"
            },
            model: {
              value: _vm.emergency_name,
              callback: function($$v) {
                _vm.emergency_name = $$v
              },
              expression: "emergency_name"
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
              label: "Emergency Phone Number",
              error: _vm.$page.errors.emergency_phone_number || "",
              form: "emergency"
            },
            model: {
              value: _vm.emergency_phone_number,
              callback: function($$v) {
                _vm.emergency_phone_number = $$v
              },
              expression: "emergency_phone_number"
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
              label: "Relationship with Emergency Contact",
              error: _vm.$page.errors.emergency_relationship || "",
              form: "emergency"
            },
            model: {
              value: _vm.emergency_relationship,
              callback: function($$v) {
                _vm.emergency_relationship = $$v
              },
              expression: "emergency_relationship"
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
          _c("text-input", {
            attrs: {
              label: "Emergency Contact Email",
              error: _vm.$page.errors.emergency_email || "",
              form: "emergency"
            },
            model: {
              value: _vm.emergency_email,
              callback: function($$v) {
                _vm.emergency_email = $$v
              },
              expression: "emergency_email"
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
            color: "yellow",
            fontColor: "text-black",
            width: "w-full",
            form: "emergency"
          }
        },
        [_vm._v("Update Emergency")]
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
      _c("h3", { staticClass: "text-lg font-bold" }, [_vm._v("Emergency")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-sm" }, [
        _vm._v("Information about your emergency contact")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Profile/Emergency.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Profile/Emergency.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emergency_vue_vue_type_template_id_794958b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emergency.vue?vue&type=template&id=794958b2& */ "./resources/js/Pages/Profile/Emergency.vue?vue&type=template&id=794958b2&");
/* harmony import */ var _Emergency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emergency.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/Emergency.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Emergency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Emergency_vue_vue_type_template_id_794958b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Emergency_vue_vue_type_template_id_794958b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/Emergency.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/Emergency.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Emergency.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Emergency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Emergency.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Emergency.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Emergency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/Emergency.vue?vue&type=template&id=794958b2&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Emergency.vue?vue&type=template&id=794958b2& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emergency_vue_vue_type_template_id_794958b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Emergency.vue?vue&type=template&id=794958b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Emergency.vue?vue&type=template&id=794958b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emergency_vue_vue_type_template_id_794958b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emergency_vue_vue_type_template_id_794958b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);