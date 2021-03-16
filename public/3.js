(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Tabs/Medicals.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Tabs/Medicals.vue?vue&type=script&lang=js& ***!
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
  name: 'Medicals',
  mixins: [_Mixins__WEBPACK_IMPORTED_MODULE_0__["Tabs"]]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Tabs/Medicals.vue?vue&type=template&id=34f5ed34&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Tabs/Medicals.vue?vue&type=template&id=34f5ed34& ***!
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
            _vm._v("Height")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(
              _vm._s(_vm.user.height ? _vm.user.height + " ft" : "No height")
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Weight")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(
              _vm._s(_vm.user.weight ? _vm.user.weight + " kg" : "No weight")
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Shoe Size")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(
              _vm._s(
                _vm.user.shoe_size ? "" + _vm.user.shoe_size : "No shoe size"
              )
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Dress Size")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "uppercase" }, [
            _vm._v(
              _vm._s(
                _vm.user.dress_size ? "" + _vm.user.dress_size : "No dress size"
              ) + "\n            "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Bust Size")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "uppercase" }, [
            _vm._v(
              _vm._s(
                _vm.user.bust_size ? "" + _vm.user.bust_size : "No bust size"
              ) + "\n            "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Waist Size")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "uppercase" }, [
            _vm._v(
              "\n                " +
                _vm._s(
                  _vm.user.waist_size
                    ? "" + _vm.user.waist_size
                    : "No waist size"
                )
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Skin Color")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(
              _vm._s(
                _vm.user.skin_color ? "" + _vm.user.skin_color : "No skin color"
              ) + "\n            "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Blood Type")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(
              _vm._s(
                _vm.user.blood_type ? "" + _vm.user.blood_type : "No blood type"
              ) + "\n            "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Vegetarian Status")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(
              _vm._s(_vm.user.is_vegetarian == 1 ? "Positive" : "Negative")
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Smoking Habit")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(_vm._s(_vm.user.can_smoke == 1 ? "Positive" : "Negative"))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Allergies")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(
              _vm._s(
                _vm.user.allergies ? "" + _vm.user.allergies : "No Allergies"
              )
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Surgeries")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(
              _vm._s(
                _vm.user.surgeries ? "" + _vm.user.surgeries : "No Surgeries"
              )
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Dietary needs")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(
              "\n                " +
                _vm._s(
                  _vm.user.dietary_needs
                    ? "" + _vm.user.dietary_needs
                    : "No Dietary needs"
                )
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Recent sickness")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(
              "\n                " +
                _vm._s(
                  _vm.user.recent_sickness
                    ? "" + _vm.user.recent_sickness
                    : "No Recent Sickness"
                )
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "break-words" }, [
          _c("h3", { staticClass: "uppercase text-xs tracking-widest" }, [
            _vm._v("Medications")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "capitalize" }, [
            _vm._v(
              "\n                " +
                _vm._s(
                  _vm.user.medications
                    ? "" + _vm.user.medications
                    : "No medications"
                )
            )
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
      _c("h3", { staticClass: "text-lg font-bold" }, [_vm._v("Medicals")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-sm" }, [
        _vm._v("Your medical history and backlogs")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Profile/Tabs/Medicals.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Profile/Tabs/Medicals.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Medicals_vue_vue_type_template_id_34f5ed34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Medicals.vue?vue&type=template&id=34f5ed34& */ "./resources/js/Pages/Profile/Tabs/Medicals.vue?vue&type=template&id=34f5ed34&");
/* harmony import */ var _Medicals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Medicals.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/Tabs/Medicals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Medicals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Medicals_vue_vue_type_template_id_34f5ed34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Medicals_vue_vue_type_template_id_34f5ed34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/Tabs/Medicals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/Tabs/Medicals.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Tabs/Medicals.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Medicals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Tabs/Medicals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/Tabs/Medicals.vue?vue&type=template&id=34f5ed34&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Tabs/Medicals.vue?vue&type=template&id=34f5ed34& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicals_vue_vue_type_template_id_34f5ed34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Medicals.vue?vue&type=template&id=34f5ed34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Tabs/Medicals.vue?vue&type=template&id=34f5ed34&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicals_vue_vue_type_template_id_34f5ed34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicals_vue_vue_type_template_id_34f5ed34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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