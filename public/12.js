(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Client/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Client/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_ClientLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Layout/ClientLayout */ "./resources/js/Layout/ClientLayout.vue");
/* harmony import */ var _iconify_icons_feather_chevron_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-feather/chevron-right */ "./node_modules/@iconify/icons-feather/chevron-right.js");
/* harmony import */ var _iconify_icons_feather_chevron_right__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_feather_chevron_right__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_feather_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-feather/check */ "./node_modules/@iconify/icons-feather/check.js");
/* harmony import */ var _iconify_icons_feather_check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_feather_check__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_feather_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-feather/x */ "./node_modules/@iconify/icons-feather/x.js");
/* harmony import */ var _iconify_icons_feather_x__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_feather_x__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_feather_arrow_right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-feather/arrow-right */ "./node_modules/@iconify/icons-feather/arrow-right.js");
/* harmony import */ var _iconify_icons_feather_arrow_right__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_feather_arrow_right__WEBPACK_IMPORTED_MODULE_5__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Dashboard",
  layout: _Layout_ClientLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
  components: {
    ProfileCard: function ProfileCard() {
      return Promise.all(/*! import() | settings_page */[__webpack_require__.e("settings_page~user_list_comps"), __webpack_require__.e("settings_page")]).then(__webpack_require__.bind(null, /*! ../../components/ProfileCard2 */ "./resources/js/components/ProfileCard2.vue"));
    },
    StepDetail: function StepDetail() {
      return Promise.all(/*! import() | settings_page */[__webpack_require__.e("settings_page~user_list_comps"), __webpack_require__.e("settings_page")]).then(__webpack_require__.bind(null, /*! ../../components/StepDetails */ "./resources/js/components/StepDetails.vue"));
    }
  },
  data: function data() {
    return {
      icons: {
        cRight: _iconify_icons_feather_chevron_right__WEBPACK_IMPORTED_MODULE_2___default.a,
        check: _iconify_icons_feather_check__WEBPACK_IMPORTED_MODULE_3___default.a,
        fail: _iconify_icons_feather_x__WEBPACK_IMPORTED_MODULE_4___default.a,
        arrow_right: _iconify_icons_feather_arrow_right__WEBPACK_IMPORTED_MODULE_5___default.a
      },
      countries: [],
      selectedCountry: 'Nigeria',
      profileSteps: {}
    };
  },
  computed: {
    profileStage: function profileStage() {
      if (this.$page.user.profile_stage === 'payment') {
        return {
          width: 30.33,
          color: 'gray'
        };
      }

      if (this.$page.user.profile_stage === 'audition') {
        return {
          width: 60.66,
          color: 'yellow'
        };
      }

      return {
        width: 100,
        color: 'green'
      };
    },
    getCurrencySymbol: function getCurrencySymbol() {
      return this.selectedCountry === 'Nigeria' ? '₦' : '$';
    },
    getRegisterationFee: function getRegisterationFee() {
      return this.selectedCountry === 'Nigeria' ? parseFloat(this.$page.auth.settings.naira_charge) : parseFloat(this.$page.auth.settings.dollar_charge);
    },
    transactionData: function transactionData() {
      return this.$page.user.transactions ? this.$page.user.transactions[0] : {};
    },
    competitionData: function competitionData() {
      return this.$page.user.competitions || {};
    }
  },
  filters: {
    changeNumberFormat: function changeNumberFormat(number) {
      var fractionUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0
      }).format(number);
    }
  },
  methods: {
    getCountries: function getCountries() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ../../plugins/countries */ "./resources/js/plugins/countries.js"));

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    selectCountry: function selectCountry(e) {
      this.selectedCountry = e;
    }
  },
  mounted: function mounted() {
    var vm = this;
    vm.profileSteps = {
      'medicals': vm.$page.user.has_completed_medicals,
      'emergency': vm.$page.user.has_completed_emergency,
      'identity': vm.$page.user.has_completed_identity,
      'travel': vm.$page.user.has_completed_travel,
      'persona': vm.$page.user.has_completed_persona,
      'social': vm.$page.user.has_completed_social
    };
    this.getCountries().then(function (country) {
      vm.countries = country["default"];
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Client/Dashboard.vue?vue&type=template&id=2e24ced9&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Client/Dashboard.vue?vue&type=template&id=2e24ced9& ***!
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
  return _c("div", [
    _c(
      "section",
      { staticClass: "mb-10" },
      [
        _c("title-board", {
          attrs: {
            boardTitle: "Dashboard",
            boardText: "Statistical data as at 20th September, 2020",
            hostName: _vm.$page.auth.settings.app_url,
            boardImgLink: "img/board_img/dashboard.svg"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("section", { staticClass: "flex flex-wrap md:flex-no-wrap " }, [
      _c(
        "div",
        { staticClass: "md:w-4/12 w-full mb-10 md:mr-10" },
        [
          _c("card-bg", [
            _c("h3", { staticClass: "text-lg font-bold mb-6" }, [
              _vm._v("Statistics")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-5" }, [
              _c("h6", { staticClass: "uppercase text-xs tracking-widest" }, [
                _vm._v("Competition")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-gray-900" }, [
                _vm._v(
                  "Miss May Day Pageant " +
                    _vm._s(_vm.competitionData.year || "2020")
                )
              ])
            ]),
            _vm._v(" "),
            _vm.$page.user.position !== null
              ? _c(
                  "div",
                  { staticClass: "flex justify-between items-center mb-5" },
                  [
                    _c(
                      "h6",
                      { staticClass: "uppercase text-xs tracking-widest" },
                      [_vm._v("Position")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-gray-900" }, [
                      _vm._v(_vm._s(_vm.$page.user.position))
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex justify-between items-center mb-5" },
              [
                _c("div", [
                  _c(
                    "h6",
                    { staticClass: "uppercase text-xs tracking-widest" },
                    [_vm._v("Payment Status")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-gray-900" }, [
                    _vm._v(
                      _vm._s(_vm.$page.user.has_paid === 1 ? "Paid" : "Unpaid")
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "inline-flex justify-center items-center rounded-full w-8 h-8",
                    class: [
                      _vm.$page.user.has_paid == 1
                        ? "bg-yellow-200 text-yellow-500"
                        : "bg-red-200 text-red-500"
                    ]
                  },
                  [
                    _c("iconify-icon", {
                      attrs: {
                        icon: _vm.$page.user.has_paid
                          ? _vm.icons.check
                          : _vm.icons.fail
                      }
                    })
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                { staticClass: "flex justify-between items-center mb-2" },
                [
                  _c(
                    "h6",
                    { staticClass: "uppercase text-xs tracking-widest" },
                    [_vm._v("Profile stage")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-gray-900 capitalize" }, [
                    _vm._v(_vm._s(_vm.$page.user.profile_stage))
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "h-3 rounded-lg overflow-hidden bg-primaryBg-300"
                },
                [
                  _c("div", {
                    class: ["h-8 bg-" + _vm.profileStage.color + "-500"],
                    style: { width: _vm.profileStage.width + "%" }
                  })
                ]
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "md:w-9/12 w-full" },
        [
          _c(
            "card-bg",
            { attrs: { extend: "mb-10" } },
            [
              _c("div", { staticClass: "mb-6" }, [
                _c("h3", { staticClass: "text-lg font-bold" }, [
                  _vm._v("Registration Steps")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-sm" }, [
                  _vm._v(
                    "Below is a list of profile update steps which should be completed to enable\n                        you\n                        stand a chance of being accpted for the competition"
                  )
                ])
              ]),
              _vm._v(" "),
              _c("step-detail", { attrs: { steps: _vm.profileSteps } }),
              _vm._v(" "),
              _vm.$page.user.has_paid === 1
                ? _c(
                    "div",
                    { staticClass: "flex justify-end mt-6" },
                    [
                      _c(
                        "inertia-link",
                        {
                          staticClass:
                            "inline-flex p-1 items-center text-yellow-500 hover:text-yellow-600",
                          attrs: {
                            href: _vm.$route.relativePath(
                              "client.profile.index"
                            )
                          }
                        },
                        [
                          _c("span", { staticClass: "mr-2" }, [
                            _vm._v("View Profile")
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
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _vm.$page.user.has_paid === 0
            ? _c("card-bg", { attrs: { extend: "mb-10" } }, [
                _c("form", {
                  attrs: {
                    action: _vm.$route.url("client.payment.initiate"),
                    method: "POST",
                    id: "payment"
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  attrs: { type: "hidden", name: "_token", form: "payment" },
                  domProps: { value: _vm.$page.token }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "rounded-md bg-auto bg-yellow-500 p-5 mb-5",
                    style: {
                      "background-image":
                        "url(" +
                        _vm.$page.auth.settings.app_url +
                        "/img/background_1.svg)"
                    }
                  },
                  [
                    _c("div", { staticClass: "w-9/12" }, [
                      _c(
                        "h3",
                        {
                          staticClass:
                            "text-2xl md:text-3xl mb-1 text-black font-bold"
                        },
                        [_vm._v("Please Make Payment")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-black text-sm" }, [
                        _vm._v(
                          "Paying for the contest gives you access to update your profile\n                            which in turn increases your chances of being selected for the competition\n                        "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mb-5" },
                  [
                    _c(
                      "select-input",
                      {
                        attrs: {
                          name: "nationality",
                          form: "payment",
                          value: _vm.selectedCountry,
                          label: "Nationality"
                        },
                        on: {
                          input: function($event) {
                            return _vm.selectCountry($event)
                          }
                        }
                      },
                      _vm._l(_vm.countries, function(country, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: country.name } },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(country.name)
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex mb-5 justify-between items-center" },
                  [
                    _c("h6", {}, [_vm._v("Regisration Fee")]),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "text-2xl text-black font-bold md:text-4xl"
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.getCurrencySymbol) +
                            _vm._s(
                              _vm._f("changeNumberFormat")(
                                _vm.getRegisterationFee
                              )
                            )
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "primary-btn",
                      {
                        attrs: {
                          type: "submit",
                          form: "payment",
                          color: "yellow",
                          fontColor: "text-black",
                          width: "w-full"
                        }
                      },
                      [
                        _vm._v(
                          "\n                        Pay and Update Profile"
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.$page.user.has_paid === 1
            ? _c("card-bg", { attrs: { extend: "mb-10" } }, [
                _c("h3", { staticClass: "text-lg font-bold mb-5" }, [
                  _vm._v("Payment Summary")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "flex flex-wrap mb-5" }, [
                  _c("div", { staticClass: "w-full md:w-4/12 mb-4 md:pr-2" }, [
                    _c(
                      "h6",
                      { staticClass: "uppercase text-xs tracking-widest" },
                      [_vm._v("Payment Status")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-green-500" }, [_vm._v("Paid")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full md:w-4/12 mb-4 md:pr-2" }, [
                    _c(
                      "h6",
                      { staticClass: "uppercase text-xs tracking-widest" },
                      [_vm._v("Amount")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-gray-900" }, [
                      _vm._v(
                        _vm._s(
                          _vm.transactionData.currency == "ngn" ? "₦" : "$"
                        ) +
                          _vm._s(
                            _vm._f("changeNumberFormat")(
                              _vm.transactionData.amount
                            )
                          )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full md:w-4/12 mb-4 md:pr-2" }, [
                    _c(
                      "h6",
                      { staticClass: "uppercase text-xs tracking-widest" },
                      [_vm._v("Payment Gateway")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-gray-900" }, [
                      _vm._v("Paystack")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full md:w-4/12 mb-4 md:pr-2" }, [
                    _c(
                      "h6",
                      { staticClass: "uppercase text-xs tracking-widest" },
                      [_vm._v("Date of Payment")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-gray-900" }, [
                      _vm._v(_vm._s(_vm.transactionData.human_date_of_payment))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex justify-end" },
                  [
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "inline-flex p-1 items-center text-yellow-500 hover:text-yellow-600",
                        attrs: {
                          href: _vm.$route.relativePath("client.invoice")
                        }
                      },
                      [
                        _c("span", { staticClass: "mr-2" }, [
                          _vm._v("View Invoice")
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
            : _vm._e()
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Client/Dashboard.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Client/Dashboard.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_2e24ced9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=2e24ced9& */ "./resources/js/Pages/Client/Dashboard.vue?vue&type=template&id=2e24ced9&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Client/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_2e24ced9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_2e24ced9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Client/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Client/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Client/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Client/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Client/Dashboard.vue?vue&type=template&id=2e24ced9&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Client/Dashboard.vue?vue&type=template&id=2e24ced9& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_2e24ced9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=2e24ced9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Client/Dashboard.vue?vue&type=template&id=2e24ced9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_2e24ced9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_2e24ced9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);