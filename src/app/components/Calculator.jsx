const formatCotizationName = (name) => {
  return name.replace('Dolar', '').replace('Contado con Liqui', 'CCL').trim()
}

export function Calculator({ cotization, idSelected, amount, onChange }) {
  return (
    <>
      <section className="rounded-xl p-4">
        <form className="w-full">
          <label className="block space-y-3 text-lg">
            <span>Monto en $ Argentinos:</span>
            <input
              className="block w-full rounded-full bg-gray-200 p-2 text-right text-3xl text-gray-800 font-bold"
              type="number"
              value={amount}
              onChange={(e) => onChange(e.target.value)}
            />
          </label>
        </form>
      </section>
      <section className=" bg-emerald-800 rounded-xl p-4 m-4">
        <ul className="flex flex-col gap-4 text-white">
          {cotization
            .filter((item) => item.id.toString() === idSelected.toString())
            .map(({ name, buy, sell }) => (
              <li key={name} className="flex justify-between items-end gap-4">
                <div className=" font-bold">{formatCotizationName(name)}</div>
                <div className="flex items-center gap-4">
                  <div className="text-xl font-bold ">
                    <div className="text-sm opacity-50">Compra</div>
                    {Number(amount / buy).toLocaleString('es-AR', {
                      style: 'currency',
                      currency: 'ARS'
                    })}
                  </div>
                  <div className="text-xl font-bold ">
                    <div className="text-sm opacity-50">Venta</div>
                    {Number(amount / sell).toLocaleString('es-AR', {
                      style: 'currency',
                      currency: 'ARS'
                    })}
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </>
  )
}
