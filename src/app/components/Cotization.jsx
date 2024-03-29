'use client'

import { formatCotizationName, formatCotizationValue } from '../utils/helper'

export function Cotization({ cotization, onChange, idSelected }) {
  return (
    <section className=" bg-emerald-800 rounded-xl p-2">
      <ul className="flex flex-col text-white gap-2">
        {cotization.map(({ name, buy, sell, id }) => (
          
          <li key={name} className="flex justify-between gap-4 items-center">
            <label>
              <input
              
              checked={idSelected.toString() === id.toString()}
                className="peer"
                hidden
                type="radio"
                name="currencyType"
                value={id.toString()}
                onChange={(e) => onChange(e.target.value)}
              />
              <span
                className="peer-checked:opacity-100 hover:opacity-75 hover:scale-125 transition cursor-pointer opacity-40 border
              rounded-md p-2 peer-checked:bg-emerald-900 "
              >
                {formatCotizationName(name)}
              </span>
            </label>
            <div className="flex items-center gap-4">
              <div className="text-md  ">
                <div className="text-xs opacity-50">Compra</div>
                {buy === 0 ? 'No Cotiza' : formatCotizationValue(buy)}
              </div>
              <div className="text-md  ">
                <div className="text-xs opacity-50">Venta</div>
                {sell === 0 ? 'No Cotiza' : formatCotizationValue(sell)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
