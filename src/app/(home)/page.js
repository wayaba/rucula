import { getCotization } from '../services/dolarSi'
import HomeClient from './client'

export default async function Home() {
  const cotization = await getCotization()
  const currentDateTime = new Date().toLocaleString()

  return <HomeClient cotization={cotization} dateTime={currentDateTime} />
}
