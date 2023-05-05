'use client'

import { useState } from 'react'
import { Form } from '../components/Form'
import { Cotization } from '../components/Cotization'

export default function HomeClient({ cotization }) {
  const [amount, setAmount] = useState(0)
  console.log(amount)
  return (
    <main className="bg-gray-600 text-emerald-600 shadow-md rounded-xl p-4">
      <section className="rounded-xl p-4">
        <Form value={amount} onChange={(value) => setAmount(value)}></Form>
      </section>
      <section className="bg-emerald-800 rounded-xl p-4">
        <Cotization cotization={cotization} />
      </section>
    </main>
  )
}
