export const formatCotizationName = (name) => {
  return name.replace('Dolar', '').replace('turista', 'Turista').trim()
}

export const formatCotizationValue = (value) => {
  return Number(value).toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS'
  })
}
