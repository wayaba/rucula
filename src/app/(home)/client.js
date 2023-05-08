'use client'

import { useEffect, useState } from 'react'
import { Cotization } from '../components/Cotization'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Calculator } from '../components/Calculator'

export default function HomeClient({ cotization }) {
  const [amount, setAmount] = useState(0)
  const [idSelected, setIdSelected] = useState(0)
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    setDateTime(new Date().toLocaleString())
  }, [])

  const handleChange = (value) => {
    setIdSelected(value)
  }
  const handleChangeAmount = (value) => {
    setAmount(value)
  }
  return (
    <main className="bg-gray-600 text-white shadow-md rounded-xl p-4">
      <Header dateTime={dateTime} />
      <Cotization
        cotization={cotization}
        idSelected={idSelected}
        onChange={(value) => handleChange(value)}
      />
      <Calculator
        cotization={cotization}
        idSelected={idSelected}
        amount={amount}
        onChange={(value) => handleChangeAmount(value)}
      />
      <Footer author="Pablo Pedraza" github="wayaba" />
    </main>
  )
}
