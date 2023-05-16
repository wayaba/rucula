'use client'

import { useEffect, useState } from 'react'
import { Cotization } from '../components/Cotization'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Calculator } from '../components/Calculator'
import { getCotization } from '../services/dolarSi'

export default function HomeClient() {
  const [amount, setAmount] = useState(0)
  const [idSelected, setIdSelected] = useState(0)
  const [dateTime, setDateTime] = useState('')
  const [cotization, setCotization] = useState(null)

  const getCotizaciones = async () => {
    const currentCotization = await getCotization()
    setCotization(
      currentCotization.map((item, index) => {
        return { ...item, id: index }
      })
    )
  }

  useEffect(() => {
    setDateTime(new Date().toLocaleString())
    getCotizaciones()
  }, [])

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
        {cotization && (
          <>
            {' '}
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
          </>
        )}
      </section>

      <Footer author="Pablo Pedraza" github="wayaba" />
    </>
  )
}
