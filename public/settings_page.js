(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings_page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/FactoryReset.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings/FactoryReset.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FactoryReset',
  data: function data() {
    return {
      password: ''
    };
  },
  methods: {
    activateFactoryReset: function activateFactoryReset() {
      var vm = this;
      this.$inertia.post(this.$route.relativePath('settings.factory_reset'), {
        password: vm.password
      });
    }
  },
  updated: function updated() {
    if (this.$page.auth.alert_type === 'success') {
      setTimeout(function () {
        return window.location.reload();
      }, 800);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/General.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings/General.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'General',
  data: function data() {
    return {
      general: {
        app_name: this.$page.auth.settings.app_name,
        app_email: this.$page.auth.settings.app_email,
        app_url: this.$page.auth.settings.app_url,
        color_scheme: this.$page.auth.settings.color_scheme,
        disable_client_profile_modification: this.$page.auth.settings.disable_client_profile_modification == 1 ? true : false,
        disable_client_registration: this.$page.auth.settings.disable_client_registration == 1 ? true : false,
        recieve_client_emails: this.$page.auth.settings.recieve_client_emails == 1 ? true : false,
        naira_charge: this.$page.auth.settings.naira_charge || 0,
        dollar_charge: this.$page.auth.settings.dollar_charge || 0
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/UserInterface.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings/UserInterface.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserInterface',
  data: function data() {
    return {
      color_scheme: this.$page.auth.settings.color_scheme,
      auth_logo: '',
      dashboard_logo: ''
    };
  },
  methods: {
    setFileInput: function setFileInput(event, fileType) {
      this[fileType] = event;
    },
    updateUserInterface: function updateUserInterface() {
      var form = new FormData();
      form.append('color_scheme', this.color_scheme);

      if (this.auth_logo !== "") {
        form.append('auth_logo', this.auth_logo);
      }

      if (this.dashboard_logo !== "") {
        form.append('dashboard_logo', this.dashboard_logo);
      }

      this.$inertia.post(this.$route.relativePath('settings.user_interface'), form);
    }
  },
  updated: function updated() {
    if (this.$page.auth.alert_type === 'success') {
      setTimeout(function () {
        return window.location.reload();
      }, 800);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
  props: {
    isOpen: {
      type: Boolean,
      "default": false
    },
    deactivateCloseBtn: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      body: document.querySelector('body')
    };
  },
  watch: {
    isOpen: function isOpen(newValue, oldValue) {
      if (newValue === true) {
        return this.hideScrollBar();
      }

      return this.showScrollBar();
    }
  },
  methods: {
    closeModal: function closeModal() {
      if (this.deactivateCloseBtn === false) {
        return this.$emit('update:isOpen', false);
      }
    },
    hideScrollBar: function hideScrollBar() {
      this.body.classList.add('overflow-y-hidden');
    },
    showScrollBar: function showScrollBar() {
      this.body.classList.remove('overflow-y-hidden');
    }
  },
  mounted: function mounted() {
    var v = this;
    window.addEventListener('keyup', function (event) {
      event.preventDefault();
      if (event.keyCode == 27) v.closeModal();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StepDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/StepDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    steps: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      icons: {
        check: _iconify_icons_feather_check__WEBPACK_IMPORTED_MODULE_0___default.a,
        fail: _iconify_icons_feather_x__WEBPACK_IMPORTED_MODULE_1___default.a
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-backdrop[data-v-53ab54d2]{\n  background: rgba(0,0,0,0.6);\n  z-index: 1000;\n  width: 100vw;\n  height: 100vh;\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.modal[data-v-53ab54d2]{\n  z-index: 1100;\n  width: 100vw;\n  height: 100vh;\n  background-color: #fff;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n.modal>header[data-v-53ab54d2]{\n  height: 8vh;\n  border-bottom-width: 1px;\n  border-color: #edf2f7;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.modal>.body[data-v-53ab54d2]{\n  overflow-y: auto;\n  padding: 1.25rem;\n  height:92vh;\n}\n@media (min-width: 768px){\n.modal[data-v-53ab54d2]{\n    width: 50%;\n}\n}\n@media (min-width: 1024px){\n.modal[data-v-53ab54d2]{\n    width: 25%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/FactoryReset.vue?vue&type=template&id=e63ee2d0&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings/FactoryReset.vue?vue&type=template&id=e63ee2d0& ***!
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
  return _c(
    "div",
    {
      staticClass: "pb-8 md:w-7/12 mt-8 reveal-left",
      staticStyle: { "--delay": "0.1s" }
    },
    [
      _c("form", {
        attrs: { id: "factory_reset_form" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.activateFactoryReset($event)
          }
        }
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-8 reveal-up", staticStyle: { "--delay": "0.5s" } },
        [
          _c("text-input", {
            attrs: {
              label: "Confirm your password",
              error: _vm.$page.errors.password || "",
              type: "password",
              form: "factory_reset_form"
            },
            model: {
              value: _vm.password,
              callback: function($$v) {
                _vm.password = $$v
              },
              expression: "password"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex justify-end reveal-up",
          staticStyle: { "--delay": "0.7s" }
        },
        [
          _c(
            "primary-btn",
            {
              attrs: {
                color: "red",
                form: "factory_reset_form",
                width: "w-full md:w-auto",
                type: "submit"
              }
            },
            [_vm._v("Activate Factory Reset")]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-8" }, [
      _c(
        "h2",
        {
          staticClass: "text-lg font-bold reveal-up mb-3",
          staticStyle: { "--delay": "0.1s" }
        },
        [_vm._v("\n            Factory Reset Settings\n        ")]
      ),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "reveal-up", staticStyle: { "--delay": "0.3s" } },
        [
          _vm._v(
            "Please be warned that this action is irreversible as all topics, subjects, questions and collections will be wiped off while all settings will be returned to their default state"
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/General.vue?vue&type=template&id=3aab1e85&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings/General.vue?vue&type=template&id=3aab1e85& ***!
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
    {
      staticClass: "pb-8 md:w-7/12 mt-8 reveal-left",
      staticStyle: { "--delay": "0.1s" }
    },
    [
      _c("form", {
        attrs: { id: "general_settings_form" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitGeneralSetting($event)
          }
        }
      }),
      _vm._v(" "),
      _c("h2", { staticClass: "text-lg font-bold mb-8" }, [
        _vm._v("\n        General Settings\n    ")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "0.1s" } },
        [
          _c("text-input", {
            attrs: {
              error: _vm.$page.errors.app_name || "",
              form: "general_settings_form",
              label: "Application Name"
            },
            model: {
              value: _vm.general.app_name,
              callback: function($$v) {
                _vm.$set(_vm.general, "app_name", $$v)
              },
              expression: "general.app_name"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "0.3s" } },
        [
          _c("text-input", {
            attrs: {
              error: _vm.$page.errors.app_email || "",
              form: "general_settings_form",
              label: "Application Email"
            },
            model: {
              value: _vm.general.app_email,
              callback: function($$v) {
                _vm.$set(_vm.general, "app_email", $$v)
              },
              expression: "general.app_email"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "0.5s" } },
        [
          _c("text-input", {
            attrs: {
              error: _vm.$page.errors.app_url || "",
              form: "general_settings_form",
              label: "Application URL"
            },
            model: {
              value: _vm.general.app_url,
              callback: function($$v) {
                _vm.$set(_vm.general, "app_url", $$v)
              },
              expression: "general.app_url"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "0.5s" } },
        [
          _c("text-input", {
            attrs: {
              type: "number",
              error: _vm.$page.errors.naira_charge || "",
              form: "general_settings_form",
              label: "Payment Fee (Naira)"
            },
            model: {
              value: _vm.general.naira_charge,
              callback: function($$v) {
                _vm.$set(_vm.general, "naira_charge", $$v)
              },
              expression: "general.naira_charge"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "0.5s" } },
        [
          _c("text-input", {
            attrs: {
              type: "number",
              error: _vm.$page.errors.dollar_charge || "",
              form: "general_settings_form",
              label: "Payment Fee (Dollars)"
            },
            model: {
              value: _vm.general.dollar_charge,
              callback: function($$v) {
                _vm.$set(_vm.general, "dollar_charge", $$v)
              },
              expression: "general.dollar_charge"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "1s" } },
        [
          _c("switch-input", {
            attrs: {
              error: _vm.$page.errors.disable_client_profile_modification || "",
              label: "Disable Client Profile Modification"
            },
            model: {
              value: _vm.general.disable_client_profile_modification,
              callback: function($$v) {
                _vm.$set(
                  _vm.general,
                  "disable_client_profile_modification",
                  $$v
                )
              },
              expression: "general.disable_client_profile_modification"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "1.3s" } },
        [
          _c("switch-input", {
            attrs: {
              error: _vm.$page.errors.disable_client_registration || "",
              label: "Disable Client Modification"
            },
            model: {
              value: _vm.general.disable_client_registration,
              callback: function($$v) {
                _vm.$set(_vm.general, "disable_client_registration", $$v)
              },
              expression: "general.disable_client_registration"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-6 reveal-up", staticStyle: { "--delay": "1.5s" } },
        [
          _c("switch-input", {
            attrs: {
              error: _vm.$page.errors.recieve_client_emails || "",
              label: "Recieve Client Emails"
            },
            model: {
              value: _vm.general.recieve_client_emails,
              callback: function($$v) {
                _vm.$set(_vm.general, "recieve_client_emails", $$v)
              },
              expression: "general.recieve_client_emails"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex justify-end reveal-up",
          staticStyle: { "--delay": "1.7s" }
        },
        [
          _c(
            "primary-btn",
            {
              attrs: {
                form: "general_settings_form",
                width: "w-full md:w-auto",
                type: "submit"
              }
            },
            [_vm._v("Save Changes")]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/UserInterface.vue?vue&type=template&id=c90c3eea&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings/UserInterface.vue?vue&type=template&id=c90c3eea& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "pb-8 md:w-7/12 mt-8" }, [
    _c("form", {
      attrs: { id: "user_interface_form" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.updateUserInterface($event)
        }
      }
    }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-12 reveal-left", staticStyle: { "--delay": "0.1s" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "reveal-up", staticStyle: { "--delay": "0.5s" } },
          [
            _c(
              "select-input",
              {
                attrs: {
                  form: "user_interface_form",
                  value: _vm.color_scheme,
                  label: "Choose a color scheme",
                  error: _vm.$page.errors.color_scheme
                },
                model: {
                  value: _vm.color_scheme,
                  callback: function($$v) {
                    _vm.color_scheme = $$v
                  },
                  expression: "color_scheme"
                }
              },
              _vm._l(_vm.$page.color_schemes, function(color, index) {
                return _c(
                  "option",
                  {
                    key: index,
                    staticClass: "capitalize",
                    domProps: { value: color }
                  },
                  [_vm._v(_vm._s(color))]
                )
              }),
              0
            )
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-12 reveal-left", staticStyle: { "--delay": "0.3s" } },
      [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "reveal-up", staticStyle: { "--delay": "1.3s" } },
          [
            _c("file-input", {
              attrs: {
                form: "user_interface_form",
                error: _vm.$page.errors.dashboard_logo || "",
                label:
                  "File should be 500kb max and should be one of the following formats : JPG, PNG, JPEG"
              },
              on: {
                input: function($event) {
                  return _vm.setFileInput($event, "dashboard_logo")
                }
              }
            })
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-12 reveal-left", staticStyle: { "--delay": "0.5s" } },
      [
        _vm._m(2),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "reveal-up", staticStyle: { "--delay": "2.1s" } },
          [
            _c("file-input", {
              attrs: {
                form: "user_interface_form",
                error: _vm.$page.errors.auth_logo || "",
                label:
                  "File should be 500kb max and should be one of the following formats : JPG, PNG, JPEG"
              },
              on: {
                input: function($event) {
                  return _vm.setFileInput($event, "auth_logo")
                }
              }
            })
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "flex justify-end reveal-up",
        staticStyle: { "--delay": "2.3s" }
      },
      [
        _c(
          "primary-btn",
          {
            attrs: {
              form: "user_interface_form",
              width: "w-full md:w-auto",
              type: "submit"
            }
          },
          [_vm._v("Update User Interface")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-5" }, [
      _c(
        "h2",
        {
          staticClass: "text-lg font-bold mb-3 reveal-up",
          staticStyle: { "--delay": "0.1s" }
        },
        [_vm._v("\n                Color Scheme Settings\n            ")]
      ),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "reveal-up", staticStyle: { "--delay": "0.3s" } },
        [
          _vm._v(
            "Changing the color scheme of the software interface to suite your company branding"
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-5" }, [
      _c(
        "h2",
        {
          staticClass: "text-lg font-bold mb-3 reveal-up",
          staticStyle: { "--delay": "0.9s" }
        },
        [_vm._v("\n                Dashboard Logo\n            ")]
      ),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "reveal-up", staticStyle: { "--delay": "1.1s" } },
        [
          _vm._v(
            "Please use an image type with a high contrast color for your dashboard logo as it will be used on a low contrast background"
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-5" }, [
      _c(
        "h2",
        {
          staticClass: "text-lg font-bold reveal-up mb-3",
          staticStyle: { "--delay": "1.7s" }
        },
        [_vm._v("\n                Authentication Logo\n            ")]
      ),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "reveal-up", staticStyle: { "--delay": "1.9s" } },
        [
          _vm._v(
            "Please use an image type with a low contrast color for your authentication page logo as it will be used in all authentication pages which have a high contrast background"
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _vm.isOpen == true
    ? _c(
        "div",
        { staticClass: "container" },
        [
          _c("transition-group", { attrs: { tag: "div" } }, [
            _c("aside", {
              key: "backdrop",
              staticClass: "modal-backdrop",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.closeModal($event)
                }
              }
            }),
            _vm._v(" "),
            _c("div", { key: "modal", staticClass: "modal" }, [
              _vm.deactivateCloseBtn == false
                ? _c("header", [
                    _c(
                      "a",
                      {
                        staticClass: "text-sm flex items-center",
                        attrs: { href: "" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.closeModal($event)
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "flaticon-left-chevron" }),
                        _vm._v("  \n                "),
                        _c("span", [_vm._v("Back")])
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "body" }, [_vm._t("default")], 2)
            ])
          ])
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StepDetails.vue?vue&type=template&id=0258a5bb&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/StepDetails.vue?vue&type=template&id=0258a5bb& ***!
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
    { staticClass: "flex flex-wrap" },
    _vm._l(_vm.steps, function(step, name) {
      return _c(
        "div",
        {
          key: name,
          staticClass:
            "rounded-md inline-flex items-center border p-1 mr-3 mb-3"
        },
        [
          _c("span", { staticClass: "mr-3 capitalize" }, [
            _vm._v(_vm._s(name))
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "inline-flex justify-center items-center rounded-full w-6 h-6",
              class: [
                step === 1
                  ? "text-yellow-500 bg-yellow-200"
                  : "text-red-500 bg-red-200"
              ]
            },
            [
              step === 1
                ? _c("iconify-icon", { attrs: { icon: _vm.icons.check } })
                : _c("iconify-icon", { attrs: { icon: _vm.icons.fail } })
            ],
            1
          )
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Settings/FactoryReset.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Settings/FactoryReset.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FactoryReset_vue_vue_type_template_id_e63ee2d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FactoryReset.vue?vue&type=template&id=e63ee2d0& */ "./resources/js/Pages/Settings/FactoryReset.vue?vue&type=template&id=e63ee2d0&");
/* harmony import */ var _FactoryReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FactoryReset.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Settings/FactoryReset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FactoryReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FactoryReset_vue_vue_type_template_id_e63ee2d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FactoryReset_vue_vue_type_template_id_e63ee2d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Settings/FactoryReset.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Settings/FactoryReset.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Settings/FactoryReset.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactoryReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FactoryReset.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/FactoryReset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactoryReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Settings/FactoryReset.vue?vue&type=template&id=e63ee2d0&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Settings/FactoryReset.vue?vue&type=template&id=e63ee2d0& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FactoryReset_vue_vue_type_template_id_e63ee2d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FactoryReset.vue?vue&type=template&id=e63ee2d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/FactoryReset.vue?vue&type=template&id=e63ee2d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FactoryReset_vue_vue_type_template_id_e63ee2d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FactoryReset_vue_vue_type_template_id_e63ee2d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Settings/General.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Settings/General.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _General_vue_vue_type_template_id_3aab1e85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General.vue?vue&type=template&id=3aab1e85& */ "./resources/js/Pages/Settings/General.vue?vue&type=template&id=3aab1e85&");
/* harmony import */ var _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./General.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Settings/General.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _General_vue_vue_type_template_id_3aab1e85___WEBPACK_IMPORTED_MODULE_0__["render"],
  _General_vue_vue_type_template_id_3aab1e85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Settings/General.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Settings/General.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Settings/General.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./General.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/General.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Settings/General.vue?vue&type=template&id=3aab1e85&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Settings/General.vue?vue&type=template&id=3aab1e85& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_3aab1e85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./General.vue?vue&type=template&id=3aab1e85& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/General.vue?vue&type=template&id=3aab1e85&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_3aab1e85___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_3aab1e85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Settings/UserInterface.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Settings/UserInterface.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserInterface_vue_vue_type_template_id_c90c3eea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserInterface.vue?vue&type=template&id=c90c3eea& */ "./resources/js/Pages/Settings/UserInterface.vue?vue&type=template&id=c90c3eea&");
/* harmony import */ var _UserInterface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserInterface.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Settings/UserInterface.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserInterface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserInterface_vue_vue_type_template_id_c90c3eea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserInterface_vue_vue_type_template_id_c90c3eea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Settings/UserInterface.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Settings/UserInterface.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Settings/UserInterface.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInterface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserInterface.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/UserInterface.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInterface_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Settings/UserInterface.vue?vue&type=template&id=c90c3eea&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Settings/UserInterface.vue?vue&type=template&id=c90c3eea& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInterface_vue_vue_type_template_id_c90c3eea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserInterface.vue?vue&type=template&id=c90c3eea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/UserInterface.vue?vue&type=template&id=c90c3eea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInterface_vue_vue_type_template_id_c90c3eea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInterface_vue_vue_type_template_id_c90c3eea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Modal.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Modal.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=53ab54d2&scoped=true& */ "./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js& */ "./resources/js/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css& */ "./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53ab54d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Modal.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Modal.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=template&id=53ab54d2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/StepDetails.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/StepDetails.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StepDetails_vue_vue_type_template_id_0258a5bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepDetails.vue?vue&type=template&id=0258a5bb& */ "./resources/js/components/StepDetails.vue?vue&type=template&id=0258a5bb&");
/* harmony import */ var _StepDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StepDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/StepDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StepDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StepDetails_vue_vue_type_template_id_0258a5bb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StepDetails_vue_vue_type_template_id_0258a5bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/StepDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/StepDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/StepDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StepDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StepDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StepDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StepDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/StepDetails.vue?vue&type=template&id=0258a5bb&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/StepDetails.vue?vue&type=template&id=0258a5bb& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepDetails_vue_vue_type_template_id_0258a5bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./StepDetails.vue?vue&type=template&id=0258a5bb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StepDetails.vue?vue&type=template&id=0258a5bb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepDetails_vue_vue_type_template_id_0258a5bb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepDetails_vue_vue_type_template_id_0258a5bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);