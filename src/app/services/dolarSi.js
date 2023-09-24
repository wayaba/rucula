export const getCotization = async () => {
  try {
    const response = await fetch(
      //'https://www.dolarsi.com/api/api.php?type=valoresprincipales'
      ' https://dolarapi.com/v1/dolares'
    )

    if (!response.ok)
      return res.text().then((text) => {
        throw new Error(text)
      })

    const json = await response.json()
    const cotizations = json
      .filter((item) =>
        ['oficial', 'blue', 'bolsa', 'solidario'].includes(item.casa)
      )
      .map((item, index) => {
        const buy = item.compra === null ? 0 : item.compra
        const sell = item.venta === null ? 0 : item.venta
        return {
          name: item.casa === 'solidario' ? 'Turista' : item.nombre,
          buy: buy,
          sell: sell,
          id: index
        }
      })

    // .map((item, index) => {
    //   const buy =
    //     item.compra === null ? 0 : Number(item.compra.replace(',', '.'))
    //   const sell =
    //     item.venta === null ? 0 : Number(item.venta.replace(',', '.'))
    //   return {
    //     name: item.nombre,
    //     buy: buy,
    //     sell: sell,
    //     id: index
    //   }
    // })

    // const cotizations = json
    //   .filter((item) =>
    //     [
    //       'Dolar Blue',
    //       'Dolar Oficial',
    //       'Dolar Bolsa',
    //       'Dolar turista'
    //     ].includes(item.casa.nombre)
    //   )
    //   .map(({ casa }, index) => {
    //     const buy =
    //       casa.compra === 'No Cotiza'
    //         ? 0
    //         : Number(casa.compra.replace(',', '.'))
    //     const sell =
    //       casa.venta === 'No Cotiza' ? 0 : Number(casa.venta.replace(',', '.'))
    //     return {
    //       name: casa.nombre,
    //       buy: buy,
    //       sell: sell,
    //       id: index
    //     }
    //   })

    return {
      dateTime: new Date(),
      items: cotizations
    }
  } catch (e) {
    console.log('error en el fetch', e)
  }
}
