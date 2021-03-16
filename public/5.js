(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Medicals.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Medicals.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      height: {
        number: 0,
        decimal: 0
      },
      weight: {
        number: 0,
        decimal: 0
      },
      canSmoke: '1',
      isVegetarian: '0',
      shoeSize: 30,
      dressSize: 'l',
      bustSize: 'l',
      waistSize: 'l',
      skinColor: this.$page.user.skin_color || 'Pale White',
      recentSickness: '',
      surgeries: '',
      medications: '',
      dietaryNeeds: '',
      allergies: '',
      colorMatch: {
        'Pale White': '#fed9c6',
        'Fair': '#fcd3b5',
        'Light Brown': '#fcd3b5',
        'Moderate Brown': '#be825d',
        'Dark Brown': '#ba7959',
        'Black': '#763e25'
      },
      sizes: ['xxl', 'xl', 'l', 'm', 's'],
      colors: ['Pale White', "Fair", "Light Brown", "Moderate Brown", "Dark Brown", "Black"],
      bloodTypes: ['A+', "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      bloodType: 'A+'
    };
  },
  methods: {
    changeSmokeStatus: function changeSmokeStatus(status) {
      this.canSmoke = status;
    },
    changeVegeStatus: function changeVegeStatus(status) {
      this.isVegetarian = status;
    },
    splitMeasurement: function splitMeasurement() {
      var measurement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var newMeasure = [];
      newMeasure = "".concat(measurement).split('.');
      return {
        number: newMeasure[0] || 0,
        decimal: newMeasure[1] || 0
      };
    },
    assignDefault: function assignDefault() {
      this.height = this.splitMeasurement(this.$page.user.height);
      this.weight = this.splitMeasurement(this.$page.user.weight);
      this.canSmoke = this.$page.user.can_smoke === 1 ? '1' : '0';
      this.isVegetarian = this.$page.user.is_vegetarian === 1 ? '1' : '0';
      this.shoeSize = this.$page.user.shoe_size || 30;
      this.dressSize = this.$page.user.dress_size || 'l';
      this.bustSize = this.$page.user.bust_size || 'l';
      this.waistSize = this.$page.user.waist_size || 'l';
      this.skinColor = this.$page.user.skin_color || 'Pale White';
      this.recentSickness = this.$page.user.recent_sickness || '';
      this.allergies = this.$page.user.allergies || '';
      this.surgeries = this.$page.user.surgeries || '';
      this.medications = this.$page.user.medications || '';
      this.dietaryNeeds = this.$page.user.dietary_needs || '';
      this.bloodType = this.$page.user.blood_type || 'A+';
    },
    submitForm: function submitForm() {
      var form = new FormData();
      form.append('height', "".concat(this.height.number, ".").concat(this.height.decimal));
      form.append('weight', "".concat(this.weight.number, ".").concat(this.weight.decimal));
      form.append('can_smoke', this.canSmoke);
      form.append('is_vegetarian', this.isVegetarian);
      form.append('shoe_size', this.shoeSize);
      form.append('dress_size', this.dressSize);
      form.append('bust_size', this.bustSize);
      form.append('waist_size', this.waistSize);
      form.append('skin_color', this.skinColor);
      form.append('recent_sickness', this.recentSickness);
      form.append('allergies', this.allergies);
      form.append('surgeries', this.surgeries);
      form.append('medications', this.medications);
      form.append('dietary_needs', this.dietaryNeeds);
      form.append('blood_type', this.bloodType);
      this.$inertia.post(this.$route.relativePath('client.profile.update.medicals'), form);
    }
  },
  mounted: function mounted() {
    this.assignDefault();
  },
  updated: function updated() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Medicals.vue?vue&type=template&id=23234371&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Medicals.vue?vue&type=template&id=23234371& ***!
  \**************************************************************************************************************************************************************************************************************/
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
        attrs: { action: "", id: "medicals" },
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
        { staticClass: "mb-3 grid grid-cols-2 col-gap-2" },
        [
          _c("p", { staticClass: "col-start-1 col-end-3 text-xs" }, [
            _vm._v("Height (ft)")
          ]),
          _vm._v(" "),
          _c("text-input", {
            attrs: { type: "number", form: "medicals" },
            model: {
              value: _vm.height.number,
              callback: function($$v) {
                _vm.$set(_vm.height, "number", $$v)
              },
              expression: "height.number"
            }
          }),
          _vm._v(" "),
          _c("text-input", {
            attrs: { type: "number", form: "medicals" },
            model: {
              value: _vm.height.decimal,
              callback: function($$v) {
                _vm.$set(_vm.height, "decimal", $$v)
              },
              expression: "height.decimal"
            }
          }),
          _vm._v(" "),
          _vm.$page.errors.height
            ? _c(
                "p",
                { staticClass: "col-start-1 col-end-3 text-xs text-red-500" },
                [_vm._v(_vm._s(_vm.$page.errors.height))]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-3 grid grid-cols-2 col-gap-2" },
        [
          _c("p", { staticClass: "col-start-1 col-end-3 text-xs" }, [
            _vm._v("Weight (kg)")
          ]),
          _vm._v(" "),
          _c("text-input", {
            attrs: { type: "number", form: "medicals" },
            model: {
              value: _vm.weight.number,
              callback: function($$v) {
                _vm.$set(_vm.weight, "number", $$v)
              },
              expression: "weight.number"
            }
          }),
          _vm._v(" "),
          _c("text-input", {
            attrs: { type: "number", form: "medicals" },
            model: {
              value: _vm.weight.decimal,
              callback: function($$v) {
                _vm.$set(_vm.weight, "decimal", $$v)
              },
              expression: "weight.decimal"
            }
          }),
          _vm._v(" "),
          _vm.$page.errors.weight
            ? _c(
                "p",
                { staticClass: "col-start-1 col-end-3 text-xs text-red-500" },
                [_vm._v(_vm._s(_vm.$page.errors.weight))]
              )
            : _vm._e()
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
              type: "number",
              form: "medicals",
              error: _vm.$page.errors.shoe_size,
              label: "Shoe Size (European measurement)"
            },
            model: {
              value: _vm.shoeSize,
              callback: function($$v) {
                _vm.shoeSize = $$v
              },
              expression: "shoeSize"
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
          _c(
            "select-input",
            {
              attrs: {
                label: "Dress Size",
                error: _vm.$page.errors.dress_size,
                value: _vm.dressSize,
                form: "medicals"
              },
              model: {
                value: _vm.dressSize,
                callback: function($$v) {
                  _vm.dressSize = $$v
                },
                expression: "dressSize"
              }
            },
            _vm._l(_vm.sizes, function(size, index) {
              return _c("option", { key: index, domProps: { value: size } }, [
                _vm._v(_vm._s(size))
              ])
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-3" },
        [
          _c(
            "select-input",
            {
              attrs: {
                label: "Waist Size",
                error: _vm.$page.errors.waist_size,
                value: _vm.waistSize,
                form: "medicals"
              },
              model: {
                value: _vm.waistSize,
                callback: function($$v) {
                  _vm.waistSize = $$v
                },
                expression: "waistSize"
              }
            },
            _vm._l(_vm.sizes, function(size, index) {
              return _c("option", { key: index, domProps: { value: size } }, [
                _vm._v(_vm._s(size))
              ])
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-3" },
        [
          _c(
            "select-input",
            {
              attrs: {
                label: "Burst Size",
                error: _vm.$page.errors.bust_size,
                value: _vm.bustSize,
                form: "medicals"
              },
              model: {
                value: _vm.bustSize,
                callback: function($$v) {
                  _vm.bustSize = $$v
                },
                expression: "bustSize"
              }
            },
            _vm._l(_vm.sizes, function(size, index) {
              return _c("option", { key: index, domProps: { value: size } }, [
                _vm._v(_vm._s(size))
              ])
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "mb-3 grid grid-cols-3 col-gap-2" }, [
        _c("div", { staticClass: "text-xs col-start-1 col-end-4" }, [
          _vm._v("Skin Color")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-start-1 col-end-3" },
          [
            _c(
              "select-input",
              {
                attrs: {
                  error: _vm.$page.errors.skin_color,
                  value: _vm.skinColor,
                  form: "medicals"
                },
                model: {
                  value: _vm.skinColor,
                  callback: function($$v) {
                    _vm.skinColor = $$v
                  },
                  expression: "skinColor"
                }
              },
              _vm._l(_vm.colors, function(color, index) {
                return _c(
                  "option",
                  { key: index, domProps: { value: color } },
                  [_vm._v(_vm._s(color))]
                )
              }),
              0
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", {
          staticClass: "col-start-3 col-end-4 rounded-md",
          style: { background: _vm.colorMatch[_vm.skinColor] }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-3" },
        [
          _c(
            "select-input",
            {
              attrs: {
                label: "Blood Type",
                error: _vm.$page.errors.blood_type,
                value: _vm.bloodType,
                form: "medicals"
              },
              model: {
                value: _vm.bloodType,
                callback: function($$v) {
                  _vm.bloodType = $$v
                },
                expression: "bloodType"
              }
            },
            _vm._l(_vm.bloodTypes, function(type, index) {
              return _c("option", { key: index, domProps: { value: type } }, [
                _vm._v(_vm._s(type))
              ])
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "mb-3" }, [
        _c("span", { staticClass: "text-xs" }, [_vm._v("Are you a smoker ?")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex flex-wrap" },
          [
            _c("radio-input", {
              attrs: {
                value: "1",
                name: "canSmoke",
                defaultValue: _vm.canSmoke,
                title: "Yes"
              },
              on: {
                input: function($event) {
                  return _vm.changeSmokeStatus($event)
                }
              }
            }),
            _vm._v(" "),
            _c("radio-input", {
              attrs: {
                value: "0",
                name: "canSmoke",
                defaultValue: _vm.canSmoke,
                title: "No"
              },
              on: {
                input: function($event) {
                  return _vm.changeSmokeStatus($event)
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.$page.errors.can_smoke
          ? _c("div", { staticClass: "mt-2" }, [
              _vm._v(_vm._s(_vm.$page.errors.can_smoke || ""))
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mb-3" }, [
        _c("span", { staticClass: "text-xs" }, [
          _vm._v("Are you a vegetarian ?")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex flex-wrap" },
          [
            _c("radio-input", {
              attrs: {
                value: "1",
                name: "isVege",
                defaultValue: _vm.isVegetarian,
                title: "Yes"
              },
              on: {
                input: function($event) {
                  return _vm.changeAllergiestatus($event)
                }
              }
            }),
            _vm._v(" "),
            _c("radio-input", {
              attrs: {
                value: "0",
                name: "isVege",
                defaultValue: _vm.isVegetarian,
                title: "No"
              },
              on: {
                input: function($event) {
                  return _vm.changeVegeStatus($event)
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.$page.errors.is_vegetarian
          ? _c("div", { staticClass: "mt-2" }, [
              _vm._v(_vm._s(_vm.$page.errors.is_vegetarian || ""))
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-3" },
        [
          _c("textarea-input", {
            attrs: {
              error: _vm.$page.errors.dietary_needs,
              form: "medicals",
              label: "Please list your Dietary Needs, if any"
            },
            model: {
              value: _vm.dietaryNeeds,
              callback: function($$v) {
                _vm.dietaryNeeds = $$v
              },
              expression: "dietaryNeeds"
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
          _c("textarea-input", {
            attrs: {
              error: _vm.$page.errors.recent_sickness,
              form: "medicals",
              label: "Please list your Recent Sickness, if any"
            },
            model: {
              value: _vm.recentSickness,
              callback: function($$v) {
                _vm.recentSickness = $$v
              },
              expression: "recentSickness"
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
          _c("textarea-input", {
            attrs: {
              error: _vm.$page.errors.surgeries,
              form: "medicals",
              label: "Please list your Recent Surgeries, if any"
            },
            model: {
              value: _vm.surgeries,
              callback: function($$v) {
                _vm.surgeries = $$v
              },
              expression: "surgeries"
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
          _c("textarea-input", {
            attrs: {
              error: _vm.$page.errors.medications,
              form: "medicals",
              label: "Please list your Medications, if any"
            },
            model: {
              value: _vm.medications,
              callback: function($$v) {
                _vm.medications = $$v
              },
              expression: "medications"
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
          _c("textarea-input", {
            attrs: {
              error: _vm.$page.errors.allergies,
              form: "medicals",
              label: "Please list your Allergies, if any"
            },
            model: {
              value: _vm.allergies,
              callback: function($$v) {
                _vm.allergies = $$v
              },
              expression: "allergies"
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
            form: "medicals",
            width: "w-full",
            color: "yellow",
            fontColor: "text-black"
          }
        },
        [_vm._v("Update Medicals")]
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

/***/ "./resources/js/Pages/Profile/Medicals.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Profile/Medicals.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Medicals_vue_vue_type_template_id_23234371___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Medicals.vue?vue&type=template&id=23234371& */ "./resources/js/Pages/Profile/Medicals.vue?vue&type=template&id=23234371&");
/* harmony import */ var _Medicals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Medicals.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/Medicals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Medicals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Medicals_vue_vue_type_template_id_23234371___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Medicals_vue_vue_type_template_id_23234371___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/Medicals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/Medicals.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Medicals.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Medicals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Medicals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/Medicals.vue?vue&type=template&id=23234371&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Medicals.vue?vue&type=template&id=23234371& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicals_vue_vue_type_template_id_23234371___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Medicals.vue?vue&type=template&id=23234371& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Medicals.vue?vue&type=template&id=23234371&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicals_vue_vue_type_template_id_23234371___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Medicals_vue_vue_type_template_id_23234371___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);