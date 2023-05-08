import { formatCotizationName, formatCotizationValue } from '../utils/helper'

export function Calculator({ cotization, idSelected, amount, onChange }) {
  const currentCotization = cotization.find(
    (item) => item.id.toString() === idSelected.toString()
  )
  const { name, buy, sell } = currentCotization

  return (
    <>
      <section className="rounded-xl p-4">
        <form className="w-full">
          <div className="space-y-3 text-lg text-center mb-2">
            ARS: {formatCotizationValue(amount)}{' '}
          </div>
          <label className="space-y-3 text-lg">
            <input
              className="w-full rounded-full bg-gray-200 p-2 text-right text-3xl text-gray-800 font-bold"
              type="number"
              value={amount}
              onClick={(e) => e.target.select()}
              onChange={(e) => onChange(e.target.value)}
            />
          </label>
        </form>
      </section>
      <section className=" bg-emerald-800 rounded-xl p-4">
        <ul className="flex flex-col gap-4 text-white">
          <li key={name} className="flex items-center justify-around gap-2">
            <div className="font-bold">{formatCotizationName(name)}</div>
            <div className="grid items-end text-end gap-4">
              <div className="text-xl font-bold ">
                <div className="text-sm opacity-50">Compra</div>
                {buy === 0 ? 'No Cotiza' : formatCotizationValue(amount / buy)}
              </div>
              <div className="text-xl font-bold ">
                <div className="text-sm opacity-50">Venta</div>
                {sell === 0
                  ? 'No Cotiza'
                  : formatCotizationValue(amount / sell)}
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}
