import { formatCotizationName, formatCotizationValue } from '../utils/helper'

export function Calculator({ cotization, idSelected, amount, onChange }) {
  const currentCotization = cotization.find(
    (item) => item.id.toString() === idSelected.toString()
  )
  const { name, buy, sell } = currentCotization

  // const CURRENCY = [
  //   {
  //     name: 'Pesos $',
  //     value: 'pesos'
  //   },
  //   {
  //     name: 'Dólares U$D',
  //     value: 'dolares'
  //   }
  // ]

  return (
    <>
      <section className="rounded-xl p-4">
        <form className="w-full">
          <div className="space-y-3 text-lg text-center mb-2">
            ARS: {formatCotizationValue(amount)}{' '}
          </div>
          {/* <div className="flex space-y-3 text-lg text-center justify-center mb-2 align-middle">
            <ul className="flex items-center justify-center">
              {CURRENCY.map(({ name, value, icon }) => (
                <li
                  key={value}
                  className="ml-2 mr-2 border border-gray-100 rounded-lg p-1"
                >
                  <label>
                    <input
                      defaultChecked={'pesos' === value}
                      className="peer"
                      hidden
                      type="radio"
                      name="currency"
                      value={value}
                    />
                    <span className="peer-checked:opacity-100 hover:opacity-75 hover:scale-125 transition cursor-pointer opacity-40">
                      {name}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div> */}
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
