webpackHotUpdate('static/development/pages/index.js', {
  /***/ './containers/ContactForm/LoadableContactForm.js': false,

  /***/ './containers/ContactForm/Loading.js': false,

  /***/ './containers/Main.js': false,

  /***/ './node_modules/react-loadable/lib/index.js': false,

  /***/ './pages/index.js':
    /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* WEBPACK VAR INJECTION */ ;(function(module) {
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var _containers_MeasureConverter_MeasureConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../containers/MeasureConverter/MeasureConverter */ './containers/MeasureConverter/MeasureConverter.js'
        )
        /* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../scss/style.scss */ './scss/style.scss'
        )
        /* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__
        )

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = function() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _containers_MeasureConverter_MeasureConverter__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ],
            null
          )
        }
        ;(function(Component, route) {
          if (!Component) return
          if (false) {
          }
          module.hot.accept()
          Component.__route = route

          if (module.hot.status() === 'idle') return

          var components = next.router.components
          for (var r in components) {
            if (!components.hasOwnProperty(r)) continue

            if (components[r].Component.__route === route) {
              next.router.update(r, Component)
            }
          }
        })(
          typeof __webpack_exports__ !== 'undefined'
            ? __webpack_exports__.default
            : module.exports.default || module.exports,
          '/'
        )

        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          /*! ./../node_modules/webpack/buildin/harmony-module.js */ './node_modules/webpack/buildin/harmony-module.js'
        )(module)
      ))

      /***/
    }
})
//# sourceMappingURL=index.js.ee71563253fb5fd0406d.hot-update.js.map
