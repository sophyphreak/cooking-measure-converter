webpackHotUpdate('static/development/pages/index.js', {
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
        /*! react */ './node_modules/react/index.js'
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

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        }
        return self
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
                var massState = state.massState
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
                  onImperialTemperatureChange: this.onImperialTemperatureChange,
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
                    temperatureProps: temperatureProps,
                    toggleContactUs: this.props.toggleContactUs
                  }
                )
              }
            }
          ])

          return MeasureConverter
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)

      /***/
    }
})
//# sourceMappingURL=index.js.5a37abd4783834e6d2eb.hot-update.js.map
