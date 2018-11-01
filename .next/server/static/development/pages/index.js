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
    /***/ './components/ConverterComponent/ConverterComponent.js':
      /*!*************************************************************!*\
  !*** ./components/ConverterComponent/ConverterComponent.js ***!
  \*************************************************************/
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
        /* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! reactstrap */ 'reactstrap'
        )
        /* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          reactstrap__WEBPACK_IMPORTED_MODULE_1__
        )
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! next/link */ 'next/link'
        )
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_2__
        )
        /* harmony import */ var _Mass_Mass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../Mass/Mass */ './components/Mass/Mass.js'
        )
        /* harmony import */ var _Volume_Volume__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../Volume/Volume */ './components/Volume/Volume.js'
        )
        /* harmony import */ var _Temperature_Temperature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../Temperature/Temperature */ './components/Temperature/Temperature.js'
        )
        /* harmony import */ var _Length_Length__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../Length/Length */ './components/Length/Length.js'
        )

        var ConverterComponent = function ConverterComponent(_ref) {
          var massProps = _ref.massProps,
            volumeProps = _ref.volumeProps,
            temperatureProps = _ref.temperatureProps,
            lengthProps = _ref.lengthProps
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            reactstrap__WEBPACK_IMPORTED_MODULE_1__['Row'],
            {
              className: 'main animated fadeIn'
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              reactstrap__WEBPACK_IMPORTED_MODULE_1__['Col'],
              {
                xs: '12',
                sm: {
                  size: 4,
                  offset: 4
                }
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'h1',
                {
                  className: 'main--title'
                },
                'Cooking Measure Converter'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                reactstrap__WEBPACK_IMPORTED_MODULE_1__['Table'],
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'thead',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'tr',
                    {
                      align: 'center'
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'th',
                      null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'th',
                      null,
                      'Metric'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'th',
                      null,
                      'Imperial'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'th',
                      null
                    )
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'tbody',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Mass_Mass__WEBPACK_IMPORTED_MODULE_3__['default'],
                    {
                      massProps: massProps
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Volume_Volume__WEBPACK_IMPORTED_MODULE_4__['default'],
                    {
                      volumeProps: volumeProps
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Length_Length__WEBPACK_IMPORTED_MODULE_6__['default'],
                    {
                      lengthProps: lengthProps
                    }
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Temperature_Temperature__WEBPACK_IMPORTED_MODULE_5__[
                      'default'
                    ],
                    {
                      temperatureProps: temperatureProps
                    }
                  )
                )
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
                  href: '/contact'
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  reactstrap__WEBPACK_IMPORTED_MODULE_1__['Button'],
                  {
                    className: 'align-center',
                    color: 'link',
                    size: 'sm'
                  },
                  'Contact us'
                )
              )
            )
          )
        }

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = ConverterComponent

        /***/
      },

    /***/ './components/Length/Length.js':
      /*!*************************************!*\
  !*** ./components/Length/Length.js ***!
  \*************************************/
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
        /* harmony import */ var _containers_TableRow_TableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../containers/TableRow/TableRow */ './containers/TableRow/TableRow.js'
        )
        /* harmony import */ var _getPropsForTableRow_getPropsForTableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./getPropsForTableRow/getPropsForTableRow */ './components/Length/getPropsForTableRow/getPropsForTableRow.js'
        )

        var Length = function Length(_ref) {
          var lengthProps = _ref.lengthProps

          var _getPropsForTableRow = Object(
              _getPropsForTableRow_getPropsForTableRow__WEBPACK_IMPORTED_MODULE_2__[
                'default'
              ]
            )(lengthProps),
            metricDropdown = _getPropsForTableRow.metricDropdown,
            metricInput = _getPropsForTableRow.metricInput,
            imperialInput = _getPropsForTableRow.imperialInput,
            imperialDropdown = _getPropsForTableRow.imperialDropdown

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _containers_TableRow_TableRow__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ],
            {
              metricDropdown: metricDropdown,
              metricInput: metricInput,
              imperialInput: imperialInput,
              imperialDropdown: imperialDropdown
            }
          )
        }

        /* harmony default export */ __webpack_exports__['default'] = Length

        /***/
      },

    /***/ './components/Length/getPropsForTableRow/getPropsForTableRow.js':
      /*!**********************************************************************!*\
  !*** ./components/Length/getPropsForTableRow/getPropsForTableRow.js ***!
  \**********************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony default export */ __webpack_exports__['default'] = function(
          lengthProps
        ) {
          var metricDropdown = getMetricDropdown(lengthProps)
          var metricInput = getMetricInput(lengthProps)
          var imperialInput = getImperialInput(lengthProps)
          var imperialDropdown = getImperialDropdown(lengthProps)
          return {
            metricDropdown: metricDropdown,
            metricInput: metricInput,
            imperialInput: imperialInput,
            imperialDropdown: imperialDropdown
          }
        }

        var getMetricDropdown = function getMetricDropdown(lengthProps) {
          var lengthState = lengthProps.lengthState,
            onMetricLengthChange = lengthProps.onMetricLengthChange,
            lengthUnitOptions = lengthProps.lengthUnitOptions
          var metricUnit = lengthState.metricUnit
          var metricUnitOptions = lengthUnitOptions.metricUnitOptions
          return {
            value: metricUnit,
            onChange: onMetricLengthChange,
            options: metricUnitOptions
          }
        }

        var getMetricInput = function getMetricInput(lengthProps) {
          var lengthState = lengthProps.lengthState,
            onMetricLengthChange = lengthProps.onMetricLengthChange
          var metricLength = lengthState.metricLength
          return {
            value: metricLength,
            onChange: onMetricLengthChange
          }
        }

        var getImperialInput = function getImperialInput(lengthProps) {
          var lengthState = lengthProps.lengthState,
            onImperialLengthChange = lengthProps.onImperialLengthChange
          var imperialLength = lengthState.imperialLength
          return {
            value: imperialLength,
            onChange: onImperialLengthChange
          }
        }

        var getImperialDropdown = function getImperialDropdown(lengthProps) {
          var lengthState = lengthProps.lengthState,
            onImperialLengthChange = lengthProps.onImperialLengthChange,
            lengthUnitOptions = lengthProps.lengthUnitOptions
          var imperialUnit = lengthState.imperialUnit
          var imperialUnitOptions = lengthUnitOptions.imperialUnitOptions
          return {
            value: imperialUnit,
            onChange: onImperialLengthChange,
            options: imperialUnitOptions
          }
        }

        /***/
      },

    /***/ './components/Mass/Mass.js':
      /*!*********************************!*\
  !*** ./components/Mass/Mass.js ***!
  \*********************************/
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
        /* harmony import */ var _containers_TableRow_TableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../containers/TableRow/TableRow */ './containers/TableRow/TableRow.js'
        )
        /* harmony import */ var _getPropsForTableRow_getPropsForTableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./getPropsForTableRow/getPropsForTableRow */ './components/Mass/getPropsForTableRow/getPropsForTableRow.js'
        )

        var Mass = function Mass(_ref) {
          var massProps = _ref.massProps

          var _getPropsForTableRow = Object(
              _getPropsForTableRow_getPropsForTableRow__WEBPACK_IMPORTED_MODULE_2__[
                'default'
              ]
            )(massProps),
            metricDropdown = _getPropsForTableRow.metricDropdown,
            metricInput = _getPropsForTableRow.metricInput,
            imperialInput = _getPropsForTableRow.imperialInput,
            imperialDropdown = _getPropsForTableRow.imperialDropdown

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _containers_TableRow_TableRow__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ],
            {
              metricDropdown: metricDropdown,
              metricInput: metricInput,
              imperialInput: imperialInput,
              imperialDropdown: imperialDropdown
            }
          )
        }

        /* harmony default export */ __webpack_exports__['default'] = Mass

        /***/
      },

    /***/ './components/Mass/getPropsForTableRow/getPropsForTableRow.js':
      /*!********************************************************************!*\
  !*** ./components/Mass/getPropsForTableRow/getPropsForTableRow.js ***!
  \********************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony default export */ __webpack_exports__['default'] = function(
          massProps
        ) {
          var metricDropdown = getMetricDropdown(massProps)
          var metricInput = getMetricInput(massProps)
          var imperialInput = getImperialInput(massProps)
          var imperialDropdown = getImperialDropdown(massProps)
          return {
            metricDropdown: metricDropdown,
            metricInput: metricInput,
            imperialInput: imperialInput,
            imperialDropdown: imperialDropdown
          }
        }

        var getMetricDropdown = function getMetricDropdown(massProps) {
          var massState = massProps.massState,
            onMetricMassChange = massProps.onMetricMassChange,
            massUnitOptions = massProps.massUnitOptions
          var metricUnit = massState.metricUnit
          var metricUnitOptions = massUnitOptions.metricUnitOptions
          return {
            value: metricUnit,
            onChange: onMetricMassChange,
            options: metricUnitOptions
          }
        }

        var getMetricInput = function getMetricInput(massProps) {
          var massState = massProps.massState,
            onMetricMassChange = massProps.onMetricMassChange
          var metricMass = massState.metricMass
          return {
            value: metricMass,
            onChange: onMetricMassChange
          }
        }

        var getImperialInput = function getImperialInput(massProps) {
          var massState = massProps.massState,
            onImperialMassChange = massProps.onImperialMassChange
          var imperialMass = massState.imperialMass
          return {
            value: imperialMass,
            onChange: onImperialMassChange
          }
        }

        var getImperialDropdown = function getImperialDropdown(massProps) {
          var massState = massProps.massState,
            onImperialMassChange = massProps.onImperialMassChange,
            massUnitOptions = massProps.massUnitOptions
          var imperialUnit = massState.imperialUnit
          var imperialUnitOptions = massUnitOptions.imperialUnitOptions
          return {
            value: imperialUnit,
            onChange: onImperialMassChange,
            options: imperialUnitOptions
          }
        }

        /***/
      },

    /***/ './components/TableRowComponent/AmountInput/AmountInput.js':
      /*!*****************************************************************!*\
  !*** ./components/TableRowComponent/AmountInput/AmountInput.js ***!
  \*****************************************************************/
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
        /* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! reactstrap */ 'reactstrap'
        )
        /* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          reactstrap__WEBPACK_IMPORTED_MODULE_1__
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

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = AmountInput

        /***/
      },

    /***/ './components/TableRowComponent/TableRowComponent.js':
      /*!***********************************************************!*\
  !*** ./components/TableRowComponent/TableRowComponent.js ***!
  \***********************************************************/
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
        /* harmony import */ var _UnitDropdown_UnitDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./UnitDropdown/UnitDropdown */ './components/TableRowComponent/UnitDropdown/UnitDropdown.js'
        )
        /* harmony import */ var _AmountInput_AmountInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./AmountInput/AmountInput */ './components/TableRowComponent/AmountInput/AmountInput.js'
        )

        var TableRowComponent = function TableRowComponent(_ref) {
          var metricDropdown = _ref.metricDropdown,
            metricInput = _ref.metricInput,
            imperialInput = _ref.imperialInput,
            imperialDropdown = _ref.imperialDropdown
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'tr',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'th',
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _UnitDropdown_UnitDropdown__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ],
                {
                  isOpen: metricDropdown.isOpen,
                  toggle: metricDropdown.toggle,
                  value: metricDropdown.value,
                  options: metricDropdown.options,
                  onChange: metricDropdown.onChange
                }
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'td',
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _AmountInput_AmountInput__WEBPACK_IMPORTED_MODULE_2__[
                  'default'
                ],
                {
                  value: metricInput.value,
                  onChange: metricInput.onChange
                }
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'td',
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _AmountInput_AmountInput__WEBPACK_IMPORTED_MODULE_2__[
                  'default'
                ],
                {
                  value: imperialInput.value,
                  onChange: imperialInput.onChange
                }
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'th',
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _UnitDropdown_UnitDropdown__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ],
                {
                  isOpen: imperialDropdown.isOpen,
                  toggle: imperialDropdown.toggle,
                  value: imperialDropdown.value,
                  options: imperialDropdown.options,
                  onChange: imperialDropdown.onChange
                }
              )
            )
          )
        }

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = TableRowComponent

        /***/
      },

    /***/ './components/TableRowComponent/UnitDropdown/UnitDropdown.js':
      /*!*******************************************************************!*\
  !*** ./components/TableRowComponent/UnitDropdown/UnitDropdown.js ***!
  \*******************************************************************/
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
        /* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! reactstrap */ 'reactstrap'
        )
        /* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          reactstrap__WEBPACK_IMPORTED_MODULE_1__
        )

        var UnitDropdown = function UnitDropdown(_ref) {
          var isOpen = _ref.isOpen,
            toggle = _ref.toggle,
            value = _ref.value,
            options = _ref.options,
            onChange = _ref.onChange
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            reactstrap__WEBPACK_IMPORTED_MODULE_1__['Dropdown'],
            {
              isOpen: isOpen,
              toggle: toggle,
              value: value
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              reactstrap__WEBPACK_IMPORTED_MODULE_1__['DropdownToggle'],
              {
                caret: true
              },
              value
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              reactstrap__WEBPACK_IMPORTED_MODULE_1__['DropdownMenu'],
              null,
              options.map(function(option, key) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  reactstrap__WEBPACK_IMPORTED_MODULE_1__['DropdownItem'],
                  {
                    key: key,
                    value: option,
                    onClick: function onClick() {
                      return onChange({
                        newUnit: option
                      })
                    }
                  },
                  option
                )
              })
            )
          )
        }

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = UnitDropdown

        /***/
      },

    /***/ './components/Temperature/Temperature.js':
      /*!***********************************************!*\
  !*** ./components/Temperature/Temperature.js ***!
  \***********************************************/
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
        /* harmony import */ var _TempertureTableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./TempertureTableRow */ './components/Temperature/TempertureTableRow.js'
        )

        var Temperature = function Temperature(_ref) {
          var temperatureProps = _ref.temperatureProps
          var temperatureState = temperatureProps.temperatureState,
            onImperialTemperatureChange =
              temperatureProps.onImperialTemperatureChange,
            onMetricTemperatureChange =
              temperatureProps.onMetricTemperatureChange
          var imperialTemperature = temperatureState.imperialTemperature,
            metricTemperature = temperatureState.metricTemperature
          var metricLabel = 'C'
          var metricInput = {
            value: metricTemperature,
            onChange: onMetricTemperatureChange
          }
          var imperialInput = {
            value: imperialTemperature,
            onChange: onImperialTemperatureChange
          }
          var imperialLabel = 'F'
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _TempertureTableRow__WEBPACK_IMPORTED_MODULE_1__['default'],
            {
              metricLabel: metricLabel,
              metricInput: metricInput,
              imperialInput: imperialInput,
              imperialLabel: imperialLabel
            }
          )
        }

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = Temperature

        /***/
      },

    /***/ './components/Temperature/TempertureTableRow.js':
      /*!******************************************************!*\
  !*** ./components/Temperature/TempertureTableRow.js ***!
  \******************************************************/
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
        /* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! reactstrap */ 'reactstrap'
        )
        /* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          reactstrap__WEBPACK_IMPORTED_MODULE_1__
        )
        /* harmony import */ var _TableRowComponent_AmountInput_AmountInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../TableRowComponent/AmountInput/AmountInput */ './components/TableRowComponent/AmountInput/AmountInput.js'
        )

        var TemperatureTableRow = function TemperatureTableRow(_ref) {
          var metricLabel = _ref.metricLabel,
            metricInput = _ref.metricInput,
            imperialInput = _ref.imperialInput,
            imperialLabel = _ref.imperialLabel
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'tr',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'th',
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                reactstrap__WEBPACK_IMPORTED_MODULE_1__['Label'],
                {
                  className: 'align-right'
                },
                metricLabel
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'td',
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _TableRowComponent_AmountInput_AmountInput__WEBPACK_IMPORTED_MODULE_2__[
                  'default'
                ],
                {
                  value: metricInput.value,
                  onChange: metricInput.onChange
                }
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'td',
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _TableRowComponent_AmountInput_AmountInput__WEBPACK_IMPORTED_MODULE_2__[
                  'default'
                ],
                {
                  value: imperialInput.value,
                  onChange: imperialInput.onChange
                }
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'th',
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                reactstrap__WEBPACK_IMPORTED_MODULE_1__['Label'],
                null,
                imperialLabel
              )
            )
          )
        }

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = TemperatureTableRow

        /***/
      },

    /***/ './components/Volume/Volume.js':
      /*!*************************************!*\
  !*** ./components/Volume/Volume.js ***!
  \*************************************/
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
        /* harmony import */ var _containers_TableRow_TableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../containers/TableRow/TableRow */ './containers/TableRow/TableRow.js'
        )
        /* harmony import */ var _getPropsForTableRow_getPropsForTableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./getPropsForTableRow/getPropsForTableRow */ './components/Volume/getPropsForTableRow/getPropsForTableRow.js'
        )

        var Volume = function Volume(_ref) {
          var volumeProps = _ref.volumeProps

          var _getPropsForTableRow = Object(
              _getPropsForTableRow_getPropsForTableRow__WEBPACK_IMPORTED_MODULE_2__[
                'default'
              ]
            )(volumeProps),
            metricDropdown = _getPropsForTableRow.metricDropdown,
            metricInput = _getPropsForTableRow.metricInput,
            imperialInput = _getPropsForTableRow.imperialInput,
            imperialDropdown = _getPropsForTableRow.imperialDropdown

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _containers_TableRow_TableRow__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ],
            {
              metricDropdown: metricDropdown,
              metricInput: metricInput,
              imperialInput: imperialInput,
              imperialDropdown: imperialDropdown
            }
          )
        }

        /* harmony default export */ __webpack_exports__['default'] = Volume

        /***/
      },

    /***/ './components/Volume/getPropsForTableRow/getPropsForTableRow.js':
      /*!**********************************************************************!*\
  !*** ./components/Volume/getPropsForTableRow/getPropsForTableRow.js ***!
  \**********************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony default export */ __webpack_exports__['default'] = function(
          volumeProps
        ) {
          var metricDropdown = getMetricDropdown(volumeProps)
          var metricInput = getMetricInput(volumeProps)
          var imperialInput = getImperialInput(volumeProps)
          var imperialDropdown = getImperialDropdown(volumeProps)
          return {
            metricDropdown: metricDropdown,
            metricInput: metricInput,
            imperialInput: imperialInput,
            imperialDropdown: imperialDropdown
          }
        }

        var getMetricDropdown = function getMetricDropdown(volumeProps) {
          var volumeState = volumeProps.volumeState,
            onMetricVolumeChange = volumeProps.onMetricVolumeChange,
            volumeUnitOptions = volumeProps.volumeUnitOptions
          var metricUnit = volumeState.metricUnit
          var metricUnitOptions = volumeUnitOptions.metricUnitOptions
          return {
            value: metricUnit,
            onChange: onMetricVolumeChange,
            options: metricUnitOptions
          }
        }

        var getMetricInput = function getMetricInput(volumeProps) {
          var volumeState = volumeProps.volumeState,
            onMetricVolumeChange = volumeProps.onMetricVolumeChange
          var metricVolume = volumeState.metricVolume
          return {
            value: metricVolume,
            onChange: onMetricVolumeChange
          }
        }

        var getImperialInput = function getImperialInput(volumeProps) {
          var volumeState = volumeProps.volumeState,
            onImperialVolumeChange = volumeProps.onImperialVolumeChange
          var imperialVolume = volumeState.imperialVolume
          return {
            value: imperialVolume,
            onChange: onImperialVolumeChange
          }
        }

        var getImperialDropdown = function getImperialDropdown(volumeProps) {
          var volumeState = volumeProps.volumeState,
            onImperialVolumeChange = volumeProps.onImperialVolumeChange,
            volumeUnitOptions = volumeProps.volumeUnitOptions
          var imperialUnit = volumeState.imperialUnit
          var imperialUnitOptions = volumeUnitOptions.imperialUnitOptions
          return {
            value: imperialUnit,
            onChange: onImperialVolumeChange,
            options: imperialUnitOptions
          }
        }

        /***/
      },

    /***/ './containers/MeasureConverter/MeasureConverter.js':
      /*!*********************************************************!*\
  !*** ./containers/MeasureConverter/MeasureConverter.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return MeasureConverter
          }
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var _components_ConverterComponent_ConverterComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../components/ConverterComponent/ConverterComponent */ './components/ConverterComponent/ConverterComponent.js'
        )
        /* harmony import */ var _getInitialStateMethods_getInitialStateMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./getInitialStateMethods/getInitialStateMethods */ './containers/MeasureConverter/getInitialStateMethods/getInitialStateMethods.js'
        )
        /* harmony import */ var _unitOptions_massOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./unitOptions/massOptions */ './containers/MeasureConverter/unitOptions/massOptions.js'
        )
        /* harmony import */ var _unitOptions_volumeOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./unitOptions/volumeOptions */ './containers/MeasureConverter/unitOptions/volumeOptions.js'
        )
        /* harmony import */ var _unitOptions_lengthOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./unitOptions/lengthOptions */ './containers/MeasureConverter/unitOptions/lengthOptions.js'
        )
        /* harmony import */ var _converters_massConverters_convertImperialMassToMetric__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./converters/massConverters/convertImperialMassToMetric */ './containers/MeasureConverter/converters/massConverters/convertImperialMassToMetric.js'
        )
        /* harmony import */ var _converters_massConverters_convertMetricMassToImperial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./converters/massConverters/convertMetricMassToImperial */ './containers/MeasureConverter/converters/massConverters/convertMetricMassToImperial.js'
        )
        /* harmony import */ var _converters_volumeConverters_convertImperialVolumeToMetric__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./converters/volumeConverters/convertImperialVolumeToMetric */ './containers/MeasureConverter/converters/volumeConverters/convertImperialVolumeToMetric.js'
        )
        /* harmony import */ var _converters_volumeConverters_convertMetricVolumeToImperial__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./converters/volumeConverters/convertMetricVolumeToImperial */ './containers/MeasureConverter/converters/volumeConverters/convertMetricVolumeToImperial.js'
        )
        /* harmony import */ var _converters_lengthConverters_convertImperialLengthToMetric__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./converters/lengthConverters/convertImperialLengthToMetric */ './containers/MeasureConverter/converters/lengthConverters/convertImperialLengthToMetric.js'
        )
        /* harmony import */ var _converters_lengthConverters_convertMetricLengthToImperial__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./converters/lengthConverters/convertMetricLengthToImperial */ './containers/MeasureConverter/converters/lengthConverters/convertMetricLengthToImperial.js'
        )
        /* harmony import */ var _converters_temperatureConverters_convertImperialTemperatureToMetric__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./converters/temperatureConverters/convertImperialTemperatureToMetric */ './containers/MeasureConverter/converters/temperatureConverters/convertImperialTemperatureToMetric.js'
        )
        /* harmony import */ var _converters_temperatureConverters_convertMetricTemperatureToImperial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./converters/temperatureConverters/convertMetricTemperatureToImperial */ './containers/MeasureConverter/converters/temperatureConverters/convertMetricTemperatureToImperial.js'
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
        // - Try again to get rid of the bind(this) statements

        var MeasureConverter =
          /*#__PURE__*/
          (function(_React$Component) {
            _inherits(MeasureConverter, _React$Component)

            function MeasureConverter(props) {
              var _this

              _classCallCheck(this, MeasureConverter)

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(MeasureConverter).call(this, props)
              )
              _this.state = {
                massState: {
                  imperialMass: '',
                  imperialUnit: '',
                  metricMass: '',
                  metricUnit: ''
                },
                volumeState: {
                  imperialVolume: '',
                  imperialUnit: '',
                  metricVolume: '',
                  metricUnit: ''
                },
                lengthState: {
                  imperialLength: '',
                  imperialUnit: '',
                  metricLength: '',
                  metricUnit: ''
                },
                temperatureState: {
                  imperialTemperature: '',
                  metricTemperature: ''
                }
              }
              _this.onImperialMassChange = _this.onImperialMassChange.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              _this.onMetricMassChange = _this.onMetricMassChange.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              _this.onImperialVolumeChange = _this.onImperialVolumeChange.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              _this.onMetricVolumeChange = _this.onMetricVolumeChange.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              _this.onImperialLengthChange = _this.onImperialLengthChange.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              _this.onMetricLengthChange = _this.onMetricLengthChange.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              _this.onImperialTemperatureChange = _this.onImperialTemperatureChange.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              _this.onMetricTemperatureChange = _this.onMetricTemperatureChange.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              return _this
            }

            _createClass(MeasureConverter, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  var getInitial = Object(
                    _getInitialStateMethods_getInitialStateMethods__WEBPACK_IMPORTED_MODULE_2__[
                      'default'
                    ]
                  )()
                  this.setState(function() {
                    return {
                      massState: {
                        imperialUnit: getInitial.massImperialUnit(),
                        metricUnit: getInitial.massMetricUnit()
                      },
                      volumeState: {
                        imperialUnit: getInitial.volumeImperialUnit(),
                        metricUnit: getInitial.volumeMetricUnit()
                      },
                      lengthState: {
                        imperialUnit: getInitial.lengthImperialUnit(),
                        metricUnit: getInitial.lengthMetricUnit()
                      }
                    }
                  })
                }
              },
              {
                key: 'componentDidUpdate',
                value: function componentDidUpdate() {
                  var local = this.state
                  localStorage.setItem('local', JSON.stringify(local))
                }
              },
              {
                key: 'onImperialMassChange',
                value: function onImperialMassChange(_ref) {
                  var event = _ref.event,
                    newUnit = _ref.newUnit
                  var massState = this.state.massState
                  var conversionInputs = {
                    massState: massState,
                    event: event,
                    newUnit: newUnit
                  }
                  massState = Object(
                    _converters_massConverters_convertImperialMassToMetric__WEBPACK_IMPORTED_MODULE_6__[
                      'default'
                    ]
                  )(conversionInputs)
                  this.setState(function() {
                    return {
                      massState: massState
                    }
                  })
                }
              },
              {
                key: 'onMetricMassChange',
                value: function onMetricMassChange(_ref2) {
                  var event = _ref2.event,
                    newUnit = _ref2.newUnit
                  var massState = this.state.massState
                  var conversionInputs = {
                    massState: massState,
                    event: event,
                    newUnit: newUnit
                  }
                  massState = Object(
                    _converters_massConverters_convertMetricMassToImperial__WEBPACK_IMPORTED_MODULE_7__[
                      'default'
                    ]
                  )(conversionInputs)
                  this.setState(function() {
                    return {
                      massState: massState
                    }
                  })
                }
              },
              {
                key: 'onImperialVolumeChange',
                value: function onImperialVolumeChange(_ref3) {
                  var event = _ref3.event,
                    newUnit = _ref3.newUnit
                  var volumeState = this.state.volumeState
                  var conversionInputs = {
                    volumeState: volumeState,
                    event: event,
                    newUnit: newUnit
                  }
                  volumeState = Object(
                    _converters_volumeConverters_convertImperialVolumeToMetric__WEBPACK_IMPORTED_MODULE_8__[
                      'default'
                    ]
                  )(conversionInputs)
                  this.setState(function() {
                    return {
                      volumeState: volumeState
                    }
                  })
                }
              },
              {
                key: 'onMetricVolumeChange',
                value: function onMetricVolumeChange(_ref4) {
                  var event = _ref4.event,
                    newUnit = _ref4.newUnit
                  var volumeState = this.state.volumeState
                  var conversionInputs = {
                    volumeState: volumeState,
                    event: event,
                    newUnit: newUnit
                  }
                  volumeState = Object(
                    _converters_volumeConverters_convertMetricVolumeToImperial__WEBPACK_IMPORTED_MODULE_9__[
                      'default'
                    ]
                  )(conversionInputs)
                  this.setState(function() {
                    return {
                      volumeState: volumeState
                    }
                  })
                }
              },
              {
                key: 'onImperialLengthChange',
                value: function onImperialLengthChange(_ref5) {
                  var event = _ref5.event,
                    newUnit = _ref5.newUnit
                  var lengthState = this.state.lengthState
                  var conversionInputs = {
                    lengthState: lengthState,
                    event: event,
                    newUnit: newUnit
                  }
                  lengthState = Object(
                    _converters_lengthConverters_convertImperialLengthToMetric__WEBPACK_IMPORTED_MODULE_10__[
                      'default'
                    ]
                  )(conversionInputs)
                  this.setState(function() {
                    return {
                      lengthState: lengthState
                    }
                  })
                }
              },
              {
                key: 'onMetricLengthChange',
                value: function onMetricLengthChange(_ref6) {
                  var event = _ref6.event,
                    newUnit = _ref6.newUnit
                  var lengthState = this.state.lengthState
                  var conversionInputs = {
                    lengthState: lengthState,
                    event: event,
                    newUnit: newUnit
                  }
                  lengthState = Object(
                    _converters_lengthConverters_convertMetricLengthToImperial__WEBPACK_IMPORTED_MODULE_11__[
                      'default'
                    ]
                  )(conversionInputs)
                  this.setState(function() {
                    return {
                      lengthState: lengthState
                    }
                  })
                }
              },
              {
                key: 'onImperialTemperatureChange',
                value: function onImperialTemperatureChange(_ref7) {
                  var event = _ref7.event
                  var temperatureState = this.state.temperatureState
                  var conversionInputs = {
                    temperatureState: temperatureState,
                    event: event
                  }
                  temperatureState = Object(
                    _converters_temperatureConverters_convertImperialTemperatureToMetric__WEBPACK_IMPORTED_MODULE_12__[
                      'default'
                    ]
                  )(conversionInputs)
                  this.setState(function() {
                    return {
                      temperatureState: temperatureState
                    }
                  })
                }
              },
              {
                key: 'onMetricTemperatureChange',
                value: function onMetricTemperatureChange(_ref8) {
                  var event = _ref8.event
                  var temperatureState = this.state.temperatureState
                  var conversionInputs = {
                    temperatureState: temperatureState,
                    event: event
                  }
                  temperatureState = Object(
                    _converters_temperatureConverters_convertMetricTemperatureToImperial__WEBPACK_IMPORTED_MODULE_13__[
                      'default'
                    ]
                  )(conversionInputs)
                  this.setState(function() {
                    return {
                      temperatureState: temperatureState
                    }
                  })
                }
              },
              {
                key: 'render',
                value: function render() {
                  var massProps = {
                    massState: this.state.massState,
                    onImperialMassChange: this.onImperialMassChange,
                    onMetricMassChange: this.onMetricMassChange,
                    massUnitOptions:
                      _unitOptions_massOptions__WEBPACK_IMPORTED_MODULE_3__[
                        'default'
                      ]
                  }
                  var volumeProps = {
                    volumeState: this.state.volumeState,
                    onImperialVolumeChange: this.onImperialVolumeChange,
                    onMetricVolumeChange: this.onMetricVolumeChange,
                    volumeUnitOptions:
                      _unitOptions_volumeOptions__WEBPACK_IMPORTED_MODULE_4__[
                        'default'
                      ]
                  }
                  var lengthProps = {
                    lengthState: this.state.lengthState,
                    onImperialLengthChange: this.onImperialLengthChange,
                    onMetricLengthChange: this.onMetricLengthChange,
                    lengthUnitOptions:
                      _unitOptions_lengthOptions__WEBPACK_IMPORTED_MODULE_5__[
                        'default'
                      ]
                  }
                  var temperatureProps = {
                    temperatureState: this.state.temperatureState,
                    onImperialTemperatureChange: this
                      .onImperialTemperatureChange,
                    onMetricTemperatureChange: this.onMetricTemperatureChange
                  }
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_ConverterComponent_ConverterComponent__WEBPACK_IMPORTED_MODULE_1__[
                      'default'
                    ],
                    {
                      massProps: massProps,
                      volumeProps: volumeProps,
                      lengthProps: lengthProps,
                      temperatureProps: temperatureProps
                    }
                  )
                }
              }
            ])

            return MeasureConverter
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)

        /***/
      },

    /***/ './containers/MeasureConverter/converters/lengthConverters/convertImperialLengthToMetric.js':
      /*!**************************************************************************************************!*\
  !*** ./containers/MeasureConverter/converters/lengthConverters/convertImperialLengthToMetric.js ***!
  \**************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _validation_isInvalidNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../validation/isInvalidNumber */ './containers/MeasureConverter/validation/isInvalidNumber.js'
        )
        /* harmony import */ var _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../doConversion/doConversion */ './containers/MeasureConverter/doConversion/doConversion.js'
        )

        /* harmony default export */ __webpack_exports__['default'] = function(
          _ref
        ) {
          var lengthState = _ref.lengthState,
            event = _ref.event,
            newUnit = _ref.newUnit
          var imperialLength = getImperialLength({
            lengthState: lengthState,
            event: event
          })
          var imperialUnit = getImperialUnit({
            lengthState: lengthState,
            newUnit: newUnit
          })

          if (
            Object(
              _validation_isInvalidNumber__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ]
            )(imperialLength)
          ) {
            return lengthState
          }

          lengthState = getNewLengthState({
            lengthState: lengthState,
            imperialUnit: imperialUnit,
            imperialLength: imperialLength
          })
          return lengthState
        }

        var getImperialUnit = function getImperialUnit(_ref2) {
          var lengthState = _ref2.lengthState,
            newUnit = _ref2.newUnit
          return newUnit || lengthState.imperialUnit
        }

        var getImperialLength = function getImperialLength(_ref3) {
          var lengthState = _ref3.lengthState,
            event = _ref3.event

          if (!event) {
            return lengthState.imperialLength
          }

          return event.target.value
        }

        var getNewLengthState = function getNewLengthState(_ref4) {
          var lengthState = _ref4.lengthState,
            imperialUnit = _ref4.imperialUnit,
            imperialLength = _ref4.imperialLength
          var metricUnit = lengthState.metricUnit
          var conversionInputs = {
            inputAmount: imperialLength,
            inputUnit: imperialUnit,
            outputUnit: metricUnit
          }
          var metricLength = Object(
            _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__['default']
          )(conversionInputs)
          return {
            imperialLength: imperialLength,
            imperialUnit: imperialUnit,
            metricLength: metricLength,
            metricUnit: metricUnit
          }
        }

        /***/
      },

    /***/ './containers/MeasureConverter/converters/lengthConverters/convertMetricLengthToImperial.js':
      /*!**************************************************************************************************!*\
  !*** ./containers/MeasureConverter/converters/lengthConverters/convertMetricLengthToImperial.js ***!
  \**************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _validation_isInvalidNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../validation/isInvalidNumber */ './containers/MeasureConverter/validation/isInvalidNumber.js'
        )
        /* harmony import */ var _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../doConversion/doConversion */ './containers/MeasureConverter/doConversion/doConversion.js'
        )

        /* harmony default export */ __webpack_exports__['default'] = function(
          _ref
        ) {
          var lengthState = _ref.lengthState,
            event = _ref.event,
            newUnit = _ref.newUnit
          var metricLength = getMetricLength({
            lengthState: lengthState,
            event: event
          })
          var metricUnit = getMetricUnit({
            lengthState: lengthState,
            newUnit: newUnit
          })

          if (
            Object(
              _validation_isInvalidNumber__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ]
            )(metricLength)
          ) {
            return lengthState
          }

          lengthState = getNewLengthState({
            lengthState: lengthState,
            metricUnit: metricUnit,
            metricLength: metricLength
          })
          return lengthState
        }

        var getMetricUnit = function getMetricUnit(_ref2) {
          var lengthState = _ref2.lengthState,
            newUnit = _ref2.newUnit
          return newUnit || lengthState.metricUnit
        }

        var getMetricLength = function getMetricLength(_ref3) {
          var lengthState = _ref3.lengthState,
            event = _ref3.event

          if (!event) {
            return lengthState.metricLength
          }

          return event.target.value
        }

        var getNewLengthState = function getNewLengthState(_ref4) {
          var lengthState = _ref4.lengthState,
            metricUnit = _ref4.metricUnit,
            metricLength = _ref4.metricLength
          var imperialUnit = lengthState.imperialUnit
          var conversionInputs = {
            inputAmount: metricLength,
            inputUnit: metricUnit,
            outputUnit: imperialUnit
          }
          var imperialLength = Object(
            _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__['default']
          )(conversionInputs)
          return {
            metricLength: metricLength,
            metricUnit: metricUnit,
            imperialLength: imperialLength,
            imperialUnit: imperialUnit
          }
        }

        /***/
      },

    /***/ './containers/MeasureConverter/converters/massConverters/convertImperialMassToMetric.js':
      /*!**********************************************************************************************!*\
  !*** ./containers/MeasureConverter/converters/massConverters/convertImperialMassToMetric.js ***!
  \**********************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _validation_isInvalidNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../validation/isInvalidNumber */ './containers/MeasureConverter/validation/isInvalidNumber.js'
        )
        /* harmony import */ var _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../doConversion/doConversion */ './containers/MeasureConverter/doConversion/doConversion.js'
        )

        /* harmony default export */ __webpack_exports__['default'] = function(
          _ref
        ) {
          var massState = _ref.massState,
            event = _ref.event,
            newUnit = _ref.newUnit
          var imperialMass = getImperialMass({
            massState: massState,
            event: event
          })
          var imperialUnit = getImperialUnit({
            massState: massState,
            newUnit: newUnit
          })

          if (
            Object(
              _validation_isInvalidNumber__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ]
            )(imperialMass)
          ) {
            return massState
          }

          massState = getNewMassState({
            massState: massState,
            imperialUnit: imperialUnit,
            imperialMass: imperialMass
          })
          return massState
        }

        var getImperialUnit = function getImperialUnit(_ref2) {
          var massState = _ref2.massState,
            newUnit = _ref2.newUnit
          return newUnit || massState.imperialUnit
        }

        var getImperialMass = function getImperialMass(_ref3) {
          var massState = _ref3.massState,
            event = _ref3.event

          if (!event) {
            return massState.imperialMass
          }

          return event.target.value
        }

        var getNewMassState = function getNewMassState(_ref4) {
          var massState = _ref4.massState,
            imperialUnit = _ref4.imperialUnit,
            imperialMass = _ref4.imperialMass
          var metricUnit = massState.metricUnit
          var conversionInputs = {
            inputAmount: imperialMass,
            inputUnit: imperialUnit,
            outputUnit: metricUnit
          }
          var metricMass = Object(
            _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__['default']
          )(conversionInputs)
          return {
            imperialMass: imperialMass,
            imperialUnit: imperialUnit,
            metricMass: metricMass,
            metricUnit: metricUnit
          }
        }

        /***/
      },

    /***/ './containers/MeasureConverter/converters/massConverters/convertMetricMassToImperial.js':
      /*!**********************************************************************************************!*\
  !*** ./containers/MeasureConverter/converters/massConverters/convertMetricMassToImperial.js ***!
  \**********************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _validation_isInvalidNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../validation/isInvalidNumber */ './containers/MeasureConverter/validation/isInvalidNumber.js'
        )
        /* harmony import */ var _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../doConversion/doConversion */ './containers/MeasureConverter/doConversion/doConversion.js'
        )

        /* harmony default export */ __webpack_exports__['default'] = function(
          _ref
        ) {
          var massState = _ref.massState,
            event = _ref.event,
            newUnit = _ref.newUnit
          var metricMass = getMetricMass({
            massState: massState,
            event: event
          })
          var metricUnit = getMetricUnit({
            massState: massState,
            newUnit: newUnit
          })

          if (
            Object(
              _validation_isInvalidNumber__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ]
            )(metricMass)
          ) {
            return massState
          }

          massState = getNewMassState({
            massState: massState,
            metricUnit: metricUnit,
            metricMass: metricMass
          })
          return massState
        }

        var getMetricUnit = function getMetricUnit(_ref2) {
          var massState = _ref2.massState,
            newUnit = _ref2.newUnit
          return newUnit || massState.metricUnit
        }

        var getMetricMass = function getMetricMass(_ref3) {
          var massState = _ref3.massState,
            event = _ref3.event

          if (!event) {
            return massState.metricMass
          }

          return event.target.value
        }

        var getNewMassState = function getNewMassState(_ref4) {
          var massState = _ref4.massState,
            metricUnit = _ref4.metricUnit,
            metricMass = _ref4.metricMass
          var imperialUnit = massState.imperialUnit
          var conversionInputs = {
            inputAmount: metricMass,
            inputUnit: metricUnit,
            outputUnit: imperialUnit
          }
          var imperialMass = Object(
            _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__['default']
          )(conversionInputs)
          return {
            metricMass: metricMass,
            metricUnit: metricUnit,
            imperialMass: imperialMass,
            imperialUnit: imperialUnit
          }
        }

        /***/
      },

    /***/ './containers/MeasureConverter/converters/temperatureConverters/convertImperialTemperatureToMetric.js':
      /*!************************************************************************************************************!*\
  !*** ./containers/MeasureConverter/converters/temperatureConverters/convertImperialTemperatureToMetric.js ***!
  \************************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _validation_isInvalidTemperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../validation/isInvalidTemperature */ './containers/MeasureConverter/validation/isInvalidTemperature.js'
        )
        /* harmony import */ var _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../doConversion/doConversion */ './containers/MeasureConverter/doConversion/doConversion.js'
        )

        /* harmony default export */ __webpack_exports__['default'] = function(
          _ref
        ) {
          var temperatureState = _ref.temperatureState,
            event = _ref.event
          var imperialTemperature = getImperialTemperature({
            temperatureState: temperatureState,
            event: event
          })

          if (
            Object(
              _validation_isInvalidTemperature__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ]
            )(imperialTemperature)
          ) {
            return temperatureState
          }

          temperatureState = getNewTemperatureState({
            temperatureState: temperatureState,
            imperialTemperature: imperialTemperature
          })
          return temperatureState
        }

        var getImperialTemperature = function getImperialTemperature(_ref2) {
          var temperatureState = _ref2.temperatureState,
            event = _ref2.event

          if (!event) {
            return temperatureState.imperialTemperature
          }

          return event.target.value
        }

        var getNewTemperatureState = function getNewTemperatureState(_ref3) {
          var temperatureState = _ref3.temperatureState,
            imperialTemperature = _ref3.imperialTemperature
          var conversionInputs = {
            inputAmount: imperialTemperature,
            inputUnit: 'F',
            outputUnit: 'C'
          }
          var metricTemperature = Object(
            _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__['default']
          )(conversionInputs)
          return {
            imperialTemperature: imperialTemperature,
            metricTemperature: metricTemperature
          }
        }

        /***/
      },

    /***/ './containers/MeasureConverter/converters/temperatureConverters/convertMetricTemperatureToImperial.js':
      /*!************************************************************************************************************!*\
  !*** ./containers/MeasureConverter/converters/temperatureConverters/convertMetricTemperatureToImperial.js ***!
  \************************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _validation_isInvalidTemperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../validation/isInvalidTemperature */ './containers/MeasureConverter/validation/isInvalidTemperature.js'
        )
        /* harmony import */ var _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../doConversion/doConversion */ './containers/MeasureConverter/doConversion/doConversion.js'
        )

        /* harmony default export */ __webpack_exports__['default'] = function(
          _ref
        ) {
          var temperatureState = _ref.temperatureState,
            event = _ref.event
          var metricTemperature = getMetricTemperature({
            temperatureState: temperatureState,
            event: event
          })

          if (
            Object(
              _validation_isInvalidTemperature__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ]
            )(metricTemperature)
          ) {
            return temperatureState
          }

          temperatureState = getNewTemperatureState({
            temperatureState: temperatureState,
            metricTemperature: metricTemperature
          })
          return temperatureState
        }

        var getMetricTemperature = function getMetricTemperature(_ref2) {
          var temperatureState = _ref2.temperatureState,
            event = _ref2.event

          if (!event) {
            return temperatureState.metricTemperature
          }

          return event.target.value
        }

        var getNewTemperatureState = function getNewTemperatureState(_ref3) {
          var temperatureState = _ref3.temperatureState,
            metricTemperature = _ref3.metricTemperature
          var conversionInputs = {
            inputAmount: metricTemperature,
            inputUnit: 'C',
            outputUnit: 'F'
          }
          var imperialTemperature = Object(
            _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__['default']
          )(conversionInputs)
          return {
            metricTemperature: metricTemperature,
            imperialTemperature: imperialTemperature
          }
        }

        /***/
      },

    /***/ './containers/MeasureConverter/converters/volumeConverters/convertImperialVolumeToMetric.js':
      /*!**************************************************************************************************!*\
  !*** ./containers/MeasureConverter/converters/volumeConverters/convertImperialVolumeToMetric.js ***!
  \**************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _validation_isInvalidNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../validation/isInvalidNumber */ './containers/MeasureConverter/validation/isInvalidNumber.js'
        )
        /* harmony import */ var _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../doConversion/doConversion */ './containers/MeasureConverter/doConversion/doConversion.js'
        )

        /* harmony default export */ __webpack_exports__['default'] = function(
          _ref
        ) {
          var volumeState = _ref.volumeState,
            event = _ref.event,
            newUnit = _ref.newUnit
          var imperialVolume = getImperialVolume({
            volumeState: volumeState,
            event: event
          })
          var imperialUnit = getImperialUnit({
            volumeState: volumeState,
            newUnit: newUnit
          })

          if (
            Object(
              _validation_isInvalidNumber__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ]
            )(imperialVolume)
          ) {
            return volumeState
          }

          volumeState = getNewVolumeState({
            volumeState: volumeState,
            imperialUnit: imperialUnit,
            imperialVolume: imperialVolume
          })
          return volumeState
        }

        var getImperialUnit = function getImperialUnit(_ref2) {
          var volumeState = _ref2.volumeState,
            newUnit = _ref2.newUnit
          return newUnit || volumeState.imperialUnit
        }

        var getImperialVolume = function getImperialVolume(_ref3) {
          var volumeState = _ref3.volumeState,
            event = _ref3.event

          if (!event) {
            return volumeState.imperialVolume
          }

          return event.target.value
        }

        var getNewVolumeState = function getNewVolumeState(_ref4) {
          var volumeState = _ref4.volumeState,
            imperialUnit = _ref4.imperialUnit,
            imperialVolume = _ref4.imperialVolume
          var metricUnit = volumeState.metricUnit
          var conversionInputs = {
            inputAmount: imperialVolume,
            inputUnit: imperialUnit,
            outputUnit: metricUnit
          }
          var metricVolume = Object(
            _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__['default']
          )(conversionInputs)
          return {
            imperialVolume: imperialVolume,
            imperialUnit: imperialUnit,
            metricVolume: metricVolume,
            metricUnit: metricUnit
          }
        }

        /***/
      },

    /***/ './containers/MeasureConverter/converters/volumeConverters/convertMetricVolumeToImperial.js':
      /*!**************************************************************************************************!*\
  !*** ./containers/MeasureConverter/converters/volumeConverters/convertMetricVolumeToImperial.js ***!
  \**************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _validation_isInvalidNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../validation/isInvalidNumber */ './containers/MeasureConverter/validation/isInvalidNumber.js'
        )
        /* harmony import */ var _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../doConversion/doConversion */ './containers/MeasureConverter/doConversion/doConversion.js'
        )

        /* harmony default export */ __webpack_exports__['default'] = function(
          _ref
        ) {
          var volumeState = _ref.volumeState,
            event = _ref.event,
            newUnit = _ref.newUnit
          var metricVolume = getMetricVolume({
            volumeState: volumeState,
            event: event
          })
          var metricUnit = getMetricUnit({
            volumeState: volumeState,
            newUnit: newUnit
          })

          if (
            Object(
              _validation_isInvalidNumber__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ]
            )(metricVolume)
          ) {
            return volumeState
          }

          volumeState = getNewVolumeState({
            volumeState: volumeState,
            metricUnit: metricUnit,
            metricVolume: metricVolume
          })
          return volumeState
        }

        var getMetricUnit = function getMetricUnit(_ref2) {
          var volumeState = _ref2.volumeState,
            newUnit = _ref2.newUnit
          return newUnit || volumeState.metricUnit
        }

        var getMetricVolume = function getMetricVolume(_ref3) {
          var volumeState = _ref3.volumeState,
            event = _ref3.event

          if (!event) {
            return volumeState.metricVolume
          }

          return event.target.value
        }

        var getNewVolumeState = function getNewVolumeState(_ref4) {
          var volumeState = _ref4.volumeState,
            metricUnit = _ref4.metricUnit,
            metricVolume = _ref4.metricVolume
          var imperialUnit = volumeState.imperialUnit
          var conversionInputs = {
            inputAmount: metricVolume,
            inputUnit: metricUnit,
            outputUnit: imperialUnit
          }
          var imperialVolume = Object(
            _doConversion_doConversion__WEBPACK_IMPORTED_MODULE_1__['default']
          )(conversionInputs)
          return {
            metricVolume: metricVolume,
            metricUnit: metricUnit,
            imperialVolume: imperialVolume,
            imperialUnit: imperialUnit
          }
        }

        /***/
      },

    /***/ './containers/MeasureConverter/doConversion/doConversion.js':
      /*!******************************************************************!*\
  !*** ./containers/MeasureConverter/doConversion/doConversion.js ***!
  \******************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var convert_units__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! convert-units */ 'convert-units'
        )
        /* harmony import */ var convert_units__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          convert_units__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var round_precision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! round-precision */ 'round-precision'
        )
        /* harmony import */ var round_precision__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          round_precision__WEBPACK_IMPORTED_MODULE_1__
        )

        var doConversion = function doConversion(conversionInputs) {
          var inputAmount = conversionInputs.inputAmount,
            inputUnit = conversionInputs.inputUnit,
            outputUnit = conversionInputs.outputUnit

          if (inputIsNotNumber(inputAmount)) {
            return ''
          }

          var outputAmount = convert_units__WEBPACK_IMPORTED_MODULE_0___default()(
            inputAmount
          )
            .from(inputUnit)
            .to(outputUnit)
          outputAmount = round_precision__WEBPACK_IMPORTED_MODULE_1___default()(
            outputAmount,
            2
          )
          return outputAmount.toString()
        }

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = doConversion

        var inputIsNotNumber = function inputIsNotNumber(inputAmount) {
          return !!(!inputAmount || inputAmount === '.' || inputAmount === '-')
        }

        /***/
      },

    /***/ './containers/MeasureConverter/getInitialStateMethods/getInitialStateMethods.js':
      /*!**************************************************************************************!*\
  !*** ./containers/MeasureConverter/getInitialStateMethods/getInitialStateMethods.js ***!
  \**************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony default export */ __webpack_exports__[
          'default'
        ] = function() {
          var local = initializeLocal()
          local = getLocalStorage(local)
          var getInitial = getGetterFunctions(local)
          return getInitial
        }

        var initializeLocal = function initializeLocal() {
          return {
            massState: {
              imperialUnit: '',
              metricUnit: ''
            },
            volumeState: {
              imperialUnit: '',
              metricUnit: ''
            },
            lengthState: {
              imperialUnit: '',
              metricUnit: ''
            }
          }
        }

        var getLocalStorage = function getLocalStorage(local) {
          if (!JSON.parse(localStorage.getItem('local'))) {
            return local
          }

          return JSON.parse(localStorage.getItem('local'))
        }

        var getGetterFunctions = function getGetterFunctions(local) {
          var _getInitialMassUnits = getInitialMassUnits(local),
            massImperialUnit = _getInitialMassUnits.massImperialUnit,
            massMetricUnit = _getInitialMassUnits.massMetricUnit

          var _getInitialVolumeUnit = getInitialVolumeUnits(local),
            volumeImperialUnit = _getInitialVolumeUnit.volumeImperialUnit,
            volumeMetricUnit = _getInitialVolumeUnit.volumeMetricUnit

          var _getInitialLengthUnit = getInitialLengthUnits(local),
            lengthImperialUnit = _getInitialLengthUnit.lengthImperialUnit,
            lengthMetricUnit = _getInitialLengthUnit.lengthMetricUnit

          return {
            massImperialUnit: massImperialUnit,
            massMetricUnit: massMetricUnit,
            volumeImperialUnit: volumeImperialUnit,
            volumeMetricUnit: volumeMetricUnit,
            lengthImperialUnit: lengthImperialUnit,
            lengthMetricUnit: lengthMetricUnit
          }
        }

        var getInitialMassUnits = function getInitialMassUnits(local) {
          var _local$massState = local.massState,
            imperialUnit = _local$massState.imperialUnit,
            metricUnit = _local$massState.metricUnit
          imperialUnit = imperialUnit || 'lb'
          metricUnit = metricUnit || 'kg'

          var massImperialUnit = function massImperialUnit() {
            return imperialUnit
          }

          var massMetricUnit = function massMetricUnit() {
            return metricUnit
          }

          return {
            massImperialUnit: massImperialUnit,
            massMetricUnit: massMetricUnit
          }
        }

        var getInitialVolumeUnits = function getInitialVolumeUnits(local) {
          var _local$volumeState = local.volumeState,
            imperialUnit = _local$volumeState.imperialUnit,
            metricUnit = _local$volumeState.metricUnit
          imperialUnit = imperialUnit || 'Tbs'
          metricUnit = metricUnit || 'ml'

          var volumeImperialUnit = function volumeImperialUnit() {
            return imperialUnit
          }

          var volumeMetricUnit = function volumeMetricUnit() {
            return metricUnit
          }

          return {
            volumeImperialUnit: volumeImperialUnit,
            volumeMetricUnit: volumeMetricUnit
          }
        }

        var getInitialLengthUnits = function getInitialLengthUnits(local) {
          var _local$lengthState = local.lengthState,
            imperialUnit = _local$lengthState.imperialUnit,
            metricUnit = _local$lengthState.metricUnit
          imperialUnit = imperialUnit || 'in'
          metricUnit = metricUnit || 'cm'

          var lengthImperialUnit = function lengthImperialUnit() {
            return imperialUnit
          }

          var lengthMetricUnit = function lengthMetricUnit() {
            return metricUnit
          }

          return {
            lengthImperialUnit: lengthImperialUnit,
            lengthMetricUnit: lengthMetricUnit
          }
        }

        /***/
      },

    /***/ './containers/MeasureConverter/unitOptions/lengthOptions.js':
      /*!******************************************************************!*\
  !*** ./containers/MeasureConverter/unitOptions/lengthOptions.js ***!
  \******************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony default export */ __webpack_exports__['default'] = {
          imperialUnitOptions: ['ft', 'in'],
          metricUnitOptions: ['m', 'cm', 'mm']
        }

        /***/
      },

    /***/ './containers/MeasureConverter/unitOptions/massOptions.js':
      /*!****************************************************************!*\
  !*** ./containers/MeasureConverter/unitOptions/massOptions.js ***!
  \****************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony default export */ __webpack_exports__['default'] = {
          imperialUnitOptions: ['lb', 'oz'],
          metricUnitOptions: ['kg', 'g']
        }

        /***/
      },

    /***/ './containers/MeasureConverter/unitOptions/volumeOptions.js':
      /*!******************************************************************!*\
  !*** ./containers/MeasureConverter/unitOptions/volumeOptions.js ***!
  \******************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony default export */ __webpack_exports__['default'] = {
          imperialUnitOptions: [
            'gal',
            'qt',
            'pnt',
            'cup',
            'fl-oz',
            'Tbs',
            'tsp'
          ],
          metricUnitOptions: ['l', 'ml']
        }

        /***/
      },

    /***/ './containers/MeasureConverter/validation/isInvalidNumber.js':
      /*!*******************************************************************!*\
  !*** ./containers/MeasureConverter/validation/isInvalidNumber.js ***!
  \*******************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        var isInvalidNumber = function isInvalidNumber(number) {
          return !(!number || number.match(/^\d*(\.\d{0,2})?$/))
        }

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = isInvalidNumber

        /***/
      },

    /***/ './containers/MeasureConverter/validation/isInvalidTemperature.js':
      /*!************************************************************************!*\
  !*** ./containers/MeasureConverter/validation/isInvalidTemperature.js ***!
  \************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        var isInvalidTemperature = function isInvalidTemperature(temperature) {
          return !(!temperature || temperature.match(/^\-?\d*(\.\d{0,2})?$/))
        }

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = isInvalidTemperature

        /***/
      },

    /***/ './containers/TableRow/TableRow.js':
      /*!*****************************************!*\
  !*** ./containers/TableRow/TableRow.js ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return TableRow
          }
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var _components_TableRowComponent_TableRowComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../components/TableRowComponent/TableRowComponent */ './components/TableRowComponent/TableRowComponent.js'
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

        var TableRow =
          /*#__PURE__*/
          (function(_React$Component) {
            _inherits(TableRow, _React$Component)

            function TableRow(props) {
              var _this

              _classCallCheck(this, TableRow)

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(TableRow).call(this, props)
              )
              _this.state = {
                metricDropdownOpen: false,
                imperialDropdownOpen: false
              }
              _this.toggleMetric = _this.toggleMetric.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              _this.toggleImperial = _this.toggleImperial.bind(
                _assertThisInitialized(_assertThisInitialized(_this))
              )
              return _this
            }

            _createClass(TableRow, [
              {
                key: 'toggleMetric',
                value: function toggleMetric() {
                  this.setState(function(prevState) {
                    return {
                      metricDropdownOpen: !prevState.metricDropdownOpen
                    }
                  })
                }
              },
              {
                key: 'toggleImperial',
                value: function toggleImperial() {
                  this.setState(function(prevState) {
                    return {
                      imperialDropdownOpen: !prevState.imperialDropdownOpen
                    }
                  })
                }
              },
              {
                key: 'render',
                value: function render() {
                  var _this$props = this.props,
                    metricDropdown = _this$props.metricDropdown,
                    metricInput = _this$props.metricInput,
                    imperialInput = _this$props.imperialInput,
                    imperialDropdown = _this$props.imperialDropdown
                  metricDropdown.isOpen = this.state.metricDropdownOpen
                  metricDropdown.toggle = this.toggleMetric
                  imperialDropdown.isOpen = this.state.imperialDropdownOpen
                  imperialDropdown.toggle = this.toggleImperial
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_TableRowComponent_TableRowComponent__WEBPACK_IMPORTED_MODULE_1__[
                      'default'
                    ],
                    {
                      metricDropdown: metricDropdown,
                      metricInput: metricInput,
                      imperialInput: imperialInput,
                      imperialDropdown: imperialDropdown
                    }
                  )
                }
              }
            ])

            return TableRow
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)

        /***/
      },

    /***/ './pages/index.js':
      /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
      /*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./pages/index.js */ './pages/index.js'
        )

        /***/
      },

    /***/ 'convert-units':
      /*!********************************!*\
  !*** external "convert-units" ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('convert-units')

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
      },

    /***/ 'round-precision':
      /*!**********************************!*\
  !*** external "round-precision" ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('round-precision')

        /***/
      }

    /******/
  }
)
//# sourceMappingURL=index.js.map
