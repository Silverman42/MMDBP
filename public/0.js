(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@iconify/icons-feather/check.js":
/*!******************************************************!*\
  !*** ./node_modules/@iconify/icons-feather/check.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 6L9 17l-5-5\"/></g>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-feather/x.js":
/*!**************************************************!*\
  !*** ./node_modules/@iconify/icons-feather/x.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6L6 18\"/><path d=\"M6 6l12 12\"/></g>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layout/Layout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layout/Layout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iconify_icons_feather_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-feather/check */ "./node_modules/@iconify/icons-feather/check.js");
/* harmony import */ var _iconify_icons_feather_check__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_feather_check__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_feather_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-feather/x */ "./node_modules/@iconify/icons-feather/x.js");
/* harmony import */ var _iconify_icons_feather_x__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_feather_x__WEBPACK_IMPORTED_MODULE_1__);
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
  name: 'Layout',
  components: {
    Alert: function Alert() {
      return __webpack_require__.e(/*! import() | layout_comps */ "layout_comps").then(__webpack_require__.bind(null, /*! ../components/Alert */ "./resources/js/components/Alert.vue"));
    },
    AlertContainer: function AlertContainer() {
      return __webpack_require__.e(/*! import() | layout_comps */ "layout_comps").then(__webpack_require__.bind(null, /*! ../components/AlertContainer */ "./resources/js/components/AlertContainer.vue"));
    }
  },
  data: function data() {
    return {
      icons: {
        success: _iconify_icons_feather_check__WEBPACK_IMPORTED_MODULE_0___default.a,
        error: _iconify_icons_feather_x__WEBPACK_IMPORTED_MODULE_1___default.a
      },
      alertList: [],
      logo_link: 'img/dashboard_logo.svg'
    };
  },
  watch: {
    $page: {
      handler: function handler() {
        this.pushNewAlert();
      },
      deep: true
    }
  },
  methods: {
    logout: function logout() {
      var form = document.querySelector('#logoutForm');
      form.submit();
    },
    removeAlertSynchronously: function removeAlertSynchronously(index) {
      this.alertList.splice(index, 1);
    },
    removeAlertAsynchronously: function removeAlertAsynchronously(index) {
      var _this = this;

      setTimeout(function () {
        _this.alertList.splice(index, 1);
      }, 3000);
    },
    pushNewAlert: function pushNewAlert() {
      var vm = this;
      var alertList = this.alertList;

      if (this.$page.auth.alert_type !== null) {
        alertList.push({
          type: vm.$page.auth.alert_type,
          color: vm.$page.auth.alert_type === "success" ? 'green' : 'red',
          message: vm.$page.auth.alert_message,
          heading: vm.$page.auth.alert_heading
        });
        this.alertList = alertList;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layout/Layout.vue?vue&type=style&index=0&id=369434a1&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layout/Layout.vue?vue&type=style&index=0&id=369434a1&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-link[data-v-369434a1] {\n  color: var(--primary-100);\n  font-size: 0.875rem;\n  display: inline-block;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.nav-link[data-v-369434a1]:hover,\n.nav-link[data-v-369434a1]:focus,\n.nav-link.active[data-v-369434a1] {\n  color: #fff;\n  background-color: var(--primary-600);\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layout/Layout.vue?vue&type=style&index=0&id=369434a1&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layout/Layout.vue?vue&type=style&index=0&id=369434a1&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=style&index=0&id=369434a1&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layout/Layout.vue?vue&type=style&index=0&id=369434a1&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layout/Layout.vue?vue&type=template&id=369434a1&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layout/Layout.vue?vue&type=template&id=369434a1&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c(
        "alert-container",
        _vm._l(_vm.alertList, function(alert, index) {
          return _c(
            "alert",
            {
              key: index,
              attrs: {
                color: alert.color || "green",
                heading: alert.heading || "",
                message: alert.message || ""
              },
              on: {
                closeAlert: function($event) {
                  return _vm.removeAlertSynchronously(index)
                }
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.removeAlertAsynchronously(index)) +
                  "\n            "
              ),
              alert.type === "success"
                ? _c("iconify-icon", { attrs: { icon: _vm.icons.success } })
                : _c("iconify-icon", { attrs: { icon: _vm.icons.error } })
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c("header", { staticClass: " bg-primary-500 pt-3 pb-24" }, [
        _c("div", { staticClass: "xl:w-9/12 w-11/12 mx-auto" }, [
          _c("div", { staticClass: "flex justify-between items-center py-4" }, [
            _c("div", { staticClass: "w-20 flex items-center" }, [
              _c("img", {
                staticClass: "w-10",
                attrs: {
                  src: "" + _vm.$page.auth.settings.dashboard_logo,
                  alt: _vm.$page.auth.settings.app_name + " logo"
                }
              }),
              _vm._v(" "),
              _c("p", { staticClass: "text-white ml-3 capitalize" }, [
                _vm._v(_vm._s(_vm.$page.auth.settings.app_name))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center justify-end" }, [
              _c("div", { staticClass: "mr-3" }, [
                _c(
                  "a",
                  {
                    staticClass: "text-white",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.logout($event)
                      }
                    }
                  },
                  [_vm._v("Logout")]
                ),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    attrs: {
                      method: "POST",
                      action: _vm.$route.url("logout"),
                      hidden: "",
                      id: "logoutForm"
                    }
                  },
                  [
                    _c("input", {
                      attrs: { type: "hidden", name: "_token" },
                      domProps: { value: _vm.$page.auth.csrf_token }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-white" }, [
                _vm._v(
                  "\n                        Profile\n                    "
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("nav", { staticClass: "w-full" }, [
            _c(
              "ul",
              {
                staticClass:
                  "list-none m-0 p-0 flex overflow-x-auto items-center py-4"
              },
              [
                _c(
                  "li",
                  {
                    staticClass: "inline-block reveal-up",
                    style: { "--delay": "0.1s" }
                  },
                  [
                    _c(
                      "inertia-link",
                      {
                        staticClass: "nav-link",
                        class: {
                          active: _vm.$route.isCurrent("admin.dashboard")
                        },
                        attrs: {
                          href: _vm.$route.relativePath("admin.dashboard")
                        }
                      },
                      [_vm._v("Dashboard")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "inline-block reveal-up",
                    style: { "--delay": "0.6s" }
                  },
                  [
                    _c(
                      "inertia-link",
                      {
                        staticClass: "nav-link",
                        class: {
                          active: _vm.$route.isCurrent("settings.view")
                        },
                        attrs: {
                          href: _vm.$route.relativePath("settings.view")
                        }
                      },
                      [_vm._v("Settings")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "inline-block reveal-up",
                    style: { "--delay": "0.6s" }
                  },
                  [
                    _c(
                      "inertia-link",
                      {
                        staticClass: "nav-link",
                        class: { active: _vm.$route.isCurrent("users.view") },
                        attrs: { href: _vm.$route.relativePath("users.view") }
                      },
                      [_vm._v("Users")]
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("main", { staticStyle: { "margin-top": "-5rem" } }, [
        _c(
          "div",
          { staticClass: "xl:w-9/12 w-11/12 mx-auto pb-20" },
          [_vm._t("default")],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Layout/Layout.vue":
/*!****************************************!*\
  !*** ./resources/js/Layout/Layout.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_369434a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=369434a1&scoped=true& */ "./resources/js/Layout/Layout.vue?vue&type=template&id=369434a1&scoped=true&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/Layout/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Layout_vue_vue_type_style_index_0_id_369434a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.vue?vue&type=style&index=0&id=369434a1&scoped=true&lang=css& */ "./resources/js/Layout/Layout.vue?vue&type=style&index=0&id=369434a1&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_369434a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_369434a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "369434a1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layout/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Layout/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Layout/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layout/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layout/Layout.vue?vue&type=style&index=0&id=369434a1&scoped=true&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Layout/Layout.vue?vue&type=style&index=0&id=369434a1&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_id_369434a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=style&index=0&id=369434a1&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layout/Layout.vue?vue&type=style&index=0&id=369434a1&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_id_369434a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_id_369434a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_id_369434a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_id_369434a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_id_369434a1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Layout/Layout.vue?vue&type=template&id=369434a1&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Layout/Layout.vue?vue&type=template&id=369434a1&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_369434a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=369434a1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layout/Layout.vue?vue&type=template&id=369434a1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_369434a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_369434a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);