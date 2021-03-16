(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Travel.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Travel.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Travel',
  data: function data() {
    return {
      departure_airport_code: '',
      passport_number: ''
    };
  },
  methods: {
    submitTravelForm: function submitTravelForm() {
      var departure_airport_code = this.departure_airport_code,
          passport_number = this.passport_number;
      this.$inertia.post(this.$route.relativePath('client.profile.update.travel'), {
        departure_airport_code: departure_airport_code,
        passport_number: passport_number
      });
    },
    assignDefault: function assignDefault() {
      this.departure_airport_code = this.$page.user.departure_airport_code || '';
      this.passport_number = this.$page.user.passport_number || '';
    }
  },
  mounted: function mounted() {
    this.assignDefault();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Travel.vue?vue&type=template&id=7feec849&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Travel.vue?vue&type=template&id=7feec849& ***!
  \************************************************************************************************************************************************************************************************************/
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
        attrs: { id: "travel_new" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitTravelForm($event)
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
              label: "Depature Airport Code",
              error: _vm.$page.errors.departure_airport_code || "",
              form: "travel_new"
            },
            model: {
              value: _vm.departure_airport_code,
              callback: function($$v) {
                _vm.departure_airport_code = $$v
              },
              expression: "departure_airport_code"
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
              label: "Passport Number",
              error: _vm.$page.errors.passport_number || "",
              form: "travel_new"
            },
            model: {
              value: _vm.passport_number,
              callback: function($$v) {
                _vm.passport_number = $$v
              },
              expression: "passport_number"
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
            form: "travel_new",
            type: "submit",
            color: "yellow",
            fontColor: "text-black",
            width: "w-full"
          }
        },
        [_vm._v("Update Travel")]
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
      _c("h3", { staticClass: "text-lg font-bold" }, [_vm._v("Travel")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-sm" }, [
        _vm._v("Travel and flight information")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Profile/Travel.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Profile/Travel.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Travel_vue_vue_type_template_id_7feec849___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Travel.vue?vue&type=template&id=7feec849& */ "./resources/js/Pages/Profile/Travel.vue?vue&type=template&id=7feec849&");
/* harmony import */ var _Travel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Travel.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/Travel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Travel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Travel_vue_vue_type_template_id_7feec849___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Travel_vue_vue_type_template_id_7feec849___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/Travel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/Travel.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Travel.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Travel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Travel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Travel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Travel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/Travel.vue?vue&type=template&id=7feec849&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Travel.vue?vue&type=template&id=7feec849& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Travel_vue_vue_type_template_id_7feec849___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Travel.vue?vue&type=template&id=7feec849& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Travel.vue?vue&type=template&id=7feec849&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Travel_vue_vue_type_template_id_7feec849___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Travel_vue_vue_type_template_id_7feec849___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);