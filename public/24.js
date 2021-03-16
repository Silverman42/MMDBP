(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Persona.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Persona.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Persona',
  data: function data() {
    return {
      certificates: ['Secondary School Certificate', "Bachelor Degree", "Master Degree (MSC)", "Doctrorate Degree (PhD)"],
      educational_cert: 'Secondary School Certificate',
      ambition: '',
      hobbies: '',
      profession: ''
    };
  },
  methods: {
    changeCertificates: function changeCertificates(cert) {
      this.educational_cert = cert;
    },
    assignDefaults: function assignDefaults() {
      this.educational_cert = this.$page.user.educational_cert || '';
      this.hobbies = this.$page.user.hobbies || '';
      this.ambition = this.$page.user.ambition || '';
      this.profession = this.$page.user.profession || '';
    },
    submitForm: function submitForm() {
      var educational_cert = this.educational_cert,
          hobbies = this.hobbies,
          ambition = this.ambition,
          profession = this.profession;
      this.$inertia.post(this.$route.relativePath('client.profile.update.persona'), {
        educational_cert: educational_cert,
        hobbies: hobbies,
        ambition: ambition,
        profession: profession
      });
    },
    mounted: function mounted() {
      this.assignDefaults();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Persona.vue?vue&type=template&id=7a9a8b8d&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Persona.vue?vue&type=template&id=7a9a8b8d& ***!
  \*************************************************************************************************************************************************************************************************************/
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
        attrs: { action: "", id: "persona" },
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
              label: "Hobbies",
              error: _vm.$page.errors.hobbies || "",
              form: "persona"
            },
            model: {
              value: _vm.hobbies,
              callback: function($$v) {
                _vm.hobbies = $$v
              },
              expression: "hobbies"
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
              label: "Profession",
              error: _vm.$page.errors.profession || "",
              form: "persona"
            },
            model: {
              value: _vm.profession,
              callback: function($$v) {
                _vm.profession = $$v
              },
              expression: "profession"
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
              label: "Ambition",
              error: _vm.$page.errors.ambition || "",
              form: "persona"
            },
            model: {
              value: _vm.ambition,
              callback: function($$v) {
                _vm.ambition = $$v
              },
              expression: "ambition"
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
          _c(
            "select-input",
            {
              attrs: {
                label: "Educational Certificate",
                value: _vm.educational_cert,
                error: _vm.$page.errors.educational_cert || "",
                form: "persona"
              },
              on: {
                input: function($event) {
                  return _vm.changeCertificates($event)
                }
              }
            },
            _vm._l(_vm.certificates, function(cert, index) {
              return _c("option", { key: index, domProps: { value: cert } }, [
                _vm._v("\n                " + _vm._s(cert) + "\n            ")
              ])
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "primary-btn",
        {
          attrs: {
            form: "persona",
            type: "submit",
            color: "yellow",
            fontColor: "text-black",
            width: "w-full"
          }
        },
        [_vm._v("Update Persona")]
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
      _c("h3", { staticClass: "text-lg font-bold" }, [_vm._v("Persona")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-sm" }, [
        _vm._v("Work and Educational information")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Profile/Persona.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Profile/Persona.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Persona_vue_vue_type_template_id_7a9a8b8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Persona.vue?vue&type=template&id=7a9a8b8d& */ "./resources/js/Pages/Profile/Persona.vue?vue&type=template&id=7a9a8b8d&");
/* harmony import */ var _Persona_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Persona.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/Persona.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Persona_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Persona_vue_vue_type_template_id_7a9a8b8d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Persona_vue_vue_type_template_id_7a9a8b8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/Persona.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/Persona.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Persona.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Persona_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Persona.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Persona.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Persona_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/Persona.vue?vue&type=template&id=7a9a8b8d&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Persona.vue?vue&type=template&id=7a9a8b8d& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Persona_vue_vue_type_template_id_7a9a8b8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Persona.vue?vue&type=template&id=7a9a8b8d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Persona.vue?vue&type=template&id=7a9a8b8d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Persona_vue_vue_type_template_id_7a9a8b8d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Persona_vue_vue_type_template_id_7a9a8b8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);