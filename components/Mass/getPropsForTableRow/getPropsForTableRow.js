export default massProps => {
  const metricDropdown = getMetricDropdown(massProps)
  const metricInput = getMetricInput(massProps)
  const imperialInput = getImperialInput(massProps)
  const imperialDropdown = getImperialDropdown(massProps)
  return {
    metricDropdown,
    metricInput,
    imperialInput,
    imperialDropdown
  }
}

const getMetricDropdown = massProps => {
  const { massState, onMetricMassChange, massUnitOptions } = massProps
  const { metricUnit } = massState
  const { metricUnitOptions } = massUnitOptions
  return {
    value: metricUnit,
    onChange: onMetricMassChange,
    options: metricUnitOptions
  }
}

const getMetricInput = massProps => {
  const { massState, onMetricMassChange } = massProps
  const { metricMass } = massState
  return {
    value: metricMass,
    onChange: onMetricMassChange
  }
}

const getImperialInput = massProps => {
  const { massState, onImperialMassChange } = massProps
  const { imperialMass } = massState
  return {
    value: imperialMass,
    onChange: onImperialMassChange
  }
}

const getImperialDropdown = massProps => {
  const { massState, onImperialMassChange, massUnitOptions } = massProps
  const { imperialUnit } = massState
  const { imperialUnitOptions } = massUnitOptions
  return {
    value: imperialUnit,
    onChange: onImperialMassChange,
    options: imperialUnitOptions
  }
}
