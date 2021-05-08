(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Home_vue"],{

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
  name: "AppPagination"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostsComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostsComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppPagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppPagination */ "./resources/js/components/AppPagination.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PostsComponent.vue",
  computed: {
    posts: function posts() {
      // this.$store.dispatch('loadData', 'posts');
      return this.$store.getters['getPosts'];
    },
    cur_page: function cur_page() {
      return this.$store.state['cur_page'];
    },
    last_page: function last_page() {
      return this.$store.state['last_page'];
    }
  },
  components: {
    AppPagination: _AppPagination__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mounted: function mounted() {// console.log('main page');
    // this.$store.dispatch('loadData', 'posts');
    // console.log(this.posts)
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SidebarComponent.vue"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_SidebarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/SidebarComponent */ "./resources/js/components/SidebarComponent.vue");
/* harmony import */ var _components_PostsComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostsComponent */ "./resources/js/components/PostsComponent.vue");
//
//
//
//
//
//
//
//
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
  name: "Home.vue",
  components: {
    SidebarComponent: _components_SidebarComponent__WEBPACK_IMPORTED_MODULE_0__.default,
    PostsComponent: _components_PostsComponent__WEBPACK_IMPORTED_MODULE_1__.default
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

/***/ "./resources/js/components/PostsComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/PostsComponent.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PostsComponent_vue_vue_type_template_id_38048495_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostsComponent.vue?vue&type=template&id=38048495&scoped=true& */ "./resources/js/components/PostsComponent.vue?vue&type=template&id=38048495&scoped=true&");
/* harmony import */ var _PostsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/PostsComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PostsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PostsComponent_vue_vue_type_template_id_38048495_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PostsComponent_vue_vue_type_template_id_38048495_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "38048495",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PostsComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SidebarComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/SidebarComponent.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SidebarComponent_vue_vue_type_template_id_54833a28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarComponent.vue?vue&type=template&id=54833a28&scoped=true& */ "./resources/js/components/SidebarComponent.vue?vue&type=template&id=54833a28&scoped=true&");
/* harmony import */ var _SidebarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/SidebarComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SidebarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SidebarComponent_vue_vue_type_template_id_54833a28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SidebarComponent_vue_vue_type_template_id_54833a28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "54833a28",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SidebarComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604&scoped=true& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "63cd6604",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
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

/***/ "./resources/js/components/PostsComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/PostsComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostsComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/SidebarComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/SidebarComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/PostsComponent.vue?vue&type=template&id=38048495&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/PostsComponent.vue?vue&type=template&id=38048495&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsComponent_vue_vue_type_template_id_38048495_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsComponent_vue_vue_type_template_id_38048495_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostsComponent_vue_vue_type_template_id_38048495_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostsComponent.vue?vue&type=template&id=38048495&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostsComponent.vue?vue&type=template&id=38048495&scoped=true&");


/***/ }),

/***/ "./resources/js/components/SidebarComponent.vue?vue&type=template&id=54833a28&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/SidebarComponent.vue?vue&type=template&id=54833a28&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarComponent_vue_vue_type_template_id_54833a28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarComponent_vue_vue_type_template_id_54833a28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarComponent_vue_vue_type_template_id_54833a28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarComponent.vue?vue&type=template&id=54833a28&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarComponent.vue?vue&type=template&id=54833a28&scoped=true&");


/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&");


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
                return _c(
                  "li",
                  { key: page, staticClass: "page-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "page-link",
                        attrs: { to: { name: "Home", query: { page: page } } }
                      },
                      [_vm._v(_vm._s(page))]
                    )
                  ],
                  1
                )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostsComponent.vue?vue&type=template&id=38048495&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PostsComponent.vue?vue&type=template&id=38048495&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "col-lg-8" },
    [
      !_vm.posts
        ? _c("div", [_vm._v("Нет постов!")])
        : _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-lg-6 col-md-6" },
              _vm._l(_vm.posts, function(post, idx) {
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
                                  "\n                            " +
                                    _vm._s(post.title) +
                                    "\n                        "
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
                              "\n                            " +
                                _vm._s(
                                  _vm._f("dateFormat_Do_MMMM_YYYY")(
                                    post.created_at
                                  )
                                ) +
                                "\n                        "
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
                            staticClass: "d-flex justify-content-between mt-20"
                          },
                          [
                            _vm._m(1, true),
                            _vm._v(" "),
                            _c("div", { staticClass: "category" }, [
                              _c("a", { attrs: { href: "#" } }, [
                                _c("span", { staticClass: "ti-folder mr-1" }),
                                _vm._v(
                                  " " +
                                    _vm._s(post.category.title) +
                                    "\n                            "
                                )
                              ])
                            ])
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
              _vm._l(_vm.posts, function(post, idx) {
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
                                  "\n                            " +
                                    _vm._s(post.title) +
                                    "\n                        "
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
                              "\n                            " +
                                _vm._s(
                                  _vm._f("dateFormat_Do_MMMM_YYYY")(
                                    post.created_at
                                  )
                                ) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(2, true)
                        ]),
                        _vm._v(" "),
                        _c("p", {
                          domProps: { innerHTML: _vm._s(post.description) }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex justify-content-between mt-20"
                          },
                          [
                            _vm._m(3, true),
                            _vm._v(" "),
                            _c("div", { staticClass: "category" }, [
                              _c("a", { attrs: { href: "#" } }, [
                                _c("span", { staticClass: "ti-folder mr-1" }),
                                _vm._v(
                                  " " +
                                    _vm._s(post.category.title) +
                                    "\n                            "
                                )
                              ])
                            ])
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
      _c("AppPagination", {
        attrs: { cur_page: _vm.cur_page, last_page: _vm.last_page }
      })
    ],
    1
  )
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
    return _c("div", [
      _c("a", { staticClass: "blog-post-btn", attrs: { href: "#" } }, [
        _vm._v(
          "\n                                Читать\n                                "
        ),
        _c("span", { staticClass: "ti-arrow-right" })
      ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("a", { staticClass: "blog-post-btn", attrs: { href: "#" } }, [
        _vm._v("\n                                Читать "),
        _c("span", { staticClass: "ti-arrow-right" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarComponent.vue?vue&type=template&id=54833a28&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarComponent.vue?vue&type=template&id=54833a28&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-4 sidebar-widgets" }, [
      _c("div", { staticClass: "widget-wrap" }, [
        _c("div", { staticClass: "single-sidebar-widget search-widget" }, [
          _c("form", { staticClass: "search-form", attrs: { action: "#" } }, [
            _c("input", {
              attrs: {
                placeholder: "Search Posts",
                name: "search",
                type: "text",
                onfocus: "this.placeholder = ''",
                onblur: "this.placeholder = 'Search Posts'"
              }
            }),
            _vm._v(" "),
            _c("button", { attrs: { type: "submit" } }, [
              _c("i", { staticClass: "fa fa-search" })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "single-sidebar-widget instafeed-widget" }, [
          _c("h4", { staticClass: "instafeed-title" }, [_vm._v("Instagram")]),
          _vm._v(" "),
          _c("ul", { staticClass: "instafeed d-flex flex-wrap" }, [
            _c("li", [
              _c("img", {
                attrs: { src: "/img/blog/instagram/i1.jpg", alt: "" }
              })
            ]),
            _vm._v(" "),
            _c("li", [
              _c("img", {
                attrs: { src: "/img/blog/instagram/i2.jpg", alt: "" }
              })
            ]),
            _vm._v(" "),
            _c("li", [
              _c("img", {
                attrs: { src: "/img/blog/instagram/i3.jpg", alt: "" }
              })
            ]),
            _vm._v(" "),
            _c("li", [
              _c("img", {
                attrs: { src: "/img/blog/instagram/i4.jpg", alt: "" }
              })
            ]),
            _vm._v(" "),
            _c("li", [
              _c("img", {
                attrs: { src: "/img/blog/instagram/i5.jpg", alt: "" }
              })
            ]),
            _vm._v(" "),
            _c("li", [
              _c("img", {
                attrs: { src: "/img/blog/instagram/i6.jpg", alt: "" }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "single-sidebar-widget post-category-widget" },
          [
            _c("h4", { staticClass: "category-title" }, [_vm._v("Catgories")]),
            _vm._v(" "),
            _c("ul", { staticClass: "cat-list mt-20" }, [
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "d-flex justify-content-between",
                    attrs: { href: "#" }
                  },
                  [
                    _c("p", [_vm._v("Fashion")]),
                    _vm._v(" "),
                    _c("p", [_vm._v("59")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "d-flex justify-content-between",
                    attrs: { href: "#" }
                  },
                  [
                    _c("p", [_vm._v("Travel")]),
                    _vm._v(" "),
                    _c("p", [_vm._v("09")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "d-flex justify-content-between",
                    attrs: { href: "#" }
                  },
                  [
                    _c("p", [_vm._v("Lifestyle")]),
                    _vm._v(" "),
                    _c("p", [_vm._v("24")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "d-flex justify-content-between",
                    attrs: { href: "#" }
                  },
                  [
                    _c("p", [_vm._v("Shopping")]),
                    _vm._v(" "),
                    _c("p", [_vm._v("44")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "d-flex justify-content-between",
                    attrs: { href: "#" }
                  },
                  [
                    _c("p", [_vm._v("Food")]),
                    _vm._v(" "),
                    _c("p", [_vm._v("15")])
                  ]
                )
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "single-sidebar-widget popular-post-widget" },
          [
            _c("h4", { staticClass: "popular-title" }, [
              _vm._v("Popular Posts")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "popular-post-list" }, [
              _c("div", { staticClass: "single-post-list" }, [
                _c("div", { staticClass: "thumb" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: { src: "/img/blog/pp1.jpg", alt: "" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "details mt-20" }, [
                  _c("a", { attrs: { href: "blog-single.html" } }, [
                    _c("h6", [
                      _vm._v(
                        "Retro-electric 1967 Ford Mustang\n                                revealed in Russia"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Mate Winston | Dec 15")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "single-post-list" }, [
                _c("div", { staticClass: "thumb" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: { src: "/img/blog/pp2.jpg", alt: "" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "details mt-20" }, [
                  _c("a", { attrs: { href: "blog-single.html" } }, [
                    _c("h6", [
                      _vm._v(
                        "Unsettling trend of food safety at\n                                sports stadiums uncovered"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Mate Winston | Dec 15")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "single-post-list" }, [
                _c("div", { staticClass: "thumb" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: { src: "/img/blog/pp3.jpg", alt: "" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "details mt-20" }, [
                  _c("a", { attrs: { href: "blog-single.html" } }, [
                    _c("h6", [
                      _vm._v(
                        "Christmas cottage from the Holiday\n                                flick selling for people"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Mate Winston | Dec 15")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "single-post-list" }, [
                _c("div", { staticClass: "thumb" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: { src: "/img/blog/pp4.jpg", alt: "" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "details mt-20" }, [
                  _c("a", { attrs: { href: "blog-single.html" } }, [
                    _c("h6", [
                      _vm._v(
                        "Home improvement advice every\n                                homeowner needs to know"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Mate Winston | Dec 15")])
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "single-sidebar-widget newsletter-widget" }, [
          _c("h4", { staticClass: "newsletter-title" }, [_vm._v("Newsletter")]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group mt-30" }, [
            _c("div", { staticClass: "col-autos" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "inlineFormInputGroup",
                  placeholder: "Enter email",
                  onfocus: "this.placeholder = ''",
                  onblur: "this.placeholder = 'Enter email'"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "bbtns d-block mt-20 w-100" }, [
            _vm._v("Subcribe")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "single-sidebar-widget share-widget" }, [
          _c("h4", { staticClass: "share-title" }, [_vm._v("Share this post")]),
          _vm._v(" "),
          _c("div", { staticClass: "social-icons mt-20" }, [
            _c("a", { attrs: { href: "#" } }, [
              _c("span", { staticClass: "ti-facebook" })
            ]),
            _vm._v(" "),
            _c("a", { attrs: { href: "#" } }, [
              _c("span", { staticClass: "ti-twitter" })
            ]),
            _vm._v(" "),
            _c("a", { attrs: { href: "#" } }, [
              _c("span", { staticClass: "ti-pinterest" })
            ]),
            _vm._v(" "),
            _c("a", { attrs: { href: "#" } }, [
              _c("span", { staticClass: "ti-instagram" })
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "blog-post-area section-gap relative" }, [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "row" },
        [_c("posts-component"), _vm._v(" "), _c("sidebar-component")],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);