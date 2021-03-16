(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Tabs/Identity.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Tabs/Identity.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
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
  mixins: [_Mixins__WEBPACK_IMPORTED_MODULE_0__["Tabs"]]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Tabs/Identity.vue?vue&type=template&id=13e93020&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Tabs/Identity.vue?vue&type=template&id=13e93020& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                color: "yellow",
                disabled: _vm.hasCompleted,
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
            _vm._v("Name")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(
              _vm._s(_vm.user.first_name) + " " + _vm._s(_vm.user.last_name)
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Nationality")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(_vm._s(_vm.user.nationality || "No Nationality"))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Age")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(_vm._s(_vm.user.age || "No age"))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Place of Birth")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(_vm._s(_vm.user.place_of_birth || "No place of birth"))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Signature")
          ]),
          _vm._v(" "),
          _c("img", {
            staticClass: "w-full h-auto inline-block mt-1",
            attrs: {
              src: _vm.user.signature || "",
              alt: _vm.user.signature ? "signature image" : "No signature"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Address")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(_vm._s(_vm.user.address || "No address"))
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

/***/ "./resources/js/Pages/Profile/Tabs/Identity.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Profile/Tabs/Identity.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Identity_vue_vue_type_template_id_13e93020___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Identity.vue?vue&type=template&id=13e93020& */ "./resources/js/Pages/Profile/Tabs/Identity.vue?vue&type=template&id=13e93020&");
/* harmony import */ var _Identity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Identity.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/Tabs/Identity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Identity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Identity_vue_vue_type_template_id_13e93020___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Identity_vue_vue_type_template_id_13e93020___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/Tabs/Identity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/Tabs/Identity.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Tabs/Identity.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Identity.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Tabs/Identity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/Tabs/Identity.vue?vue&type=template&id=13e93020&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Tabs/Identity.vue?vue&type=template&id=13e93020& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Identity_vue_vue_type_template_id_13e93020___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Identity.vue?vue&type=template&id=13e93020& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Tabs/Identity.vue?vue&type=template&id=13e93020&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Identity_vue_vue_type_template_id_13e93020___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Identity_vue_vue_type_template_id_13e93020___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ })

}]);