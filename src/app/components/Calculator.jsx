import {
  convertCurrency,
  formatCotizationName,
  formatCotizationValue
} from '../utils/helper'
import { CURRENCY } from '../utils/currency'

export function Calculator({
  cotization,
  idSelected,
  amount,
  onChange,
  currencySelected,
  handleChangeCurrency
}) {
  const currentCotization = cotization.find(
    (item) => item.id.toString() === idSelected.toString()
  )
  const { name, buy, sell } = currentCotization

  return (
    <>
      <section className="rounded-xl p-4">
        <form className="w-full">
          <ul className="flex gap-2 items-center justify-center">
            {CURRENCY.map((item) => (
              <li key={item.value} className="flex justify-between gap-4">
                <label>
                  <input
                    defaultChecked={
                      currencySelected.toString() === item.value.toString()
                    }
                    checked={currencySelected === item.value.toString()}
                    className="peer"
                    hidden
                    type="radio"
                    name="currencyType"
                    value={item.value.toString()}
                    onChange={(e) => handleChangeCurrency(e.target.value)}
                  />
                  <span
                    className="peer-checked:opacity-100 hover:opacity-75 hover:scale-125 transition cursor-pointer opacity-40 border
              rounded-md p-2 peer-checked:bg-gray-800 "
                  >
                    {item.name}
                  </span>
                </label>
              </li>
            ))}
          </ul>
          <div className="mt-2 text-lg text-center mb-2">
            {formatCotizationValue(amount, currencySelected)}{' '}
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
            <div className="font-bold">
              {formatCotizationName(name, currencySelected)}
            </div>
            <div className="grid items-end text-end gap-4">
              <div className="text-xl font-bold ">
                <div className="text-sm opacity-50">Compra</div>
                {buy === 0
                  ? 'No Cotiza'
                  : convertCurrency(amount, buy, currencySelected)}
              </div>
              <div className="text-xl font-bold ">
                <div className="text-sm opacity-50">Venta</div>
                {sell === 0
                  ? 'No Cotiza'
                  : convertCurrency(amount, sell, currencySelected)}
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}
