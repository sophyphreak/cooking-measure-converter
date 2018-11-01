webpackHotUpdate('static/development/pages/index.js', {
  /***/ './components/TableRowComponent/AmountInput/AmountInput.js':
    /*!*****************************************************************!*\
  !*** ./components/TableRowComponent/AmountInput/AmountInput.js ***!
  \*****************************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js'
      )
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      )
      /* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! reactstrap */ './node_modules/reactstrap/dist/reactstrap.es.js'
      )

      var AmountInput = function AmountInput(_ref) {
        var value = _ref.value,
          _onChange = _ref.onChange
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          reactstrap__WEBPACK_IMPORTED_MODULE_1__['Input'],
          {
            type: 'text',
            value: value || '',
            onChange: function onChange(event) {
              return _onChange({
                event: event
              })
            }
          }
        )
      }

      /* harmony default export */ __webpack_exports__['default'] = AmountInput

      /***/
    }
})
//# sourceMappingURL=index.js.ad6a9f0e2cd0feba48af.hot-update.js.map
