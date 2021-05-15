(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_layouts_LayoutWithBanner_vue"],{

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
/* harmony import */ var _sidebarComponents_AppPopularCategories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarComponents/AppPopularCategories */ "./resources/js/components/sidebarComponents/AppPopularCategories.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SidebarComponent.vue",
  components: {
    AppPopularCategories: _sidebarComponents_AppPopularCategories__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sidebarComponents/AppPopularCategories.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sidebarComponents/AppPopularCategories.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // name: "AppPopularCategories"
  computed: {
    categories: function categories() {
      return this.$store.getters['sidebarCategories/getCategories'];
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('sidebarCategories/loadCategories'); // console.log('www')
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/LayoutWithBanner.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/LayoutWithBanner.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_SidebarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/SidebarComponent */ "./resources/js/components/SidebarComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PostLayout",
  computed: {
    setComponent: function setComponent() {
      return this.$route.meta.content;
    }
  },
  components: {
    SidebarComponent: _components_SidebarComponent__WEBPACK_IMPORTED_MODULE_0__.default,
    'TheListCategoryPosts': function TheListCategoryPosts() {
      return __webpack_require__.e(/*! import() */ "resources_js_views_blog_TheListCategoryPosts_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../blog/TheListCategoryPosts */ "./resources/js/views/blog/TheListCategoryPosts.vue"));
    },
    'SinglePost': function SinglePost() {
      return __webpack_require__.e(/*! import() */ "resources_js_views_SinglePost_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../SinglePost */ "./resources/js/views/SinglePost.vue"));
    }
  },
  beforeMount: function beforeMount() {
    window.scrollTo(0, 0);
  },
  mounted: function mounted() {
    console.log(this.$route);
  }
});

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

/***/ "./resources/js/components/sidebarComponents/AppPopularCategories.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/sidebarComponents/AppPopularCategories.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppPopularCategories_vue_vue_type_template_id_78b939bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppPopularCategories.vue?vue&type=template&id=78b939bc&scoped=true& */ "./resources/js/components/sidebarComponents/AppPopularCategories.vue?vue&type=template&id=78b939bc&scoped=true&");
/* harmony import */ var _AppPopularCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppPopularCategories.vue?vue&type=script&lang=js& */ "./resources/js/components/sidebarComponents/AppPopularCategories.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AppPopularCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AppPopularCategories_vue_vue_type_template_id_78b939bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppPopularCategories_vue_vue_type_template_id_78b939bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "78b939bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sidebarComponents/AppPopularCategories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/LayoutWithBanner.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/layouts/LayoutWithBanner.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LayoutWithBanner_vue_vue_type_template_id_7217ca41_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutWithBanner.vue?vue&type=template&id=7217ca41&scoped=true& */ "./resources/js/views/layouts/LayoutWithBanner.vue?vue&type=template&id=7217ca41&scoped=true&");
/* harmony import */ var _LayoutWithBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutWithBanner.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/LayoutWithBanner.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _LayoutWithBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _LayoutWithBanner_vue_vue_type_template_id_7217ca41_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _LayoutWithBanner_vue_vue_type_template_id_7217ca41_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7217ca41",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/LayoutWithBanner.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/sidebarComponents/AppPopularCategories.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/sidebarComponents/AppPopularCategories.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppPopularCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppPopularCategories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sidebarComponents/AppPopularCategories.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppPopularCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/layouts/LayoutWithBanner.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/layouts/LayoutWithBanner.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutWithBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LayoutWithBanner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/LayoutWithBanner.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutWithBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/sidebarComponents/AppPopularCategories.vue?vue&type=template&id=78b939bc&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/sidebarComponents/AppPopularCategories.vue?vue&type=template&id=78b939bc&scoped=true& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppPopularCategories_vue_vue_type_template_id_78b939bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppPopularCategories_vue_vue_type_template_id_78b939bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppPopularCategories_vue_vue_type_template_id_78b939bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppPopularCategories.vue?vue&type=template&id=78b939bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sidebarComponents/AppPopularCategories.vue?vue&type=template&id=78b939bc&scoped=true&");


/***/ }),

/***/ "./resources/js/views/layouts/LayoutWithBanner.vue?vue&type=template&id=7217ca41&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/layouts/LayoutWithBanner.vue?vue&type=template&id=7217ca41&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutWithBanner_vue_vue_type_template_id_7217ca41_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutWithBanner_vue_vue_type_template_id_7217ca41_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutWithBanner_vue_vue_type_template_id_7217ca41_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LayoutWithBanner.vue?vue&type=template&id=7217ca41&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/LayoutWithBanner.vue?vue&type=template&id=7217ca41&scoped=true&");


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
  return _c("div", { staticClass: "col-lg-4 sidebar-widgets" }, [
    _c(
      "div",
      { staticClass: "widget-wrap" },
      [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("AppPopularCategories"),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _vm._m(4)
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
    return _c("div", { staticClass: "single-sidebar-widget search-widget" }, [
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
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "single-sidebar-widget instafeed-widget" },
      [
        _c("h4", { staticClass: "instafeed-title" }, [_vm._v("Instagram")]),
        _vm._v(" "),
        _c("ul", { staticClass: "instafeed d-flex flex-wrap" }, [
          _c("li", [
            _c("img", { attrs: { src: "/img/blog/instagram/i1.jpg", alt: "" } })
          ]),
          _vm._v(" "),
          _c("li", [
            _c("img", { attrs: { src: "/img/blog/instagram/i2.jpg", alt: "" } })
          ]),
          _vm._v(" "),
          _c("li", [
            _c("img", { attrs: { src: "/img/blog/instagram/i3.jpg", alt: "" } })
          ]),
          _vm._v(" "),
          _c("li", [
            _c("img", { attrs: { src: "/img/blog/instagram/i4.jpg", alt: "" } })
          ]),
          _vm._v(" "),
          _c("li", [
            _c("img", { attrs: { src: "/img/blog/instagram/i5.jpg", alt: "" } })
          ]),
          _vm._v(" "),
          _c("li", [
            _c("img", { attrs: { src: "/img/blog/instagram/i6.jpg", alt: "" } })
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "single-sidebar-widget popular-post-widget" },
      [
        _c("h4", { staticClass: "popular-title" }, [_vm._v("Popular Posts")]),
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
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "single-sidebar-widget newsletter-widget" },
      [
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
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "single-sidebar-widget share-widget" }, [
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sidebarComponents/AppPopularCategories.vue?vue&type=template&id=78b939bc&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sidebarComponents/AppPopularCategories.vue?vue&type=template&id=78b939bc&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.categories
    ? _c("div", { staticClass: "single-sidebar-widget post-category-widget" }, [
        _c("h4", { staticClass: "category-title" }, [_vm._v("Категории")]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "cat-list mt-20" },
          _vm._l(_vm.categories, function(category) {
            return _c(
              "li",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "d-flex justify-content-between",
                    attrs: { to: "#" }
                  },
                  [
                    _c("p", [_vm._v(_vm._s(category.title))]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(category.posts_count))])
                  ]
                )
              ],
              1
            )
          }),
          0
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/LayoutWithBanner.vue?vue&type=template&id=7217ca41&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/layouts/LayoutWithBanner.vue?vue&type=template&id=7217ca41&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "post" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "blog_area section-gap single-post-area" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "row" },
          [
            _c(_vm.setComponent, { tag: "component" }),
            _vm._v(" "),
            _c("sidebar-component")
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "banner-area relative" }, [
      _c("div", { staticClass: "overlay overlay-bg" }),
      _vm._v(" "),
      _c("div", { staticClass: "banner-content text-center" }, [
        _c("h1", [_vm._v("Blog Details")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Elementum libero hac leo integer. Risus hac parturient feugiat litora "
          ),
          _c("br"),
          _vm._v(" cursus hendrerit bibendum per ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);