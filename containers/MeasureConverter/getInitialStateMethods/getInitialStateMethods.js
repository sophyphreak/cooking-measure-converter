export default () => {
  let local = initializeLocal()
  local = getLocalStorage(local)
  const getInitial = getGetterFunctions(local)
  return getInitial
}

const initializeLocal = () => ({
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
})

const getLocalStorage = local => {
  if (!JSON.parse(localStorage.getItem('local'))) {
    return local
  }
  return JSON.parse(localStorage.getItem('local'))
}

const getGetterFunctions = local => {
  const { massImperialUnit, massMetricUnit } = getInitialMassUnits(local)
  const { volumeImperialUnit, volumeMetricUnit } = getInitialVolumeUnits(local)
  const { lengthImperialUnit, lengthMetricUnit } = getInitialLengthUnits(local)
  return {
    massImperialUnit,
    massMetricUnit,
    volumeImperialUnit,
    volumeMetricUnit,
    lengthImperialUnit,
    lengthMetricUnit
  }
}

const getInitialMassUnits = local => {
  let { imperialUnit, metricUnit } = local.massState
  imperialUnit = imperialUnit || 'lb'
  metricUnit = metricUnit || 'kg'
  const massImperialUnit = () => imperialUnit
  const massMetricUnit = () => metricUnit
  return {
    massImperialUnit,
    massMetricUnit
  }
}

const getInitialVolumeUnits = local => {
  let { imperialUnit, metricUnit } = local.volumeState
  imperialUnit = imperialUnit || 'Tbs'
  metricUnit = metricUnit || 'ml'
  const volumeImperialUnit = () => imperialUnit
  const volumeMetricUnit = () => metricUnit
  return {
    volumeImperialUnit,
    volumeMetricUnit
  }
}

const getInitialLengthUnits = local => {
  let { imperialUnit, metricUnit } = local.lengthState
  imperialUnit = imperialUnit || 'in'
  metricUnit = metricUnit || 'cm'
  const lengthImperialUnit = () => imperialUnit
  const lengthMetricUnit = () => metricUnit
  return {
    lengthImperialUnit,
    lengthMetricUnit
  }
}
