export const formatCotizationName = (name) => {
  return name.replace('Dolar', '').replace('Contado con Liqui', 'CCL').trim()
}

export const formatCotizationValue = (value) => {
  return Number(value).toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS'
  })
}
