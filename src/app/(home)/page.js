import { getCotization } from '../services/dolarSi'
import HomeClient from './client'

export default async function Home() {
  const cotization = await getCotization()

  return <HomeClient cotization={cotization} />
}
