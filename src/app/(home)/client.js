'use client'

import { useState } from 'react'
import { Form } from '../components/Form'
import { Cotization } from '../components/Cotization'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function HomeClient({ cotization, dateTime }) {
  const [amount, setAmount] = useState(0)
  return (
    <main className="bg-gray-600 text-white shadow-md rounded-xl p-4">
      <Header dateTime={dateTime} />
      <Cotization cotization={cotization} />
      {/* <Form value={amount} onChange={(value) => setAmount(value)} /> */}
      <Footer author="Pablo Pedraza" github="wayaba" />
    </main>
  )
}
