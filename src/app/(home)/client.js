'use client'

import { useState } from 'react'
import { Form } from '../components/Form'

export default function HomeClient({ cotization }) {
  const [amount, setAmount] = useState(0)
  console.log(amount)
  return (
    <main className="bg-gray-600 text-emerald-600 shadow-md rounded-xl p-4">
      <section className="rounded-xl p-4">
        <Form value={amount} onChange={(value) => setAmount(value)}></Form>
      </section>
      <section className="bg-emerald-800 rounded-xl p-4">
        <ul className="flex flex-col gap-4">
          {cotization.map(({ name, buy, sell }) => (
            <li key={name} className="flex items-center justify-between gap-4">
              <div className="text-white">{name}</div>
              <div className="text-3xl font-bold text-white">
                {Number(buy).toLocaleString('es-AR', {
                  style: 'currency',
                  currency: 'ARS'
                })}
              </div>
              <div className="text-3xl font-bold text-white">
                {Number(sell).toLocaleString('es-AR', {
                  style: 'currency',
                  currency: 'ARS'
                })}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
