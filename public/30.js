(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/View.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings/View.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layout/Layout */ "./resources/js/Layout/Layout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ViewSettings',
  layout: _Layout_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    General: function General() {
      return Promise.all(/*! import() | settings_page */[__webpack_require__.e("settings_page~user_list_comps"), __webpack_require__.e("settings_page")]).then(__webpack_require__.bind(null, /*! ./General */ "./resources/js/Pages/Settings/General.vue"));
    },
    UserInterface: function UserInterface() {
      return Promise.all(/*! import() | settings_page */[__webpack_require__.e("settings_page~user_list_comps"), __webpack_require__.e("settings_page")]).then(__webpack_require__.bind(null, /*! ./UserInterface */ "./resources/js/Pages/Settings/UserInterface.vue"));
    },
    FactoryReset: function FactoryReset() {
      return Promise.all(/*! import() | settings_page */[__webpack_require__.e("settings_page~user_list_comps"), __webpack_require__.e("settings_page")]).then(__webpack_require__.bind(null, /*! ./FactoryReset */ "./resources/js/Pages/Settings/FactoryReset.vue"));
    }
  },
  data: function data() {
    return {
      tabs: ['general', 'user-interface', 'factory-reset'],
      general: {
        app_name: this.$page.auth.settings.app_name,
        app_email: this.$page.auth.settings.app_email,
        app_url: this.$page.auth.settings.app_url,
        color_scheme: this.$page.auth.settings.color_scheme,
        disable_collection_modification: this.$page.auth.settings.disable_collection_modification == 1 ? true : false,
        disable_question_modification: this.$page.auth.settings.disable_question_modification == 1 ? true : false,
        disable_topic_modification: this.$page.auth.settings.disable_topic_modification == 1 ? true : false,
        disable_subject_modification: this.$page.auth.settings.disable_subject_modification == 1 ? true : false,
        recieve_user_emails: this.$page.auth.settings.recieve_user_emails == 1 ? true : false
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/View.vue?vue&type=template&id=d9bc3c50&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings/View.vue?vue&type=template&id=d9bc3c50& ***!
  \***********************************************************************************************************************************************************************************************************/
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
            boardTitle: "Settings",
            boardText:
              "Customize the user interface and functionalities of " +
              _vm.$page.auth.settings.app_name,
            hostName: _vm.$page.auth.settings.app_url,
            boardImgLink: "img/board_img/settings.svg"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      {
        staticClass: "rounded-md bg-white shadow-lg p-6 md:p-12 reveal-up",
        staticStyle: { "--delay": "0.5s" }
      },
      [
        _c("tabs", {
          attrs: { tabs: _vm.tabs, defaultActiveTab: "general" },
          scopedSlots: _vm._u([
            {
              key: "tab-body-general",
              fn: function() {
                return [_c("general")]
              },
              proxy: true
            },
            {
              key: "tab-body-user-interface",
              fn: function() {
                return [_c("user-interface")]
              },
              proxy: true
            },
            {
              key: "tab-body-factory-reset",
              fn: function() {
                return [_c("factory-reset")]
              },
              proxy: true
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Settings/View.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Settings/View.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_d9bc3c50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=d9bc3c50& */ "./resources/js/Pages/Settings/View.vue?vue&type=template&id=d9bc3c50&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Settings/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_d9bc3c50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_d9bc3c50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Settings/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Settings/View.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Settings/View.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Settings/View.vue?vue&type=template&id=d9bc3c50&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Settings/View.vue?vue&type=template&id=d9bc3c50& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_d9bc3c50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=d9bc3c50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/View.vue?vue&type=template&id=d9bc3c50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_d9bc3c50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_d9bc3c50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);