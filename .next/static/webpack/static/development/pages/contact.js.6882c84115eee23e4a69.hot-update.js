webpackHotUpdate('static/development/pages/contact.js', {
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
        /*! react */ './node_modules/react/index.js'
      )
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      )
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! axios */ './node_modules/axios/index.js'
      )
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        axios__WEBPACK_IMPORTED_MODULE_1__
      )
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! next/link */ './node_modules/next/link.js'
      )
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        next_link__WEBPACK_IMPORTED_MODULE_2__
      )
      /* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! reactstrap */ './node_modules/reactstrap/dist/reactstrap.es.js'
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
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: true, configurable: true }
        })
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
      // - Form should wait until 200 status sent back
      // - Add basic form validation
      // - Refactor container/component style, etc.
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
                            'div',
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              reactstrap__WEBPACK_IMPORTED_MODULE_3__['Button'],
                              {
                                className: 'align-center',
                                color: 'link',
                                onClick: this.props.toggleContactUs
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
                              reactstrap__WEBPACK_IMPORTED_MODULE_3__['Label'],
                              null,
                              'Email'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              reactstrap__WEBPACK_IMPORTED_MODULE_3__['Input'],
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
                              reactstrap__WEBPACK_IMPORTED_MODULE_3__['Label'],
                              null,
                              'Subject'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              reactstrap__WEBPACK_IMPORTED_MODULE_3__['Input'],
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
                              reactstrap__WEBPACK_IMPORTED_MODULE_3__['Label'],
                              null,
                              'Message Body'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              reactstrap__WEBPACK_IMPORTED_MODULE_3__['Input'],
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
                              reactstrap__WEBPACK_IMPORTED_MODULE_3__['Button'],
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
    }
})
//# sourceMappingURL=contact.js.6882c84115eee23e4a69.hot-update.js.map
