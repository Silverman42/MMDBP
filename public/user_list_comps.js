(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user_list_comps"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Client/InvoiceComp.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Client/InvoiceComp.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InvoiceComp',
  props: {
    invoice: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    auth: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  computed: {
    getCurrency: function getCurrency() {
      return this.invoice.currency === 'ngn' ? '₦' : '$';
    },
    paymentWasCompleted: function paymentWasCompleted() {
      return this.invoice.is_completed === 1 ? true : false;
    }
  },
  filters: {
    changeNumberFormat: function changeNumberFormat(number) {
      return new Intl.NumberFormat('en-US').format(number);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Client/InvoiceComp.vue?vue&type=template&id=0198d0e1&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Client/InvoiceComp.vue?vue&type=template&id=0198d0e1& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "flex flex-wrap" }, [
    _c("div", { staticClass: "w-full md:w-6/12 mb-6 md:mb-10 md:pr-2" }, [
      _c("h6", { staticClass: "text-2xl font-bold capitalize" }, [
        _vm._v(_vm._s(_vm.auth.first_name) + " " + _vm._s(_vm.auth.last_name))
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-xs" }, [_vm._v(_vm._s(_vm.invoice.email))])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "w-full md:w-6/12 md:text-right md:mb-10 mb-6 md:pr-2" },
      [
        _c("h6", { staticClass: "uppercase text-xs tracking-widest" }, [
          _vm._v("Amount")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-gray-900 text-3xl" }, [
          _c("sup", { staticClass: "text-xs text-yellow-600" }, [
            _vm._v(_vm._s(_vm.getCurrency) + "\n            ")
          ]),
          _vm._v(_vm._s(_vm._f("changeNumberFormat")(_vm.invoice.amount))),
          _c("sup", { staticClass: "text-xs text-yellow-600" }, [
            _vm._v(" .00")
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "w-full md:w-4/12 mb-6 md:pr-2" }, [
      _c("h6", { staticClass: "uppercase text-xs tracking-widest" }, [
        _vm._v("Payment Status")
      ]),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "inline-block w-auto px-4 py-1 rounded-md",
          class: {
            "bg-green-300": _vm.paymentWasCompleted === true,
            "bg-red-300": _vm.paymentWasCompleted === false
          }
        },
        [
          _vm._v(
            "\n            " +
              _vm._s(_vm.paymentWasCompleted === true ? "Paid" : "Unpaid")
          )
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "w-full md:w-4/12 mb-6 md:pr-2" }, [
      _c("h6", { staticClass: "uppercase text-xs tracking-widest" }, [
        _vm._v("Transaction reference")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-gray-900" }, [
        _vm._v(_vm._s(_vm.invoice.reference_id))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "w-full md:w-4/12 mb-6 md:pr-2" }, [
      _c("h6", { staticClass: "uppercase text-xs tracking-widest" }, [
        _vm._v("Competition")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-gray-900" }, [
        _vm._v("Miss May Day Beauty Pageant "),
        _c("span", { staticClass: "text-yellow-600" }, [
          _vm._v(_vm._s(_vm.invoice.competitions.year))
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "w-full md:w-4/12 mb-6  md:pr-2" }, [
      _c("h6", { staticClass: "uppercase text-xs tracking-widest" }, [
        _vm._v("Date of Payment")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-gray-900" }, [
        _vm._v(_vm._s(_vm.invoice.human_date_of_payment))
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full md:w-4/12 mb-6 md:pr-2" }, [
      _c("h6", { staticClass: "uppercase text-xs tracking-widest" }, [
        _vm._v("Payment Gateway")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-gray-900" }, [_vm._v("Paystack")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Client/InvoiceComp.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Client/InvoiceComp.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvoiceComp_vue_vue_type_template_id_0198d0e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceComp.vue?vue&type=template&id=0198d0e1& */ "./resources/js/Pages/Client/InvoiceComp.vue?vue&type=template&id=0198d0e1&");
/* harmony import */ var _InvoiceComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceComp.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Client/InvoiceComp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InvoiceComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoiceComp_vue_vue_type_template_id_0198d0e1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoiceComp_vue_vue_type_template_id_0198d0e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Client/InvoiceComp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Client/InvoiceComp.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Client/InvoiceComp.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Client/InvoiceComp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Client/InvoiceComp.vue?vue&type=template&id=0198d0e1&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Client/InvoiceComp.vue?vue&type=template&id=0198d0e1& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceComp_vue_vue_type_template_id_0198d0e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceComp.vue?vue&type=template&id=0198d0e1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Client/InvoiceComp.vue?vue&type=template&id=0198d0e1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceComp_vue_vue_type_template_id_0198d0e1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceComp_vue_vue_type_template_id_0198d0e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);