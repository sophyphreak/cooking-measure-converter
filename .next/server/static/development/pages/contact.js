module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../ssr-module-cache.js') // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }) // Execute the module function
    /******/
    /******/ /******/ var threw = true
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      )
      /******/ threw = false
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId]
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true // Return the exports of the module
    /******/
    /******/ /******/ return module.exports
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      })
      /******/
    }
    /******/
  } // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      })
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true })
    /******/
  } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value)
    /******/ if (mode & 8) return value
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value
    /******/ var ns = Object.create(null)
    /******/ __webpack_require__.r(ns)
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    })
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key]
          }.bind(null, key)
        )
    /******/ return ns
    /******/
  } // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default']
          }
        : /******/ function getModuleExports() {
            return module
          }
    /******/ __webpack_require__.d(getter, 'a', getter)
    /******/ return getter
    /******/
  } // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  } // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 3))
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './containers/ContactForm/ContactForm.js':
      /*!***********************************************!*\
  !*** ./containers/ContactForm/ContactForm.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return ContactForm
          }
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! axios */ 'axios'
        )
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          axios__WEBPACK_IMPORTED_MODULE_1__
        )
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! next/link */ 'next/link'
        )
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_2__
        )
        /* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! reactstrap */ 'reactstrap'
        )
        /* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          reactstrap__WEBPACK_IMPORTED_MODULE_3__
        )
        function _typeof(obj) {
          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj
            }
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }
          }
          return _typeof(obj)
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true
            Object.defineProperty(target, descriptor.key, descriptor)
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps)
          if (staticProps) _defineProperties(Constructor, staticProps)
          return Constructor
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === 'object' || typeof call === 'function')
          ) {
            return call
          }
          return _assertThisInitialized(self)
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o)
              }
          return _getPrototypeOf(o)
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true
              }
            }
          )
          if (superClass) _setPrototypeOf(subClass, superClass)
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p
              return o
            }
          return _setPrototypeOf(o, p)
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          }
          return self
        }

        // TODO
        //
        // - Add reCAPTCHA

        var ContactForm =
          /*#__PURE__*/
          (function(_React$Component) {
            _inherits(ContactForm, _React$Component)

            function ContactForm(props) {
              var _this

              _classCallCheck(this, ContactForm)

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(ContactForm).call(this, props)
              )
              _this.state = {
                email: '',
                subject: '',
                message: '',
                messageSent: false
              }
              _this.onEmailChange = _this.onEmailChange.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              _this.onSubjectChange = _this.onSubjectChange.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              _this.onMessageChange = _this.onMessageChange.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              _this.onSubmit = _this.onSubmit.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              return _this
            }

            _createClass(ContactForm, [
              {
                key: 'onEmailChange',
                value: function onEmailChange(e) {
                  var email = e.target.value
                  this.setState(function() {
                    return {
                      email: email
                    }
                  })
                }
              },
              {
                key: 'onSubjectChange',
                value: function onSubjectChange(e) {
                  var subject = e.target.value
                  this.setState(function() {
                    return {
                      subject: subject
                    }
                  })
                }
              },
              {
                key: 'onMessageChange',
                value: function onMessageChange(e) {
                  var message = e.target.value
                  this.setState(function() {
                    return {
                      message: message
                    }
                  })
                }
              },
              {
                key: 'onSubmit',
                value: function onSubmit() {
                  var _this$state = this.state,
                    email = _this$state.email,
                    subject = _this$state.subject,
                    message = _this$state.message
                  axios__WEBPACK_IMPORTED_MODULE_1___default.a
                    .post('/api/contact-us', {
                      email: email,
                      subject: subject,
                      message: message
                    })
                    .then(function(res) {
                      console.log(res)
                    })
                    .catch(function(err) {
                      console.log(err)
                    })
                  var messageSent = true
                  this.setState(function() {
                    return {
                      messageSent: messageSent
                    }
                  })
                }
              },
              {
                key: 'render',
                value: function render() {
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    reactstrap__WEBPACK_IMPORTED_MODULE_3__['Row'],
                    {
                      className: 'main contactForm animated fadeIn'
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      reactstrap__WEBPACK_IMPORTED_MODULE_3__['Col'],
                      {
                        xs: '12',
                        sm: {
                          size: 4,
                          offset: 4
                        }
                      },
                      this.state.messageSent
                        ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'div',
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'h3',
                              null,
                              "Message sent! We'll get back to you soon. We promise"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                              {
                                href: '/'
                              },
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                reactstrap__WEBPACK_IMPORTED_MODULE_3__[
                                  'Button'
                                ],
                                {
                                  className: 'align-center',
                                  color: 'link'
                                },
                                'Return to Cooking Measure Converter'
                              )
                            )
                          )
                        : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            reactstrap__WEBPACK_IMPORTED_MODULE_3__['Form'],
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              reactstrap__WEBPACK_IMPORTED_MODULE_3__[
                                'FormGroup'
                              ],
                              null,
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                reactstrap__WEBPACK_IMPORTED_MODULE_3__[
                                  'Label'
                                ],
                                null,
                                'Email'
                              ),
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                reactstrap__WEBPACK_IMPORTED_MODULE_3__[
                                  'Input'
                                ],
                                {
                                  type: 'email',
                                  onChange: this.onEmailChange
                                }
                              )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              reactstrap__WEBPACK_IMPORTED_MODULE_3__[
                                'FormGroup'
                              ],
                              null,
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                reactstrap__WEBPACK_IMPORTED_MODULE_3__[
                                  'Label'
                                ],
                                null,
                                'Subject'
                              ),
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                reactstrap__WEBPACK_IMPORTED_MODULE_3__[
                                  'Input'
                                ],
                                {
                                  onChange: this.onSubjectChange
                                }
                              )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              reactstrap__WEBPACK_IMPORTED_MODULE_3__[
                                'FormGroup'
                              ],
                              null,
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                reactstrap__WEBPACK_IMPORTED_MODULE_3__[
                                  'Label'
                                ],
                                null,
                                'Message Body'
                              ),
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                reactstrap__WEBPACK_IMPORTED_MODULE_3__[
                                  'Input'
                                ],
                                {
                                  type: 'textarea',
                                  onChange: this.onMessageChange
                                }
                              )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              reactstrap__WEBPACK_IMPORTED_MODULE_3__['Button'],
                              {
                                color: 'primary',
                                onClick: this.onSubmit
                              },
                              'Submit'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'br',
                              null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'br',
                              null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                              {
                                href: '/'
                              },
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                reactstrap__WEBPACK_IMPORTED_MODULE_3__[
                                  'Button'
                                ],
                                {
                                  className: 'align-center',
                                  color: 'link'
                                },
                                'Return to Cooking Measure Converter'
                              )
                            )
                          )
                    )
                  )
                }
              }
            ])

            return ContactForm
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)

        /***/
      },

    /***/ './pages/contact.js':
      /*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var _containers_ContactForm_ContactForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../containers/ContactForm/ContactForm.js */ './containers/ContactForm/ContactForm.js'
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
            _containers_ContactForm_ContactForm_js__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ],
            null
          )
        }

        /***/
      },

    /***/ './scss/style.scss':
      /*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /***/
      },

    /***/ 3:
      /*!********************************!*\
  !*** multi ./pages/contact.js ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./pages/contact.js */ './pages/contact.js'
        )

        /***/
      },

    /***/ axios:
      /*!************************!*\
  !*** external "axios" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('axios')

        /***/
      },

    /***/ 'next/link':
      /*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('next/link')

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('react')

        /***/
      },

    /***/ reactstrap:
      /*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('reactstrap')

        /***/
      }

    /******/
  }
)
//# sourceMappingURL=contact.js.map
