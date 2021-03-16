(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@iconify/icons-feather/more-vertical.js":
/*!**************************************************************!*\
  !*** ./node_modules/@iconify/icons-feather/more-vertical.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"12\" cy=\"5\" r=\"1\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/></g>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-feather/refresh-cw.js":
/*!***********************************************************!*\
  !*** ./node_modules/@iconify/icons-feather/refresh-cw.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M23 4v6h-6\"/><path d=\"M1 20v-6h6\"/><path d=\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\"/></g>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-feather/trash.js":
/*!******************************************************!*\
  !*** ./node_modules/@iconify/icons-feather/trash.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 6h18\"/><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/></g>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/List.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Users/List.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layout/Layout */ "./resources/js/Layout/Layout.vue");
/* harmony import */ var _iconify_icons_feather_more_vertical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-feather/more-vertical */ "./node_modules/@iconify/icons-feather/more-vertical.js");
/* harmony import */ var _iconify_icons_feather_more_vertical__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_feather_more_vertical__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_feather_trash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-feather/trash */ "./node_modules/@iconify/icons-feather/trash.js");
/* harmony import */ var _iconify_icons_feather_trash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_feather_trash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_feather_refresh_cw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-feather/refresh-cw */ "./node_modules/@iconify/icons-feather/refresh-cw.js");
/* harmony import */ var _iconify_icons_feather_refresh_cw__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_feather_refresh_cw__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ViewUsers',
  layout: _Layout_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    Modal: function Modal() {
      return Promise.all(/*! import() | user_page */[__webpack_require__.e(6), __webpack_require__.e("user_page")]).then(__webpack_require__.bind(null, /*! ../../components/Modal */ "./resources/js/components/Modal.vue"));
    },
    UserList: function UserList() {
      return Promise.all(/*! import() | user_page */[__webpack_require__.e(6), __webpack_require__.e("user_page")]).then(__webpack_require__.bind(null, /*! ../../components/UserList */ "./resources/js/components/UserList.vue"));
    },
    CreateUser: function CreateUser() {
      return Promise.all(/*! import() | user_page */[__webpack_require__.e(6), __webpack_require__.e("user_page")]).then(__webpack_require__.bind(null, /*! ./UserModify */ "./resources/js/Pages/Users/UserModify.vue"));
    }
  },
  data: function data() {
    return {
      modalIsOpen: false,
      icons: {
        moreVertical: _iconify_icons_feather_more_vertical__WEBPACK_IMPORTED_MODULE_1___default.a,
        trash: _iconify_icons_feather_trash__WEBPACK_IMPORTED_MODULE_2___default.a,
        refresh: _iconify_icons_feather_refresh_cw__WEBPACK_IMPORTED_MODULE_3___default.a
      },
      searchText: ''
    };
  },
  computed: {
    getUsers: function getUsers() {
      return this.$page.user.data ? this.$page.user.data : [];
    },
    nextLink: function nextLink() {
      return this.$page.user.next_page_url || null;
    },
    previousLink: function previousLink() {
      return this.$page.user.prev_page_url || null;
    },
    currentPageNumber: function currentPageNumber() {
      return this.$page.user.current_page || 1;
    }
  },
  methods: {
    paginate: function paginate(pageNumber) {
      var vm = this;
      vm.$inertia.visit(this.$route.relativePath('users.view'), {
        method: 'get',
        data: {
          search: vm.searchText,
          page: pageNumber
        }
      });
    },
    openModal: function openModal() {
      this.modalIsOpen = true;
    },
    refreshState: function refreshState() {
      this.modalIsOpen = false;
    },
    removeUser: function removeUser(userId) {
      var result = confirm("Are you sure you want to send this user to the recycle bin ?");

      if (result === true) {
        this.$inertia.post(this.$route.relativePath('users.remove', userId));
      }
    },
    deactivateUser: function deactivateUser(userId) {
      var result = confirm("Are you sure you want to deactivate the user ?");

      if (result === true) {
        this.$inertia.post(this.$route.relativePath('users.deactivate', userId));
      }
    },
    activateUser: function activateUser(userId) {
      console.log(userId);
      var result = confirm("Are you sure you want to activate the user ?");

      if (result === true) {
        this.$inertia.post(this.$route.relativePath('users.activate', userId));
      }
    },
    searchUsers: function searchUsers() {
      var vm = this;
      vm.$inertia.visit(this.$route.relativePath('users.view'), {
        method: 'get',
        data: {
          search: vm.searchText,
          page: vm.currentPageNumber
        }
      });
    }
  },
  mounted: function mounted() {
    console.log(this.$inertia);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/List.vue?vue&type=template&id=33a7b84e&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Users/List.vue?vue&type=template&id=33a7b84e& ***!
  \********************************************************************************************************************************************************************************************************/
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
        "modal",
        {
          attrs: { isOpen: _vm.modalIsOpen },
          on: {
            "update:isOpen": function($event) {
              _vm.modalIsOpen = $event
            },
            "update:is-open": function($event) {
              _vm.modalIsOpen = $event
            }
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "mb-10 reveal-left",
              staticStyle: { "--delay": "0.1s" }
            },
            [
              _c("h3", { staticClass: "text-lg font-extrabold" }, [
                _vm._v("\n                Create New User\n            ")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-sm" }, [
                _vm._v("Create user biodata, avatar, password and permissions")
              ])
            ]
          ),
          _vm._v(" "),
          _c("create-user", {
            attrs: { actionURLPath: _vm.$route.relativePath("users.create") },
            on: { completeRegistration: _vm.refreshState }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "mb-10" },
        [
          _c("title-board", {
            attrs: {
              boardTitle: "Users",
              boardText: "Add, delete and manage users and user persmissions",
              hostName: _vm.$page.auth.settings.app_url,
              boardImgLink: "img/board_img/user.svg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        {
          staticClass:
            "rounded-md bg-white flex flex-col md:flex-row md:justify-between items-center shadow-sm p-8 md:p-12 reveal-up mb-10"
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-full md:w-auto mt-3 md:mt-0 border" },
            [
              _c(
                "primary-btn",
                {
                  attrs: { width: "w-full md:w-auto" },
                  on: { click: _vm.openModal }
                },
                [_vm._v("Create New User")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "section",
        {
          staticClass:
            "rounded-md bg-white shadow-sm px-2 py-8 md:p-12 reveal-up",
          staticStyle: { "--delay": "0.5s" }
        },
        [
          _c(
            "div",
            { staticClass: "mb-5 flex items-center mx-2" },
            [
              _c("form", {
                attrs: { action: "", id: "user_search" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.searchUsers($event)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex-grow mr-2" },
                [
                  _c("text-input", {
                    attrs: { type: "search", form: "user_search" },
                    model: {
                      value: _vm.searchText,
                      callback: function($$v) {
                        _vm.searchText = $$v
                      },
                      expression: "searchText"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "secondary-btn",
                { attrs: { type: "submit", form: "user_search" } },
                [_vm._v("\n                Search\n            ")]
              ),
              _vm._v(" "),
              _c(
                "dropdown",
                [
                  _c(
                    "secondary-btn",
                    { attrs: { extraClass: "ml-2", color: "gray" } },
                    [
                      _c("iconify-icon", {
                        attrs: { icon: _vm.icons.moreVertical }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("template", { slot: "box" }, [
                    _c(
                      "div",
                      { staticClass: "inline-flex flex-col items-start" },
                      [
                        _c(
                          "inertia-link",
                          {
                            staticClass:
                              "mb-2 text-xs flex items-center text-gray-500 hover:text-gray-700",
                            attrs: {
                              href: _vm.$route.relativePath("users.recycle")
                            }
                          },
                          [
                            _c("iconify-icon", {
                              attrs: { icon: _vm.icons.trash }
                            }),
                            _vm._v(" "),
                            _c("p", { staticClass: "ml-2" }, [
                              _vm._v("Recycle Bin")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c(
                              "inertia-link",
                              {
                                staticClass:
                                  "mb-2 text-xs flex items-center text-gray-500 hover:text-gray-700",
                                attrs: {
                                  href: _vm.$route.relativePath("users.view")
                                }
                              },
                              [
                                _c("iconify-icon", {
                                  attrs: { icon: _vm.icons.refresh }
                                }),
                                _vm._v(" "),
                                _c("p", { staticClass: "ml-2" }, [
                                  _vm._v("Refresh List")
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.getUsers.length > 0
            ? [
                _c(
                  "div",
                  { staticClass: "flex flex-wrap justify-center mb-5" },
                  _vm._l(_vm.getUsers, function(user, index) {
                    return _c("user-list", {
                      key: index,
                      attrs: {
                        delay: index,
                        is_active: user.is_active == 1 ? true : false,
                        firstName: user.first_name,
                        lastName: user.last_name,
                        email: user.email,
                        viewLink: _vm.$route.relativePath(
                          "users.show",
                          user.id || 0
                        ),
                        imageLink: user.avatar || ""
                      },
                      on: {
                        removeUser: function($event) {
                          return _vm.removeUser(user.id)
                        },
                        deactivateUser: function($event) {
                          return _vm.deactivateUser(user.id)
                        },
                        activateUser: function($event) {
                          return _vm.activateUser(user.id)
                        }
                      }
                    })
                  }),
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex items-center justify-end" },
                  [
                    _vm.previousLink !== null
                      ? _c(
                          "secondary-btn",
                          {
                            attrs: { extraClass: "mr-2" },
                            on: {
                              click: function($event) {
                                return _vm.paginate(_vm.currentPageNumber - 1)
                              }
                            }
                          },
                          [_vm._v("Previous")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.nextLink !== null
                      ? _c(
                          "secondary-btn",
                          {
                            on: {
                              click: function($event) {
                                return _vm.paginate(_vm.currentPageNumber + 1)
                              }
                            }
                          },
                          [_vm._v("Next\n                ")]
                        )
                      : _vm._e()
                  ],
                  1
                )
              ]
            : [
                _c(
                  "div",
                  { staticClass: "p-5 text-center" },
                  [
                    _c("h4", { staticClass: "text-lg font-extrabold mb-5" }, [
                      _vm._v("No user found")
                    ]),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "text-sm text-primary-400 hover:text-primary-600",
                        attrs: { href: _vm.$route.relativePath("users.view") }
                      },
                      [_vm._v("Reload list")]
                    )
                  ],
                  1
                )
              ]
        ],
        2
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
    return _c("div", { staticClass: "w-auto inline-block" }, [
      _c("h3", { staticClass: "text-lg font-extrabold" }, [_vm._v("New User")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-sm" }, [
        _vm._v("Create new users and grant them permissions")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Users/List.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Users/List.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_33a7b84e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=33a7b84e& */ "./resources/js/Pages/Users/List.vue?vue&type=template&id=33a7b84e&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Users/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_33a7b84e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_33a7b84e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Users/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Users/List.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Users/List.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Users/List.vue?vue&type=template&id=33a7b84e&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Users/List.vue?vue&type=template&id=33a7b84e& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_33a7b84e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=33a7b84e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/List.vue?vue&type=template&id=33a7b84e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_33a7b84e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_33a7b84e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);