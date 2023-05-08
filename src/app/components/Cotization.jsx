const formatCotizationName = (name) => {
  return name.replace('Dolar', '').trim()
}
export function Cotization({ cotization }) {
  return (
    <section className=" bg-emerald-800 rounded-xl p-4">
      <ul className="flex flex-col gap-4 text-white">
        {cotization.map(({ name, buy, sell }) => (
          <li key={name} className="flex justify-between gap-4 items-end">
            <div className=" font-bold">{formatCotizationName(name)}</div>
            <div className="flex items-center gap-4">
              <div className="text-xl font-bold ">
                <div className="text-sm opacity-50">Compra</div>
                {Number(buy).toLocaleString('es-AR', {
                  style: 'currency',
                  currency: 'ARS'
                })}
              </div>
              <div className="text-xl font-bold ">
                <div className="text-sm opacity-50">Venta</div>
                {Number(sell).toLocaleString('es-AR', {
                  style: 'currency',
                  currency: 'ARS'
                })}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
