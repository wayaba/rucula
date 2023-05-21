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

  const handleChange = (value) => {
    setIdSelected(value)
  }
  const handleChangeAmount = (value) => {
    setAmount(value)
  }

  return (
    <>
      <Header />
      <section className="bg-gray-600 text-white shadow-md rounded-xl p-2 m-2">
        <div className="text-center m-1">
          <small className="opacity-50 text-center">{dateTime}</small>
        </div>

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
      </section>

      <Footer author="Pablo Pedraza" github="wayaba" />
    </>
  )
}
