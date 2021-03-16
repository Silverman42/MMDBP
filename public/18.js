(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Tabs/Travel.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Tabs/Travel.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mixins */ "./resources/js/Pages/Profile/Tabs/Mixins.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_Mixins__WEBPACK_IMPORTED_MODULE_0__["Tabs"]]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Tabs/Travel.vue?vue&type=template&id=aa51f268&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Tabs/Travel.vue?vue&type=template&id=aa51f268& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "my-5 flex justify-between" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "primary-btn",
            {
              attrs: {
                disabled: _vm.hasCompleted,
                color: "yellow",
                fontColor: "text-black"
              },
              on: { click: _vm.updateProfile }
            },
            [_vm._v("Edit")]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" },
      [
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Departure Airport Code")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(_vm._s(_vm.user.departure_airport_code || "none") + " ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Passport Number")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "uppercase" }, [
            _vm._v(_vm._s(_vm.user.passport_number || "------"))
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mr-2" }, [
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

/***/ "./resources/js/Pages/Profile/Tabs/Mixins.js":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Profile/Tabs/Mixins.js ***!
  \***************************************************/
/*! exports provided: Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
var Tabs = {
  props: {
    user: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    hasCompleted: {
      "default": false,
      type: Boolean
    }
  },
  methods: {
    updateProfile: function updateProfile() {
      return this.$emit('updateProfile');
    }
  }
};

/***/ }),

/***/ "./resources/js/Pages/Profile/Tabs/Travel.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Profile/Tabs/Travel.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Travel_vue_vue_type_template_id_aa51f268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Travel.vue?vue&type=template&id=aa51f268& */ "./resources/js/Pages/Profile/Tabs/Travel.vue?vue&type=template&id=aa51f268&");
/* harmony import */ var _Travel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Travel.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/Tabs/Travel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Travel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Travel_vue_vue_type_template_id_aa51f268___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Travel_vue_vue_type_template_id_aa51f268___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/Tabs/Travel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/Tabs/Travel.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Tabs/Travel.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Travel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Travel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Tabs/Travel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Travel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/Tabs/Travel.vue?vue&type=template&id=aa51f268&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Tabs/Travel.vue?vue&type=template&id=aa51f268& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Travel_vue_vue_type_template_id_aa51f268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Travel.vue?vue&type=template&id=aa51f268& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Tabs/Travel.vue?vue&type=template&id=aa51f268&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Travel_vue_vue_type_template_id_aa51f268___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Travel_vue_vue_type_template_id_aa51f268___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);