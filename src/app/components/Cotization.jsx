'use client'

import { formatCotizationName, formatCotizationValue } from '../utils/helper'

export function Cotization({ cotization, onChange, idSelected }) {
  return (
    <section className=" bg-emerald-800 rounded-xl p-4">
      <ul className="flex flex-col text-white">
        {cotization.map(({ name, buy, sell, id }) => (
          <li key={name} className="flex justify-between items-end gap-4">
            <div className="font-bold">
              <input
                type="radio"
                className="mr-2"
                value={id}
                checked={idSelected.toString() === id.toString()}
                name="currencyType"
                onChange={(e) => onChange(e.target.value)}
              />
              {formatCotizationName(name)}
            </div>
            <div className="flex items-center gap-4">
              <div className="text-md  ">
                <div className="text-sm opacity-50">Compra</div>
                {buy === 0 ? 'No Cotiza' : formatCotizationValue(buy)}
              </div>
              <div className="text-md  ">
                <div className="text-sm opacity-50">Venta</div>
                {sell === 0 ? 'No Cotiza' : formatCotizationValue(sell)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
