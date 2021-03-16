(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/@iconify/icons-feather/arrow-right.js":
/*!************************************************************!*\
  !*** ./node_modules/@iconify/icons-feather/arrow-right.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14\"/><path d=\"M12 5l7 7l-7 7\"/></g>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Client/Invoice.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Client/Invoice.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_ClientLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layout/ClientLayout */ "./resources/js/Layout/ClientLayout.vue");
/* harmony import */ var _iconify_icons_feather_arrow_right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-feather/arrow-right */ "./node_modules/@iconify/icons-feather/arrow-right.js");
/* harmony import */ var _iconify_icons_feather_arrow_right__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_feather_arrow_right__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Invoice',
  layout: _Layout_ClientLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      icons: {
        arrow_right: _iconify_icons_feather_arrow_right__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    };
  },
  components: {
    InvoiceComp: function InvoiceComp() {
      return Promise.all(/*! import() | user_list_comps */[__webpack_require__.e("settings_page~user_list_comps"), __webpack_require__.e("user_list_comps")]).then(__webpack_require__.bind(null, /*! ./InvoiceComp */ "./resources/js/Pages/Client/InvoiceComp.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Client/Invoice.vue?vue&type=template&id=75cd3a32&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Client/Invoice.vue?vue&type=template&id=75cd3a32& ***!
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
  return _c("div", [
    _c(
      "section",
      { staticClass: "mb-10" },
      [
        _c("title-board", {
          attrs: {
            boardTitle: "Invoice",
            boardText: "Your payment information and status",
            hostName: _vm.$page.auth.settings.app_url,
            boardImgLink: "img/board_img/dashboard.svg"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      [
        _c(
          "card-bg",
          { attrs: { extend: "mb-10" } },
          [
            _c("invoice-comp", {
              attrs: { invoice: _vm.$page.invoice, auth: _vm.$page.auth }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.$page.directToProfile
          ? _c("card-bg", [
              _c("div", { staticClass: "flex flex-wrap justify-between" }, [
                _c("p", { staticClass: "w-full md:w-8/12 mb-3" }, [
                  _vm._v(
                    "Congratulations. You are now permitted to update your profile. Please update your profile to qualify for auditions"
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "w-full md:w-3/12 flex justify-end" },
                  [
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "inline-flex p-1 items-center text-yellow-500 hover:text-yellow-600",
                        attrs: {
                          href: _vm.$route.relativePath("client.profile.index")
                        }
                      },
                      [
                        _c("span", { staticClass: "mr-2" }, [
                          _vm._v("Update Profile")
                        ]),
                        _vm._v(" "),
                        _c("iconify-icon", {
                          attrs: { icon: _vm.icons.arrow_right }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Client/Invoice.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Client/Invoice.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Invoice_vue_vue_type_template_id_75cd3a32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoice.vue?vue&type=template&id=75cd3a32& */ "./resources/js/Pages/Client/Invoice.vue?vue&type=template&id=75cd3a32&");
/* harmony import */ var _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoice.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Client/Invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Invoice_vue_vue_type_template_id_75cd3a32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Invoice_vue_vue_type_template_id_75cd3a32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Client/Invoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Client/Invoice.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Client/Invoice.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Client/Invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Client/Invoice.vue?vue&type=template&id=75cd3a32&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Client/Invoice.vue?vue&type=template&id=75cd3a32& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_75cd3a32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Invoice.vue?vue&type=template&id=75cd3a32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Client/Invoice.vue?vue&type=template&id=75cd3a32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_75cd3a32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_75cd3a32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);