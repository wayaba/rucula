'use client'

import { useEffect, useState } from 'react'
import { Cotization } from '../components/Cotization'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Calculator } from '../components/Calculator'
import { Cafecito, ReloadIcon } from '../components/Icons'
import { getCotization } from '../services/dolarSi'
import { Spinner } from '../components/Spinner'

export default function HomeClient({ cotization }) {
  const [amount, setAmount] = useState(0)
  const [idSelected, setIdSelected] = useState(1)
  const [currencySelected, setCurrencySelected] = useState('pesos')
  const [currentCotization, setCurrentCotization] = useState(cotization)
  const [loading, setLoading] = useState(false)

  const [currentDateTime, setCurrentDateTime] = useState('23/5/2023, 9:56:11')

  useEffect(
    () => setCurrentDateTime(new Date(cotization.dateTime).toLocaleString()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const handleChange = (value) => {
    setIdSelected(value)
  }
  const handleChangeCurrency = (value) => {
    setCurrencySelected(value)
  }

  const handleChangeAmount = (value) => {
    setAmount(value)
  }

  const handleClickUpdate = async () => {
    setLoading(true)
    const newCotization = await getCotization()
    setCurrentCotization(() => newCotization)
    setCurrentDateTime(new Date().toLocaleString())
    setLoading(false)
  }

  return (
    <>
      <Header />
      {loading && <Spinner />}
      <section className="bg-gray-600 text-white shadow-md rounded-xl p-2 m-2">
        <div className="flex flex-1 text-center m-1 justify-center gap-2">
          <a
            href="https://cafecito.app/pablojpedraza"
            rel="noopener"
            target="_blank"
            className="text-center items-center justify-center hover:opacity-70"
          >
            <Cafecito />
          </a>
          <button
            className="flex items-center cursor-pointer hover:opacity-70"
            title="Actualizar"
            onClick={handleClickUpdate}
          >
            <small className="opacity-50 text-center mr-2">
              {currentDateTime}
            </small>
            <ReloadIcon />
          </button>
        </div>

        <Cotization
          cotization={currentCotization.items}
          idSelected={idSelected}
          onChange={(value) => handleChange(value)}
        />
        <Calculator
          cotization={currentCotization.items}
          idSelected={idSelected}
          currencySelected={currencySelected}
          amount={amount}
          onChange={(value) => handleChangeAmount(value)}
          handleChangeCurrency={(value) => handleChangeCurrency(value)}
        />
      </section>

      <Footer author="Pablo Pedraza" github="wayaba" />
    </>
  )
}
