(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_store_modules_admin_module_js"],{

/***/ "./resources/js/store/modules/admin.module.js":
/*!****************************************************!*\
  !*** ./resources/js/store/modules/admin.module.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  namespaced: true,
  state: {
    posts: null,
    categories: null,
    tags: null
  },
  getters: {
    getCategories: function getCategories(state) {
      return state.categories;
    }
  },
  mutations: {
    saveTags: function saveTags(state, response) {
      state.tags = response;
    }
  },
  actions: {
    loadData: function loadData(_ref, type) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var state, dispatch, rootState, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state = _ref.state, dispatch = _ref.dispatch, rootState = _ref.rootState;
                console.log(rootState, 'adminModule');
                _this.loading = true;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/".concat(type)).then(function (response) {
                  if (response.data.errors) return {
                    errors: response.data.errors
                  }; // dispatch('setMessage', response.data);

                  return response.data;
                })["catch"](function (error) {
                  console.log(error.response.data); // state.message = error.response.data.message;

                  dispatch('setMessage', error.response.data.message);
                  return 'error';
                });

              case 5:
                response = _context.sent;
                _this.loading = false;
                return _context.abrupt("return", response);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ })

}]);