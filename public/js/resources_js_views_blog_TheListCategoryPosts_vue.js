(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_blog_TheListCategoryPosts_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppPagination.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppPagination.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    cur_page: {
      type: Number,
      "default": 1
    },
    last_page: {
      type: Number
    }
  },
  methods: {
    initPagination: function initPagination(page) {
      console.log(page);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/blog/TheListCategoryPosts.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/blog/TheListCategoryPosts.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppPagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/AppPagination */ "./resources/js/components/AppPagination.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import ListsElementsComponent from "../components/ListsElementsComponent";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    categories: function categories() {
      console.log(this.$store.getters['getCategories'], 'sssss');
      return this.$store.getters['getCategories'];
    },
    cur_page: function cur_page() {
      return this.$store.state['cur_page'];
    },
    last_page: function last_page() {
      return this.$store.state['last_page'];
    }
  },
  components: {
    AppPagination: _components_AppPagination__WEBPACK_IMPORTED_MODULE_0__.default
  },
  beforeMount: function beforeMount() {
    this.$store.dispatch('getListsElements', {
      type: 'categories',
      path: 'categories/getCategoryPosts/' + this.$route.params.slug,
      page: this.$route.query.page
    });
    console.log(this.elements, 'categ');
  }
});

/***/ }),

/***/ "./resources/js/components/AppPagination.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/AppPagination.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppPagination_vue_vue_type_template_id_4da56ec0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppPagination.vue?vue&type=template&id=4da56ec0&scoped=true& */ "./resources/js/components/AppPagination.vue?vue&type=template&id=4da56ec0&scoped=true&");
/* harmony import */ var _AppPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppPagination.vue?vue&type=script&lang=js& */ "./resources/js/components/AppPagination.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AppPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AppPagination_vue_vue_type_template_id_4da56ec0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppPagination_vue_vue_type_template_id_4da56ec0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4da56ec0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppPagination.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/blog/TheListCategoryPosts.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/blog/TheListCategoryPosts.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheListCategoryPosts_vue_vue_type_template_id_13436c04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheListCategoryPosts.vue?vue&type=template&id=13436c04&scoped=true& */ "./resources/js/views/blog/TheListCategoryPosts.vue?vue&type=template&id=13436c04&scoped=true&");
/* harmony import */ var _TheListCategoryPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheListCategoryPosts.vue?vue&type=script&lang=js& */ "./resources/js/views/blog/TheListCategoryPosts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TheListCategoryPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TheListCategoryPosts_vue_vue_type_template_id_13436c04_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TheListCategoryPosts_vue_vue_type_template_id_13436c04_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "13436c04",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/blog/TheListCategoryPosts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppPagination.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/AppPagination.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppPagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppPagination.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/blog/TheListCategoryPosts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/blog/TheListCategoryPosts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheListCategoryPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheListCategoryPosts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/blog/TheListCategoryPosts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheListCategoryPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/AppPagination.vue?vue&type=template&id=4da56ec0&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/AppPagination.vue?vue&type=template&id=4da56ec0&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppPagination_vue_vue_type_template_id_4da56ec0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppPagination_vue_vue_type_template_id_4da56ec0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppPagination_vue_vue_type_template_id_4da56ec0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppPagination.vue?vue&type=template&id=4da56ec0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppPagination.vue?vue&type=template&id=4da56ec0&scoped=true&");


/***/ }),

/***/ "./resources/js/views/blog/TheListCategoryPosts.vue?vue&type=template&id=13436c04&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/blog/TheListCategoryPosts.vue?vue&type=template&id=13436c04&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheListCategoryPosts_vue_vue_type_template_id_13436c04_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheListCategoryPosts_vue_vue_type_template_id_13436c04_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheListCategoryPosts_vue_vue_type_template_id_13436c04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheListCategoryPosts.vue?vue&type=template&id=13436c04&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/blog/TheListCategoryPosts.vue?vue&type=template&id=13436c04&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppPagination.vue?vue&type=template&id=4da56ec0&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppPagination.vue?vue&type=template&id=4da56ec0&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c(
        "nav",
        { staticClass: "blog-pagination justify-content-center d-flex" },
        [
          _c(
            "ul",
            { staticClass: "pagination" },
            [
              _vm._m(0),
              _vm._v(" "),
              _vm._l(_vm.last_page, function(page) {
                return _c("li", { key: page, staticClass: "page-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "page-link",
                      attrs: { href: "?page=" + page },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.initPagination(page)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(page) +
                          "\n                        "
                      )
                    ]
                  )
                ])
              }),
              _vm._v(" "),
              _vm._m(1)
            ],
            2
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "page-item" }, [
      _c(
        "a",
        {
          staticClass: "page-link",
          attrs: { href: "#", "aria-label": "Previous" }
        },
        [
          _c("span", { attrs: { "aria-hidden": "true" } }, [
            _c("span", { staticClass: "ti-arrow-left" })
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "page-item" }, [
      _c(
        "a",
        {
          staticClass: "page-link",
          attrs: { href: "#", "aria-label": "Next" }
        },
        [
          _c("span", { attrs: { "aria-hidden": "true" } }, [
            _c("span", { staticClass: "ti-arrow-right" })
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/blog/TheListCategoryPosts.vue?vue&type=template&id=13436c04&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/blog/TheListCategoryPosts.vue?vue&type=template&id=13436c04&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-lg-8" }, [
    !_vm.categories || !_vm.categories.length
      ? _c("div", [_vm._v("Нет постов!")])
      : _c(
          "div",
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-6 col-md-6" },
                _vm._l(_vm.categories[0].posts, function(post, idx) {
                  return idx % 2 === 0
                    ? _c("div", { staticClass: "single-amenities" }, [
                        _c("div", { staticClass: "amenities-thumb" }, [
                          _c("img", {
                            staticClass: "img-fluid w-100",
                            attrs: { src: post.thumbnail, alt: "" }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "amenities-details" }, [
                          _c(
                            "h5",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "Show-post",
                                      params: { slug: post.slug }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(post.title) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "amenities-meta mb-10" }, [
                            _c("a", { attrs: { href: "#" } }, [
                              _c("span", { staticClass: "ti-calendar" }),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm._f("dateFormat_Do_MMMM_YYYY")(
                                      post.created_at
                                    )
                                  ) +
                                  "\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(0, true)
                          ]),
                          _vm._v(" "),
                          _c("p", {
                            domProps: { innerHTML: _vm._s(post.description) }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-between mt-20"
                            },
                            [
                              _c(
                                "div",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "blog-post-btn",
                                      attrs: {
                                        to: {
                                          name: "Show-post",
                                          params: { slug: post.slug }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Читать "
                                      ),
                                      _c("span", {
                                        staticClass: "ti-arrow-right"
                                      })
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "category" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "TheListCategoryPosts",
                                          params: {
                                            slug: _vm.categories[0].slug
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _c("span", {
                                        staticClass: "ti-folder mr-1"
                                      }),
                                      _vm._v(
                                        " " +
                                          _vm._s(_vm.categories[0].title) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      ])
                    : _vm._e()
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6 col-md-6" },
                _vm._l(_vm.categories[0].posts, function(post, idx) {
                  return idx % 2 !== 0
                    ? _c("div", { staticClass: "single-amenities" }, [
                        _c("div", { staticClass: "amenities-thumb" }, [
                          _c("img", {
                            staticClass: "img-fluid w-100",
                            attrs: { src: post.thumbnail, alt: "" }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "amenities-details" }, [
                          _c(
                            "h5",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "Show-post",
                                      params: { slug: post.slug }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(post.title) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "amenities-meta mb-10" }, [
                            _c("a", { attrs: { href: "#" } }, [
                              _c("span", { staticClass: "ti-calendar" }),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm._f("dateFormat_Do_MMMM_YYYY")(
                                      post.created_at
                                    )
                                  ) +
                                  "\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(1, true)
                          ]),
                          _vm._v(" "),
                          _c("p", {
                            domProps: { innerHTML: _vm._s(post.description) }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-between mt-20"
                            },
                            [
                              _c(
                                "div",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "blog-post-btn",
                                      attrs: {
                                        to: {
                                          name: "Show-post",
                                          params: { slug: post.slug }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Читать "
                                      ),
                                      _c("span", {
                                        staticClass: "ti-arrow-right"
                                      })
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "category" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "TheListCategoryPosts",
                                          params: {
                                            slug: _vm.categories[0].slug
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _c("span", {
                                        staticClass: "ti-folder mr-1"
                                      }),
                                      _vm._v(
                                        " " +
                                          _vm._s(_vm.categories[0].title) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      ])
                    : _vm._e()
                }),
                0
              )
            ]),
            _vm._v(" "),
            _vm.last_page > 1
              ? _c("AppPagination", {
                  attrs: { cur_page: _vm.cur_page, last_page: _vm.last_page }
                })
              : _vm._e()
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
    return _c("a", { staticClass: "ml-20", attrs: { href: "#" } }, [
      _c("span", { staticClass: "ti-comment" }),
      _vm._v("05")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "ml-20", attrs: { href: "#" } }, [
      _c("span", { staticClass: "ti-comment" }),
      _vm._v("05")
    ])
  }
]
render._withStripped = true



/***/ })

}]);