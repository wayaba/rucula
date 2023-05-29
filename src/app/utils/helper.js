import { CURRENCY } from './currency'

export const formatCotizationName = (name) => {
  return name.replace('Dolar', '').replace('turista', 'Turista').trim()
}

const getCurrencyObject = (currencySelected) => {
  return CURRENCY.find((item) => item.value === currencySelected)
}

export const formatCotizationValue = (value, currencySelected = null) => {
  const currency = currencySelected
    ? getCurrencyObject(currencySelected).currency
    : 'ARS'

  return Number(value).toLocaleString('es-AR', {
    style: 'currency',
    currency: currency
  })
}

export const convertCurrency = (amount, operation, currencySelected) => {
  const currencyObject = getCurrencyObject(currencySelected)

  const currency = currencyObject
    ? currencyObject.currencyAfterOperation
    : 'ARS'

  const value =
    currencyObject.operator === '/' ? amount / operation : amount * operation

  return Number(value).toLocaleString('es-AR', {
    style: 'currency',
    currency: currency
  })
}
