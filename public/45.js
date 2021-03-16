(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Social.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Social.vue?vue&type=script&lang=js& ***!
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Social',
  data: function data() {
    return {
      facebook_url: '',
      twitter_url: '',
      phone_number: ''
    };
  },
  methods: {
    assignDefault: function assignDefault() {
      this.facebook_url = this.$page.user.facebook_url || '';
      this.twitter_url = this.$page.user.twitter_url || '';
      this.phone_number = this.$page.user.phone_number || '';
    },
    submitForm: function submitForm() {
      var facebook_url = this.facebook_url,
          twitter_url = this.twitter_url,
          phone_number = this.phone_number;
      this.$inertia.post(this.$route.relativePath('client.profile.update.social'), {
        facebook_url: facebook_url,
        twitter_url: twitter_url,
        phone_number: phone_number
      });
    }
  },
  mounted: function mounted() {
    this.assignDefault();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Social.vue?vue&type=template&id=2fd401c8&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Social.vue?vue&type=template&id=2fd401c8& ***!
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
        attrs: { action: "", id: "social" },
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
              form: "social",
              error: _vm.$page.errors.facebook_url,
              label: "Facebook link"
            },
            model: {
              value: _vm.facebook_url,
              callback: function($$v) {
                _vm.facebook_url = $$v
              },
              expression: "facebook_url"
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
              form: "social",
              error: _vm.$page.errors.twitter_url,
              label: "Twitter link"
            },
            model: {
              value: _vm.twitter_url,
              callback: function($$v) {
                _vm.twitter_url = $$v
              },
              expression: "twitter_url"
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
              type: "number",
              form: "social",
              error: _vm.$page.errors.phone_number,
              label: "Phone Number (with call code)"
            },
            model: {
              value: _vm.phone_number,
              callback: function($$v) {
                _vm.phone_number = $$v
              },
              expression: "phone_number"
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
            form: "social",
            width: "w-full",
            color: "yellow",
            fontColor: "text-black"
          }
        },
        [_vm._v("Update Social Data")]
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
      _c("h3", { staticClass: "text-lg font-bold" }, [_vm._v("Social")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-sm" }, [
        _vm._v("Social media links and contact")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Profile/Social.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Profile/Social.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Social_vue_vue_type_template_id_2fd401c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Social.vue?vue&type=template&id=2fd401c8& */ "./resources/js/Pages/Profile/Social.vue?vue&type=template&id=2fd401c8&");
/* harmony import */ var _Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Social.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/Social.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Social_vue_vue_type_template_id_2fd401c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Social_vue_vue_type_template_id_2fd401c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/Social.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/Social.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Social.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Social.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Social.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/Social.vue?vue&type=template&id=2fd401c8&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Social.vue?vue&type=template&id=2fd401c8& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_template_id_2fd401c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Social.vue?vue&type=template&id=2fd401c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Social.vue?vue&type=template&id=2fd401c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_template_id_2fd401c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_template_id_2fd401c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);