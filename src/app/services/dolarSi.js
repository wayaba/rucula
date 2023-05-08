export const getCotization = async () => {
  try {
    const response = await fetch(
      'https://www.dolarsi.com/api/api.php?type=valoresprincipales'
    )

    if (!response.ok) throw new Error('Error al hacer fetch')

    const json = await response.json()

    const pepe = json
      .filter((item) =>
        [
          'Dolar Blue',
          'Dolar Oficial',
          'Dolar Bolsa',
          'Dolar Contado con Liqui'
        ].includes(item.casa.nombre)
      )
      .map(({ casa }) => ({
        name: casa.nombre,
        buy: Number(casa.compra.replace(',', '.')),
        sell: Number(casa.venta.replace(',', '.'))
      }))
    return pepe
  } catch (e) {
    console.log('error en el fetch', e)
  }
}
